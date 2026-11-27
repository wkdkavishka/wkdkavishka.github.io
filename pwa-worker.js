// Shared engine: preparePwaExport() fills out/sw.js; pwa-worker.js freezes the
// Next build version. Keep these declarations on one line for both preparers.
const CACHE_NAME = "wkdkavishka-pwa-dev";
const PRECACHE_ASSETS = [];
const PWA_MODE = "next";
const CACHE_PREFIX = "wkdkavishka-pwa-v1-";
// Older workers sweep CACHE_PREFIX. Keep new install attempts out of their reach.
const STORE_PREFIX = "wkdkavishka-pwa-store-v2:";
const CLIENT_CACHE = "wkdkavishka-pwa-clients-v1";
const RELEASE_CACHE = "wkdkavishka-pwa-releases-v2";
const STORE_LOCK = "wkdkavishka-pwa-store";
const MANIFEST_URL = new URL("/__pwa_manifest__", self.location.origin).href;
const CLIENT_URL = new URL("/__pwa_clients__/", self.location.origin).href;
const RELEASE_URL = new URL("/__pwa_release__/", self.location.origin).href;
const HISTORY_URL = new URL("/__pwa_history__", self.location.origin).href;
const OFFLINE_PAGE = "/offline.html";
const PORTFOLIO_DOCUMENT = "/portfolio-document.html";
const ABANDONED_ATTEMPT_AGE = 30 * 60 * 1000;
const NAVIGATION_PIN_GRACE = 30 * 1000;

let installProgress;
let lastProgressReport = -Infinity;
let progressTimer;
let cleanup;
let rememberedSnapshot;

function sendInstallProgress(client, progress) {
  try {
    client.postMessage({ type: "PWA_INSTALL_PROGRESS", ...progress });
  } catch {
    // A closed window must not interrupt installation.
  }
}

function reportInstallProgress() {
  if (!installProgress) return;
  const now = Date.now();
  const delay = 250 - (now - lastProgressReport);
  // Flush the latest snapshot even if the next file takes much longer.
  if (delay > 0) {
    progressTimer ??= setTimeout(() => {
      progressTimer = undefined;
      reportInstallProgress();
    }, delay);
    return;
  }
  clearTimeout(progressTimer);
  progressTimer = undefined;
  lastProgressReport = now;
  const progress = installProgress;
  // The installing worker does not control the app's windows yet.
  void self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((clients) => {
    for (const client of clients) sendInstallProgress(client, progress);
  }).catch(() => {});
}

async function readRecord(cacheName, url) {
  const response = await caches.match(url, { cacheName });
  return response ? response.json().catch(() => null) : null;
}

async function writeRecord(cacheName, url, value) {
  await (await caches.open(cacheName)).put(url, Response.json(value));
}

function withStoreLock(task) {
  const locks = self.navigator?.locks;
  return locks ? locks.request(STORE_LOCK, task) : task();
}

function releaseOf(cacheName) {
  if (typeof cacheName !== "string") return null;
  if (cacheName.startsWith(STORE_PREFIX)) return cacheName.slice(STORE_PREFIX.length).split(":")[0];
  return cacheName.startsWith(CACHE_PREFIX) ? cacheName : null;
}

async function readSnapshot(cacheName) {
  const version = releaseOf(cacheName);
  if (!version) return null;
  const manifest = await readRecord(cacheName, MANIFEST_URL);
  if (manifest?.mode !== PWA_MODE || !Array.isArray(manifest.assets) || !manifest.assets.length ||
    (cacheName !== version && (manifest.release !== version || !Number.isFinite(manifest.completedAt)))) return null;
  return { version, cacheName, manifest };
}

async function currentSnapshot() {
  const cacheName = (await readRecord(RELEASE_CACHE, RELEASE_URL + CACHE_NAME))?.cacheName;
  return releaseOf(cacheName) === CACHE_NAME ? readSnapshot(cacheName) : null;
}

async function reusableSnapshot() {
  // Prefer the last completed attempt, but verify the bytes before reusing it.
  for (const cacheName of (await caches.keys()).reverse()) {
    if (releaseOf(cacheName) !== CACHE_NAME) continue;
    const snapshot = await readSnapshot(cacheName);
    if (snapshot && await verifySavedRelease(snapshot)) return snapshot;
  }
  return null;
}

const homePath = PWA_MODE === "next" ? "/" : "/index.html";

function matchSnapshot(snapshot, path) {
  return snapshot && caches.match(new URL(path, self.location.origin), { cacheName: snapshot.cacheName });
}

async function previousSnapshot(history) {
  // The last recorded active copy can be our predecessor if activation was interrupted.
  for (const cacheName of [history?.active, history?.previous]) {
    if (releaseOf(cacheName) === CACHE_NAME) continue;
    const snapshot = await readSnapshot(cacheName);
    if (await matchSnapshot(snapshot, homePath)) return snapshot;
  }
  // The first upgrade has no history record. Preserve the last activated legacy copy.
  let previous = null;
  for (const name of await caches.keys()) {
    if (!name.startsWith(CACHE_PREFIX) || name === CACHE_NAME) continue;
    const snapshot = await readSnapshot(name);
    if (snapshot?.manifest.activated && (!previous || snapshot.manifest.activatedAt > previous.manifest.activatedAt) &&
      await matchSnapshot(snapshot, homePath)) {
      previous = snapshot;
    }
  }
  return previous;
}

const readHistory = () => readRecord(RELEASE_CACHE, HISTORY_URL);

async function rememberActivation(snapshot) {
  if (!snapshot || rememberedSnapshot === snapshot.cacheName) return;
  const history = await readHistory();
  if (history?.active !== snapshot.cacheName) {
    const previous = await previousSnapshot(history);
    await writeRecord(RELEASE_CACHE, HISTORY_URL, { active: snapshot.cacheName, previous: previous?.cacheName });
  }
  rememberedSnapshot = snapshot.cacheName;
}

async function pinClient(clientId, snapshot) {
  if (!clientId) return;
  // Keep the old release field for migration. A network-only navigation must
  // not inherit our assets: it may have loaded HTML from a newer deployment.
  await writeRecord(CLIENT_CACHE, CLIENT_URL + clientId, snapshot ? {
    cacheName: snapshot.version,
    snapshot: snapshot.cacheName,
    pinnedAt: Date.now(),
  } : { network: true, pinnedAt: Date.now() });
}

const readPin = (clientId) => clientId ? readRecord(CLIENT_CACHE, CLIENT_URL + clientId) : null;

async function pinnedSnapshot(pin) {
  if (!pin || pin.network) return null;
  const snapshot = await readSnapshot(pin.snapshot ?? pin.cacheName);
  return snapshot?.version === pin.cacheName ? snapshot : null;
}

async function retainedSnapshots() {
  const clients = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
  const liveIds = new Set(clients.map((client) => client.id));
  const metadata = await caches.open(CLIENT_CACHE);
  const retained = new Set();
  const mapped = new Set();
  for (const request of await metadata.keys()) {
    const id = request.url.slice(CLIENT_URL.length);
    const response = await metadata.match(request);
    if (!response) continue;
    const pin = await response.json();
    if (!pin) continue;
    if (liveIds.has(id)) {
      mapped.add(id);
      retained.add(pin.snapshot ?? pin.cacheName);
    } else if (Date.now() - pin.pinnedAt < NAVIGATION_PIN_GRACE) {
      // A resultingClientId can be pinned before matchAll can see the window.
      retained.add(pin.snapshot ?? pin.cacheName);
    } else {
      await metadata.delete(request);
    }
  }
  // The generated portfolio document has no app JS or external assets and never
  // sends PWA_STATUS. Other unknown windows may still need their old release.
  return { retained, unknown: clients.some((client) => !mapped.has(client.id) &&
    new URL(client.url).pathname !== PORTFOLIO_DOCUMENT) };
}

function registrationIsSettled() {
  return self.registration.active?.state === "activated" &&
    !self.registration.installing && !self.registration.waiting;
}

async function cleanupCaches() {
  if (!registrationIsSettled()) return;
  const current = await currentSnapshot();
  if (!await matchSnapshot(current, homePath)) return;
  const previous = await previousSnapshot(await readHistory());
  const { retained, unknown } = await retainedSnapshots();
  retained.add(current.cacheName);
  if (previous) retained.add(previous.cacheName);
  for (const name of await caches.keys()) {
    if (!registrationIsSettled()) return; // A new attempt may now be installing or waiting.
    if (retained.has(name)) continue;
    const oldFormat = /^pwa-cache-(?:dev|\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d\.\d{3}Z)$/.test(name);
    if (name.startsWith(STORE_PREFIX)) {
      const beganAt = Number(name.split(":")[2]);
      const snapshot = await readSnapshot(name);
      if (!(Date.now() - Math.max(beganAt, snapshot?.manifest.completedAt ?? 0) >= ABANDONED_ATTEMPT_AGE)) continue;
      // An unknown tab may need a complete copy when it identifies itself, but
      // never an attempt that did not finish downloading.
      if (unknown && snapshot) continue;
    } else if (unknown || (!name.startsWith(CACHE_PREFIX) && !oldFormat)) {
      continue;
    }
    if (!registrationIsSettled()) return;
    await caches.delete(name);
  }
}

function requestCleanup() {
  // Without a shared lock, keep serving offline but don't race a pin or install.
  if (!self.navigator?.locks) return;
  cleanup ??= withStoreLock(cleanupCaches).catch((error) => console.warn("[PWA] Cache cleanup postponed", error))
    .finally(() => { cleanup = undefined; });
  return cleanup;
}

function validateAssets(assets) {
  if (!Array.isArray(assets) || !assets.length) throw new Error("Offline build was not prepared");
  const seen = new Set();
  for (const asset of assets) {
    if (typeof asset?.url !== "string") throw new Error("Invalid offline asset manifest");
    const url = new URL(asset.url, self.location.origin);
    if (url.origin !== self.location.origin || !asset.url.startsWith("/") ||
      url.search || url.hash || seen.has(url.href) ||
      !(typeof asset.sha256 === "string" && /^[a-f0-9]{64}$/.test(asset.sha256) ||
        PWA_MODE === "next" && asset.document === true)) {
      throw new Error("Invalid offline asset manifest");
    }
    seen.add(url.href);
  }
}

async function verifiedBytes(asset, response) {
  if (!response?.ok) throw new Error(`${asset.url}: ${response ? `HTTP ${response.status}` : "not cached"}`);
  const bytes = await response.arrayBuffer();
  if (asset.document) {
    if (!response.headers.get("content-type")?.includes("text/html") ||
      !new TextDecoder().decode(bytes).includes(`name="pwa-version" content="${CACHE_NAME}"`)) {
      throw new Error(`${asset.url}: document belongs to a different deployment`);
    }
  } else {
    const hash = Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256", bytes)))
      .map((byte) => byte.toString(16).padStart(2, "0")).join("");
    if (hash !== asset.sha256) throw new Error(`${asset.url}: deployment integrity mismatch`);
  }
  return bytes;
}

async function verifySavedRelease({ cacheName, manifest }) {
  if (manifest.mode !== PWA_MODE ||
    (PWA_MODE === "static" && JSON.stringify(manifest.assets) !== JSON.stringify(PRECACHE_ASSETS))) return false;
  try {
    validateAssets(manifest.assets);
    // Only reuse a known release if storage still contains its complete snapshot.
    for (const asset of manifest.assets) {
      await verifiedBytes(asset, await caches.match(new URL(asset.url, self.location.origin), { cacheName }));
    }
    return true;
  } catch {
    return false;
  }
}

async function installVersion() {
  const reusable = await reusableSnapshot();
  if (reusable) {
    await withStoreLock(() => writeRecord(RELEASE_CACHE, RELEASE_URL + CACHE_NAME, { cacheName: reusable.cacheName }));
    return;
  }
  let assets = PRECACHE_ASSETS;
  if (PWA_MODE === "next") {
    const url = new URL("/pwa-manifest.json", self.location.origin);
    url.searchParams.set("__pwa", CACHE_NAME);
    const response = await fetch(url, {
      cache: "no-store", credentials: "omit", signal: AbortSignal.timeout(15000),
    });
    if (!response.ok) throw new Error(`Offline manifest: HTTP ${response.status}`);
    const manifest = await response.json();
    if (manifest.version !== CACHE_NAME || manifest.mode !== "next" || !Array.isArray(manifest.assets)) {
      throw new Error("Offline manifest belongs to a different deployment");
    }
    assets = manifest.assets;
  }
  validateAssets(assets);
  const cacheName = `${STORE_PREFIX}${CACHE_NAME}:${Date.now()}:${crypto.randomUUID()}`;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 120000);
  let cursor = 0;
  let saved = 0;
  let failure;
  installProgress = { saved, total: assets.length };
  reportInstallProgress();
  const download = async (cache) => {
    while (!controller.signal.aborted && cursor < assets.length) {
      const asset = assets[cursor++];
      try {
        const url = new URL(asset.url, self.location.origin);
        url.searchParams.set("__pwa", asset.sha256 ?? CACHE_NAME);
        const response = await fetch(url, {
          cache: "reload", credentials: "omit", signal: controller.signal,
          ...(asset.document ? { headers: { Accept: "text/html" } } : {}),
        });
        const bytes = await verifiedBytes(asset, response);
        // A synthetic response prevents the download-only __pwa query leaking
        // into Next.js's canonical navigation URL. Fetch supplies the caller's URL.
        const headers = new Headers(response.headers);
        for (const name of ["content-encoding", "content-length", "vary"]) headers.delete(name);
        await cache.put(new URL(asset.url, self.location.origin), new Response(bytes, { headers }));
        installProgress = { saved: ++saved, total: assets.length };
        reportInstallProgress();
      } catch (error) {
        failure ??= error;
        controller.abort();
      }
    }
  };
  try {
    const cache = await caches.open(cacheName);
    await Promise.all(Array.from({ length: 6 }, () => download(cache)));
    if (failure || controller.signal.aborted) throw failure ?? new Error("Offline download timed out");
    // Publish the exact verified snapshot as the last install step. The browser
    // may discard the worker during activate; serving must not depend on it.
    await cache.put(MANIFEST_URL, Response.json({
      release: CACHE_NAME, assets, mode: PWA_MODE, completedAt: Date.now(),
    }));
    await withStoreLock(() => writeRecord(RELEASE_CACHE, RELEASE_URL + CACHE_NAME, { cacheName }));
  } catch (error) {
    await caches.delete(cacheName).catch(() => {});
    throw error;
  } finally {
    installProgress = undefined;
    clearTimeout(progressTimer);
    progressTimer = undefined;
    clearTimeout(timeout);
  }
}

self.addEventListener("install", (event) => {
  // Updates wait for an explicit refresh (or for all old tabs to close).
  event.waitUntil(installVersion());
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    // History is useful for fallback and cleanup, not a prerequisite for fetch.
    await withStoreLock(async () => rememberActivation(await currentSnapshot())).catch(() => {});
    await self.clients.claim();
  })());
});

function assetPath(request, manifest) {
  let path = decodeURIComponent(new URL(request.url).pathname);
  if (manifest.mode === "next") {
    // Never confuse HTML and Flight responses. Next's navigation requests carry
    // router state/header variants; only full document navigation is cached.
    if (request.headers.get("RSC") === "1" || new URL(request.url).searchParams.has("_rsc")) return null;
    if (request.mode === "navigate") path = path.replace(/\/$/, "") || "/";
    const asset = manifest.assets.find((entry) => entry.url === path);
    if (!asset || asset.document && request.mode !== "navigate") return null;
    return asset.url;
  }
  const paths = new Map(manifest.assets.map((asset) => [decodeURIComponent(asset.url), asset.url]));
  // Static export uses .txt files, not request-header variants of HTML. Support
  // the full-page RSC alias too, without ever returning HTML as a Flight response.
  if (request.headers.get("RSC") === "1" && !path.endsWith(".txt")) {
    path = path === "/" ? "/index.txt" : `${path.replace(/\/$/, "")}.txt`;
  } else if (request.mode === "navigate") {
    if (path === "/") path = "/index.html";
    else if (!paths.has(path)) path = `${path.replace(/\/$/, "")}.html`;
  }
  return paths.get(path);
}

function optimizedImagePath(request, manifest) {
  const url = new URL(request.url);
  if (manifest.mode !== "next" || request.destination !== "image" || url.pathname !== "/_next/image") return null;
  const source = url.searchParams.get("url");
  if (!source) return null;
  const image = new URL(source, self.location.origin);
  if (image.origin !== self.location.origin || image.search || image.hash ||
    !image.pathname.startsWith("/images/") || !/\.(avif|gif|jpe?g|png|webp)$/i.test(image.pathname)) return null;
  return manifest.assets.find((asset) => asset.url === image.pathname && asset.sha256)?.url ?? null;
}

async function portfolioAsset(url, hash, clientId) {
  // The first iframe navigation may have no client ID. Use the artifact's
  // digest rather than the tab mapping, which may point to a newer deployment.
  const findArtifact = (snapshot) => snapshot?.manifest.assets.some((asset) =>
    asset.url === url.pathname && asset.sha256 === hash) ? matchSnapshot(snapshot, url.pathname) : null;
  const current = await currentSnapshot();
  const fromCurrent = await findArtifact(current);
  if (fromCurrent) return fromCurrent;
  const pinned = await pinnedSnapshot(await readPin(clientId));
  const fromPin = await findArtifact(pinned);
  if (fromPin) return fromPin;
  const previous = await previousSnapshot(await readHistory());
  const fromPrevious = await findArtifact(previous);
  if (fromPrevious) return fromPrevious;
  const metadata = await caches.open(CLIENT_CACHE);
  const names = new Set();
  for (const key of await metadata.keys()) {
    const pin = await readRecord(CLIENT_CACHE, key);
    const name = pin?.snapshot ?? pin?.cacheName;
    if (name && name !== current?.cacheName && name !== previous?.cacheName) names.add(name);
  }
  for (const name of names) {
    const response = await findArtifact(await readSnapshot(name));
    if (response) return response;
  }
  return null;
}

async function cachedNavigation(event) {
  return withStoreLock(async () => {
    const snapshot = await currentSnapshot();
    const path = snapshot && assetPath(event.request, snapshot.manifest);
    const response = path ? await matchSnapshot(snapshot, path) : null;
    // Pin the copy actually served. If HTML comes from the network, don't serve
    // it JS or other mutable files from the active worker's older deployment.
    await pinClient(event.resultingClientId, response ? snapshot : null).catch(() => {});
    return { snapshot, response, tryPrevious: !snapshot || Boolean(path && !response) };
  });
}

async function offlineNavigation(event, snapshot, tryPrevious) {
  return withStoreLock(async () => {
    const previous = await previousSnapshot(await readHistory());
    if (tryPrevious && previous && event.resultingClientId) {
      const path = assetPath(event.request, previous.manifest);
      const saved = path && await matchSnapshot(previous, path);
      if (saved) {
        // Never serve a previous document unless we can keep its dependencies
        // on the same snapshot. A failed pin falls through to the offline page.
        try {
          await pinClient(event.resultingClientId, previous);
          return saved;
        } catch {}
      }
    }
    const offline = await matchSnapshot(snapshot, OFFLINE_PAGE) ?? await matchSnapshot(previous, OFFLINE_PAGE);
    return offline ? new Response(await offline.arrayBuffer(), {
      status: 503, headers: { "Content-Type": "text/html; charset=utf-8" },
    }) : Response.error();
  });
}

async function serveRequest(event) {
  const { request } = event;
  const navigation = request.mode === "navigate";
  const url = new URL(request.url);
  const hash = url.searchParams.get("v");
  const versionedPortfolioAsset =
    [PORTFOLIO_DOCUMENT, "/portfolio.pdf"].includes(url.pathname) && /^[a-f0-9]{64}$/.test(hash ?? "");
  let snapshot;
  let tryPrevious = true;
  let imageFallback;
  try {
    if (versionedPortfolioAsset) {
      const cached = await portfolioAsset(url, hash, event.clientId);
      if (cached) return cached;
    } else if (navigation) {
      const saved = await cachedNavigation(event);
      if (saved.response) return saved.response;
      ({ snapshot, tryPrevious } = saved);
    } else {
      const pin = await readPin(event.clientId);
      snapshot = pin ? await pinnedSnapshot(pin) : await currentSnapshot();
      if (snapshot) {
        imageFallback = optimizedImagePath(request, snapshot.manifest);
        const path = assetPath(request, snapshot.manifest);
        if (path) {
          const cached = await matchSnapshot(snapshot, path);
          if (cached) return cached;
        }
      }
    }
  } catch (error) {
    console.warn("[PWA] Cache unavailable; trying the network", error);
  }
  try {
    return await fetch(request, { signal: AbortSignal.timeout(8000) });
  } catch {
    // Keep online requests optimized. Offline, use this tab's verified original
    // rather than precaching every possible width, quality and output format.
    if (imageFallback && snapshot) {
      const image = await matchSnapshot(snapshot, imageFallback).catch(() => null);
      if (image) return image;
    }
    if (navigation && !versionedPortfolioAsset) {
      return offlineNavigation(event, snapshot, tryPrevious).catch(() => Response.error());
    }
    return Response.error();
  }
}

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (event.request.method !== "GET" || url.origin !== self.location.origin ||
    ["/sw.js", "/pwa-worker.js", "/pwa-manifest.json", "/robots.txt", "/sitemap.xml"].includes(url.pathname)) return;
  event.respondWith(serveRequest(event));
});

async function statusForClient(client, { version, requestId }) {
  const status = { type: "PWA_STATUS", version: CACHE_NAME, requestId, ready: false, activeReady: false };
  try {
    await withStoreLock(async () => {
      const current = await currentSnapshot();
      status.activeReady = Boolean(await matchSnapshot(current, homePath));
      if (status.activeReady) await rememberActivation(current).catch(() => {});
      const pin = await readPin(client.id);
      let page = version === CACHE_NAME && status.activeReady ? current : null;
      if (!page && !pin?.network) {
        page = pin?.cacheName === version ? await pinnedSnapshot(pin) : null;
        if (!page) {
          const previous = await previousSnapshot(await readHistory());
          if (previous?.version === version) page = previous;
        }
        // A revived legacy tab may not have completed its status handshake
        // before the upgrade. Never use a waiting or network-only copy here.
        if (!page && typeof version === "string" && version.startsWith(CACHE_PREFIX)) {
          const legacy = await readSnapshot(version);
          if (legacy?.manifest.activated) page = legacy;
        }
      }
      if (page && await matchSnapshot(page, homePath)) {
        await pinClient(client.id, page);
        status.ready = true;
      }
    });
  } catch (error) {
    console.warn("[PWA] Could not confirm saved pages", error);
  }
  client.postMessage(status);
}

self.addEventListener("message", (event) => {
  if (event.data?.type === "SKIP_WAITING") {
    event.waitUntil(self.skipWaiting());
  } else if (event.data?.type === "PWA_INSTALL_STATUS" && installProgress && event.source?.type === "window") {
    sendInstallProgress(event.source, installProgress);
  } else if (event.data?.type === "PWA_STATUS" && event.source?.id) {
    event.waitUntil((async () => {
      await statusForClient(event.source, event.data);
      await requestCleanup();
    })());
  }
});
