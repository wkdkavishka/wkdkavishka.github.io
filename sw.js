// preparePwaExport() fills both declarations in out/sw.js; keep each on one line.
const CACHE_NAME = "wkdkavishka-pwa-v1-5cc3b0a10cccf1b72e4be0ff";
const PRECACHE_ASSETS = [{"url":"/404.html","sha256":"d765f5dc15bd0f09e52263f0c6a7b76f65cf5be5878a67519d61d370da8c414a"},{"url":"/BingSiteAuth.xml","sha256":"32579827e9d2b93e0a21b9a8cbac07d3478589b220b9ec8dcb460762bd65c48a"},{"url":"/__next.__PAGE__.txt","sha256":"f3f8382f161a13a12e75625c83372331313d946e48f9dbd60f970475713ebd41"},{"url":"/__next._full.txt","sha256":"a5fd475a0655dadcc436b9961adfe3a53e7ee2eb239e6c0ca056362fff482474"},{"url":"/__next._head.txt","sha256":"d7837b30e9208eefe73b2fe07bdf1192660b1c0ed923f72660f33e0ef5beaa3a"},{"url":"/__next._index.txt","sha256":"9071f85764075e17ec8ee42001c7c92048928e7b8f7834301799ed9a1b63ac1d"},{"url":"/__next._tree.txt","sha256":"5bb91ca21a91e5eaaef09a9d41b42d846e031e51281261e2b908bdb6ff291831"},{"url":"/_next/static/3BynsybBwZqVCj9uYqd1P/_buildManifest.js","sha256":"9476e0afd3f9da68a64e6ec58631191fd3eaca62c9f5a377e7517fe9a89e59ea"},{"url":"/_next/static/3BynsybBwZqVCj9uYqd1P/_clientMiddlewareManifest.js","sha256":"5483e3295dc35dfe29ea932efc85341c916f10ff78ff5b0e965e003710893a4a"},{"url":"/_next/static/3BynsybBwZqVCj9uYqd1P/_ssgManifest.js","sha256":"92e9502f1d993d2f48296b2dc2cdbd69d9e297c8c8404a1d6d16fa509d1108c4"},{"url":"/_next/static/chunks/005bbwp137q4p.css","sha256":"23c7d570ed41b582742ba16934263fe86e6aeaf56135e3e8d6f0c738c724a4ff"},{"url":"/_next/static/chunks/05-c3ty_6dwfk.js","sha256":"aee2d073d2a1157cfe5c98907f90b3967de4c3625f9ffb154bd1979ae2b917b0"},{"url":"/_next/static/chunks/0cz1d0mv5g_q7.js","sha256":"0973c1d64c88adc8e3c950410cb58b288f72118d5965b78049438deb8f2f9683"},{"url":"/_next/static/chunks/14mrh2-p_w84d.js","sha256":"a3ac200f3ab8bfa57cf78882057741ddb5c0fbc9e2490c5d951c099b37484206"},{"url":"/_next/static/chunks/1lqk67u1q7f-3.js","sha256":"9810959917f1eceedb07f61d8c9cebd5dc883cd1d4658a218afb9f8f46585fca"},{"url":"/_next/static/chunks/1x84qdcdsqk4x.js","sha256":"4ed699051dcc2049983eb0bff0a7923def576169ce37c87da417fbb71ce10890"},{"url":"/_next/static/chunks/21y3go662gzm2.js","sha256":"573b6cd60cc541ce802c0e7ecd496817f0096096be8dc5356cb430bb0fe2be4b"},{"url":"/_next/static/chunks/27jktro2p5rq9.js","sha256":"5261101892e2476e4346e19e86fd5f19cbcf7c765ff76e92eb9cefcc86b6db6a"},{"url":"/_next/static/chunks/2cya-h6pss2j9.js","sha256":"ad9f0377c0d43de17b2ecd496ad1f5390214c8c53083a638bee2ab26ed32b016"},{"url":"/_next/static/chunks/2k0ewwk_iw8xh.js","sha256":"2a37b64f2814759731f37ec0e39e2e13bb3b19d495bfa290a5194f0bb0e1134f"},{"url":"/_next/static/chunks/2w1p8z-haya-f.js","sha256":"bb7090f1a2aebfff8eace715bebdbb2ba65d941e097e436dc6e1e9e5f6a9df50"},{"url":"/_next/static/chunks/31r-xy3l40e2k.js","sha256":"920b9868dcbe129bdd0dcc3e7cd9c9e745fe817b1d0c77a8e28ffca0220d08ab"},{"url":"/_next/static/chunks/3_4ewku2ym80j.js","sha256":"b247836342bc9ba851a43dc0b02d8667998717b60d36b97b5a572d75db685530"},{"url":"/_next/static/chunks/3bk8l2j0uemr3.js","sha256":"1c9702842c722171a6ac3d6e82ef62f8a74b75a35bc6811ff01d0208d6af4781"},{"url":"/_next/static/chunks/3q8p9a7btkyh7.js","sha256":"dbe5e176ee47407616510f73bd152f8abf75dd34e23369d20b107a730fc71c04"},{"url":"/_next/static/chunks/3xg6l4nhapqk7.js","sha256":"5c32aa7aed320fb82050f49f17baa21a0e265153eb5d6ed85ab0704f4052a5d7"},{"url":"/_next/static/chunks/40dptth33ljrj.js","sha256":"e1ae24faa970c28e48d941d3cf8febedd3ce1fe8a0a4e5e102bd2cfb6ae62cdc"},{"url":"/_next/static/chunks/turbopack-240foss4xbjgh.js","sha256":"45e250897d621a8b43397015d20b5de4a06a394475114c678a23a4a64890c58a"},{"url":"/_next/static/media/1b99372b3eaef0c8-s.p.1gsd1jahc5dg_.woff2","sha256":"92684e4acde79ef07758cd09380b7e01e9824d8b061eddeda046f78c166d7b12"},{"url":"/_next/static/media/1bffadaabf893a1e-s.3-6t-g6q0vh0a.woff2","sha256":"a28eb6d3ccb534ae0c94ca999371df024aab60b08c3c8a5720ee9e32fa0faaa2"},{"url":"/_next/static/media/2bbe8d2671613f1f-s.0k62hbripvv8p.woff2","sha256":"8db00ff46c67b22cda8bed865acf7077651cac8d2841d5b40980556b48961931"},{"url":"/_next/static/media/2c55a0e60120577a-s.0-dom-5bn10r2.woff2","sha256":"fccca918fea40089dacadc7045861314d1a6bc91f1f323cc1eeb22ebcdb321b5"},{"url":"/_next/static/media/5476f68d60460930-s.2uwcyprjm3xu3.woff2","sha256":"46dd4cdca58c26ae87cc6927657bf83b2e8abfc39ffd0ab176e301a8d28d22bf"},{"url":"/_next/static/media/83afe278b6a6bb3c-s.p.2bn3s6zvc0dyp.woff2","sha256":"c940764593d0fe5d596be327ca7558855e018039fb78509aa21921fd3644c3e4"},{"url":"/_next/static/media/9c72aa0f40e4eef8-s.1y4-pdgsjb-pw.woff2","sha256":"aebf2ab4a4ce6810d73c1ac7be7cafb4e5ec4cee2d6db5fb3e09691747ec4bd6"},{"url":"/_next/static/media/ad66f9afd8947f86-s.3lvt2whj97whp.woff2","sha256":"a2e2c783ca6f9c20486e81e72a279203e86730bbf8f01ff6a5ee9dbd09e1c271"},{"url":"/_next/static/media/b2ea385cb5ae8625-s.1spbknb88wd48.woff2","sha256":"9e38b3f1575daba3435ef09d33a202585ed5bd204bd0a8c744955c750c2b9091"},{"url":"/_next/static/media/favicon.27j75ylz52ixj.ico","sha256":"2da381d380a3e12401ce914fa6d7986cb3ebc078f72c73e249ce4183d7311197"},{"url":"/_not-found.html","sha256":"d765f5dc15bd0f09e52263f0c6a7b76f65cf5be5878a67519d61d370da8c414a"},{"url":"/_not-found.txt","sha256":"e5f757c5a7a9f385cd64b9161feb34b2a5070d17fd83d6b236a38cf528a47837"},{"url":"/_not-found/__next._full.txt","sha256":"e5f757c5a7a9f385cd64b9161feb34b2a5070d17fd83d6b236a38cf528a47837"},{"url":"/_not-found/__next._head.txt","sha256":"2d883f40cf9e3926054275ab6d58255173127fbffc5997793ae8124de98101e6"},{"url":"/_not-found/__next._index.txt","sha256":"9071f85764075e17ec8ee42001c7c92048928e7b8f7834301799ed9a1b63ac1d"},{"url":"/_not-found/__next._not-found.__PAGE__.txt","sha256":"54575717d689f17deb7d3d0897f149e58b298aac814c963a1c5255aa18ce56a9"},{"url":"/_not-found/__next._not-found.txt","sha256":"3674bb9bcf3904bc0bf49e973eff231f22ba84abcb76e8f36475237da89e1272"},{"url":"/_not-found/__next._tree.txt","sha256":"d427eb08d8fd1d8b0215c8ebaa8207f54452aac2b029bba67654f863ffa41a8a"},{"url":"/browserconfig.xml","sha256":"bd828f72f9a53651fcb04c15cf5046d9385dd7adb4f6ae15d67fd98d2ba161d5"},{"url":"/favicon.ico","sha256":"2da381d380a3e12401ce914fa6d7986cb3ebc078f72c73e249ce4183d7311197"},{"url":"/file.svg","sha256":"2b67812c325c199a02536cdbeea0c593a72f707d323b72ee3e08dbab06753bd4"},{"url":"/globe.svg","sha256":"b614b9bf183925957661ac851498fe1d8029fd43a62fbfed86f9e2624a57e7cf"},{"url":"/googleaf175b30968c86d2.html","sha256":"6488c84031b49be37936d2e18670521798dd25f0d04410303dae4ee17f8661fd"},{"url":"/images/meta/android-chrome-192x192.png","sha256":"33c6dd26cdca447c86a1b3b3bfb1858bb28a237ecfd8896b2a232e122d99ab4a"},{"url":"/images/meta/android-chrome-512x512.png","sha256":"a9e4a28bed28133d82453ef2c313ea8e57882386fd1100b896600258c7225a09"},{"url":"/images/meta/apple-touch-icon.png","sha256":"08a61a074d123b53573a2cf9bd8b3965a8988faf3de7a89d842f924c6dcd855f"},{"url":"/images/meta/favicon-16x16.png","sha256":"c17d798171d4044dec2db3cadb9a343424fc273a48c2d85f95c2ccf4221c6db2"},{"url":"/images/meta/favicon-32x32.png","sha256":"704bd11a1a3c856d9ee38fc381277df535ba6f890ad0b1f7552e0768b780b39f"},{"url":"/images/meta/mstile-150x150.png","sha256":"724497c31c94a7ea92e91b7eed279287ed142e3ff3155ba348366ddfbc78ae76"},{"url":"/images/meta/mstile-310x150.png","sha256":"724497c31c94a7ea92e91b7eed279287ed142e3ff3155ba348366ddfbc78ae76"},{"url":"/images/meta/mstile-310x310.png","sha256":"b1d82ae626eb24bf22213d7d0a30b685a470be64dd1d7b718cd25fc8728b5720"},{"url":"/images/meta/mstile-70x70.png","sha256":"8583b6774404c8c7b3f3e5d37af3cae9eb274e9f3c99113f769b3f2d2965b910"},{"url":"/images/meta/og-image.jpg","sha256":"86e14d614f11f73612483fe6922bc6f3515e98643ed5aff6e845a3fa50c0af98"},{"url":"/images/profile/profile.webp","sha256":"5656ef383704139a6aa9bb59cf8cb1831a46c195dde5524358b52bd21e2a4c8d"},{"url":"/images/projects/gpt-shell-4o-mini/1.webp","sha256":"3363fea38fb79bc49c0e1272292faa7a81fba151d27239777249369a45f3f463"},{"url":"/images/projects/gpt-shell-4o-mini/2.webp","sha256":"b0a96edf2b4e5b68c044ef6c4472fcb76723619a9fd9cc0ff78379d24260e11f"},{"url":"/images/projects/gpt-shell-4o-mini/3.webp","sha256":"19fd3d660483cd85b2c5b83b2065aed183ab5944f2e6c9c8097580a0e91e7a57"},{"url":"/images/projects/gpt-shell-4o-mini/4.webp","sha256":"94c533faf328491e71fb3b802e282a2fd5978821dea4c52857b7d23b4a4f41cd"},{"url":"/images/projects/irs-calculator/1.webp","sha256":"6f181f962ddb14c5b4d7bc3eb47318dcf6b38307573c5fde5922b44fc83da6cc"},{"url":"/images/projects/irs-calculator/2.webp","sha256":"37a9359de4bf553a94f948a5ef73b6bf50687873268270e5f22307013dc64690"},{"url":"/images/projects/irs-calculator/3.webp","sha256":"0004513976a6c488ca3746ba5a3ba73fea901b20a6685fc60fc30491d87ce852"},{"url":"/images/projects/korean-class/1.webp","sha256":"89877ebdc166b0afcdae70e66854847de9e51573f257a298d286eb65a40f9467"},{"url":"/images/projects/korean-class/2.webp","sha256":"c21bb4d7e8b3e5b716226e0e8942f7fc818531a6fea4b8f610726fea29d3243a"},{"url":"/images/projects/korean-class/3.webp","sha256":"83c28d190a6415be652a036d2b5977691a89256cba61e13f4ffbc9a72ddde606"},{"url":"/images/projects/korean-class/4.webp","sha256":"6c9a09ae1f8c3d11eb8ab9ca716e02cab7129323056ea0c18fc412d0bbb2f375"},{"url":"/images/projects/korean-class/5.webp","sha256":"e3101bd0a6cb6825d04785a10cc636045f056e0312f03be1f2d8c5476d67c76b"},{"url":"/images/projects/korean-class/6.webp","sha256":"7df6e2cf4a8638690436b499f4664e03ca727e8e1cdc49d005c03b8286d9fa96"},{"url":"/images/projects/sg-life/1.webp","sha256":"a866df59cb7a9c0baebbf0dcb24e754d1891f8f66d8c96e9cddc8d6e0192d04f"},{"url":"/images/projects/sg-life/2.webp","sha256":"9a6ebac2d355bf69702f0cef63b50671bddf9efef84b3c37830d9fbc7cc3dc39"},{"url":"/images/projects/sg-life/3.webp","sha256":"2e8f3a7604bcdb27015127a180e5e4ccab63465e52d5e5da4337c6c6b4c86d9b"},{"url":"/images/projects/sg-life/4.webp","sha256":"b06aad28a55558819f1b338e0d45383831db31591c341ab735a839f280a4c7af"},{"url":"/images/projects/wkdkavishka-vue/1.webp","sha256":"910af30a3d732b56f5f1914499baab91e20c2ce52c282d5d1f581775c02e1090"},{"url":"/images/projects/wkdkavishka-vue/2.webp","sha256":"2d3829223ac0896f0f24f9ae97df651a0e3a484a24b419ff3eb0399ef7ce144f"},{"url":"/images/projects/wkdkavishka-vue/3.webp","sha256":"491634244815f3f1056ee1c41bed2a6ac1658d5ed90b936629846fecdb3d4e29"},{"url":"/images/projects/wkdkavishka-vue/4.webp","sha256":"c78ae593672b112a2c87bc55f333155f58a252b7b0c76a3d556ce961ae961aca"},{"url":"/images/pwa/desktop-1.png","sha256":"7402695d8145dc2ab71d6471e6fb523eed5424cdd0313094c267b5fa2ec90793"},{"url":"/images/pwa/desktop-2.png","sha256":"86f9cfb76d3d2f51c75223436c26089fdaa4fb4cdc24e8e5203a9ae2e1925ec4"},{"url":"/images/pwa/desktop-3.png","sha256":"31a753d4700c0ff89edb7a7701c1e521246c6cba04b5466ab4b4cfe624decdcd"},{"url":"/images/pwa/desktop-4.png","sha256":"beb512e5813f1a203a5754d9e23fb4f5c1d35858b1e0530953d132adde379ad5"},{"url":"/images/pwa/mobile-1.png","sha256":"5cc80723b5dc7ad96b432d154289972e83d3368c95a4865b439f2a929480addd"},{"url":"/images/pwa/mobile-2.png","sha256":"ade270c0cb58ed095f41c40f3d52cc9f6e85cbe2607bd15438380f35bfd9d8d9"},{"url":"/images/pwa/mobile-3.png","sha256":"aea420cf2c98014d620303619d1585fcf7f9a7df6ba659b59b5aca94a652c148"},{"url":"/images/team/member-1.webp","sha256":"3b7b7f815974cc95f748416d0447d653473c69582131a9a9e34d20682e0d5759"},{"url":"/images/team/member-2.webp","sha256":"3b7b7f815974cc95f748416d0447d653473c69582131a9a9e34d20682e0d5759"},{"url":"/images/team/member-3.webp","sha256":"3b7b7f815974cc95f748416d0447d653473c69582131a9a9e34d20682e0d5759"},{"url":"/images/team/member-4.webp","sha256":"3b7b7f815974cc95f748416d0447d653473c69582131a9a9e34d20682e0d5759"},{"url":"/index.html","sha256":"74f2b57419ed5ef8f5a94344209cab02676450c1a226f026d614b3cd60b7e40b"},{"url":"/index.txt","sha256":"a5fd475a0655dadcc436b9961adfe3a53e7ee2eb239e6c0ca056362fff482474"},{"url":"/manifest.webmanifest","sha256":"cb3147df0fa398f3f0dd780d50888d81ecc1856bf7d5951c2f1c61403b237a61"},{"url":"/next.svg","sha256":"55995dfad6ecb4945a1e856ddca03c5e16aa5bf13fd21b4df6a74ae79357bcfc"},{"url":"/offline.html","sha256":"c6f8b3e64951352aa5e7f68dafa627e97537a41ccb4a7efdc726cb86bfb83309"},{"url":"/og/android-kiosk-device-owner.png","sha256":"a34970bf8ff51c9f82721d9882b6557a659debc68f4b31225853fcaf7c1c6e14"},{"url":"/og/chrome-tab-extensions.png","sha256":"fad36895a81119487dcdacff08ae501d578c28a14dfc97750eb7827c04dca426"},{"url":"/og/field-service-gps-tracking-app.png","sha256":"92be3d43e65163b3b97c9e0a87df987ce66659c3f4a5dff0ce557919f4a10a27"},{"url":"/og/gpt-shell-4o-mini.png","sha256":"199d5e13b317420ad06c63984a34096b1c05c20e3341f96682b57dc141e6beac"},{"url":"/og/home.png","sha256":"a32f5c8e9fe5d2287bf894aaa9b31db92cb3bd701531549f4a162cbc04367a12"},{"url":"/og/inventory-management-system.png","sha256":"defb87e1f6c69e394dfe0c41b1658743a873663447452c58e57c0077d078a559"},{"url":"/og/irs-self-assessment.png","sha256":"9dedbd52804f1436cdcc79bb1463b09ec69bc5846a5d017e8cb6cc801743612e"},{"url":"/og/korean-class.png","sha256":"334086a94ca9c1c477d6c0915878dad96df2a937f734772dee260518e63404b3"},{"url":"/og/linux-desktop-tools.png","sha256":"1a3709acb573448b82ef1e8c7d891a08a111e9c29d08c907a9f205d452af65a3"},{"url":"/og/payment-terminal-launcher.png","sha256":"1f75ffe6f523de0bff52012e76be4d8cfc246be6bcd78f1693022e5bff2c358f"},{"url":"/og/sg-life.png","sha256":"e452fe4000dfb39a41dda0efbc92df181a0da3facf6044da3efbca42f21edcc6"},{"url":"/portfolio.pdf","sha256":"95b565bb04d780322064048a72f4225db4dbeb4b8847fbfed7e400e71d8a11fc"},{"url":"/projects/android-kiosk-device-owner.html","sha256":"d817ae3395b8cc32f533818492e091dd0b8312cf3ab330cc6736c172a97c68b1"},{"url":"/projects/android-kiosk-device-owner.txt","sha256":"6da9e63287a5ee1b8b93603a5a5be45c146b97e07c73b0e8441cc29b89fa89ae"},{"url":"/projects/android-kiosk-device-owner/__next._full.txt","sha256":"6da9e63287a5ee1b8b93603a5a5be45c146b97e07c73b0e8441cc29b89fa89ae"},{"url":"/projects/android-kiosk-device-owner/__next._head.txt","sha256":"1b2fae9beea51165e30aed702e2cf3ffcd40f01a01ae28daf3c520d69f77f0c1"},{"url":"/projects/android-kiosk-device-owner/__next._index.txt","sha256":"9071f85764075e17ec8ee42001c7c92048928e7b8f7834301799ed9a1b63ac1d"},{"url":"/projects/android-kiosk-device-owner/__next._tree.txt","sha256":"f736bed7905b08dbade38fc3a6cf7e868e9548aa8c155c24924982e61cf47f22"},{"url":"/projects/android-kiosk-device-owner/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"a59ab6e504e8833000dbb1f4b9d55ec03ed96d2899103804fed5742286c6211a"},{"url":"/projects/android-kiosk-device-owner/__next.projects.%24d%24slug.txt","sha256":"3674bb9bcf3904bc0bf49e973eff231f22ba84abcb76e8f36475237da89e1272"},{"url":"/projects/android-kiosk-device-owner/__next.projects.txt","sha256":"3674bb9bcf3904bc0bf49e973eff231f22ba84abcb76e8f36475237da89e1272"},{"url":"/projects/chrome-tab-extensions.html","sha256":"1c5b3a68954136cdabd60320bb049fa34c299b6a9bdcae21f5800a10cb32256d"},{"url":"/projects/chrome-tab-extensions.txt","sha256":"74e1cd443c006b75bd4dc048a7d55b04c5d3af304061e1dafa1dc2c5bbc054dc"},{"url":"/projects/chrome-tab-extensions/__next._full.txt","sha256":"74e1cd443c006b75bd4dc048a7d55b04c5d3af304061e1dafa1dc2c5bbc054dc"},{"url":"/projects/chrome-tab-extensions/__next._head.txt","sha256":"d62e147f340c5e64f43747106aac3b083b3a149aa6be9dcf2e8756501f2f6823"},{"url":"/projects/chrome-tab-extensions/__next._index.txt","sha256":"9071f85764075e17ec8ee42001c7c92048928e7b8f7834301799ed9a1b63ac1d"},{"url":"/projects/chrome-tab-extensions/__next._tree.txt","sha256":"e28463eb06031ce496c7080acf8ea144568b283d56ee0c6116bfe5d43386ddd0"},{"url":"/projects/chrome-tab-extensions/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"b5f9509c488d221b5457fd262b40c329f5281fcc57fef60252899b0c167618a2"},{"url":"/projects/chrome-tab-extensions/__next.projects.%24d%24slug.txt","sha256":"3674bb9bcf3904bc0bf49e973eff231f22ba84abcb76e8f36475237da89e1272"},{"url":"/projects/chrome-tab-extensions/__next.projects.txt","sha256":"3674bb9bcf3904bc0bf49e973eff231f22ba84abcb76e8f36475237da89e1272"},{"url":"/projects/field-service-gps-tracking-app.html","sha256":"8716f1df34dde17ec893d794d6649a80ccf751bf10f3c10da7ff5f2d022a5e6a"},{"url":"/projects/field-service-gps-tracking-app.txt","sha256":"d4f7f563f032cf516aa33480ceec793f681e02128b7d77404d49868ed163d0eb"},{"url":"/projects/field-service-gps-tracking-app/__next._full.txt","sha256":"d4f7f563f032cf516aa33480ceec793f681e02128b7d77404d49868ed163d0eb"},{"url":"/projects/field-service-gps-tracking-app/__next._head.txt","sha256":"342256838c79a48eab03ac53c2928febddee64c9dfd0bd9816145ef0b3f6dca0"},{"url":"/projects/field-service-gps-tracking-app/__next._index.txt","sha256":"9071f85764075e17ec8ee42001c7c92048928e7b8f7834301799ed9a1b63ac1d"},{"url":"/projects/field-service-gps-tracking-app/__next._tree.txt","sha256":"d35f27d4c6313fd8cb10b5f18fb7603b95a570e67504254e72556e8357f081d1"},{"url":"/projects/field-service-gps-tracking-app/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"7b6468e7b7d2a329099444d598abdcd105887f6d2bbda2d751ad8f4c058c92a7"},{"url":"/projects/field-service-gps-tracking-app/__next.projects.%24d%24slug.txt","sha256":"3674bb9bcf3904bc0bf49e973eff231f22ba84abcb76e8f36475237da89e1272"},{"url":"/projects/field-service-gps-tracking-app/__next.projects.txt","sha256":"3674bb9bcf3904bc0bf49e973eff231f22ba84abcb76e8f36475237da89e1272"},{"url":"/projects/gpt-shell-4o-mini.html","sha256":"191c2cfd21c31a65db3b9924cda4f014fe3f96040f42b512643a4a01581cfb67"},{"url":"/projects/gpt-shell-4o-mini.txt","sha256":"e1badc47faf945716ab655dbeaded6a1ab8d599e99ea9daba9dcb6f31776be11"},{"url":"/projects/gpt-shell-4o-mini/__next._full.txt","sha256":"e1badc47faf945716ab655dbeaded6a1ab8d599e99ea9daba9dcb6f31776be11"},{"url":"/projects/gpt-shell-4o-mini/__next._head.txt","sha256":"a4dfd8acd3184a637ac0bf91658251fb27fed2e7a3f4a440e5bc905e55863d4e"},{"url":"/projects/gpt-shell-4o-mini/__next._index.txt","sha256":"9071f85764075e17ec8ee42001c7c92048928e7b8f7834301799ed9a1b63ac1d"},{"url":"/projects/gpt-shell-4o-mini/__next._tree.txt","sha256":"d0d8a8a66593ff21f6586a3fef5a7f4608774313f8edd512d1e7d69d99027606"},{"url":"/projects/gpt-shell-4o-mini/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"50121eaba8ab2a7a6fa8b678fb41f1256a2046ee8a05dca4580ccf00c2356348"},{"url":"/projects/gpt-shell-4o-mini/__next.projects.%24d%24slug.txt","sha256":"3674bb9bcf3904bc0bf49e973eff231f22ba84abcb76e8f36475237da89e1272"},{"url":"/projects/gpt-shell-4o-mini/__next.projects.txt","sha256":"3674bb9bcf3904bc0bf49e973eff231f22ba84abcb76e8f36475237da89e1272"},{"url":"/projects/inventory-management-system.html","sha256":"9199e9bf1b6f9cc1c91ffc3de713db51d73c6f04e33b0337cd21692e3597c8e8"},{"url":"/projects/inventory-management-system.txt","sha256":"999cefca9f9638a4e35817fb09ae20ff0b5697e8b6283a9fdbe9c62c9789fe79"},{"url":"/projects/inventory-management-system/__next._full.txt","sha256":"999cefca9f9638a4e35817fb09ae20ff0b5697e8b6283a9fdbe9c62c9789fe79"},{"url":"/projects/inventory-management-system/__next._head.txt","sha256":"3d7124f311681c87a1a167863b2c87fe112b60566f5d519724966c7b2dc940c7"},{"url":"/projects/inventory-management-system/__next._index.txt","sha256":"9071f85764075e17ec8ee42001c7c92048928e7b8f7834301799ed9a1b63ac1d"},{"url":"/projects/inventory-management-system/__next._tree.txt","sha256":"abf7ae9e7fa8a667d9c54d583c870ca5954e067ae1d1f09b765770237c321620"},{"url":"/projects/inventory-management-system/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"ba740da9e721dd0976a49a42162caa48d0ce55951c117c13b7f59a82b04165e6"},{"url":"/projects/inventory-management-system/__next.projects.%24d%24slug.txt","sha256":"3674bb9bcf3904bc0bf49e973eff231f22ba84abcb76e8f36475237da89e1272"},{"url":"/projects/inventory-management-system/__next.projects.txt","sha256":"3674bb9bcf3904bc0bf49e973eff231f22ba84abcb76e8f36475237da89e1272"},{"url":"/projects/irs-self-assessment.html","sha256":"84e234ca5eef9e06e2c6456984218d517b95c11a1bd99e1751a36d9cbc244b9c"},{"url":"/projects/irs-self-assessment.txt","sha256":"5f3a51d4f4a778f20fea4c2bee815426f9f8d2e0350a793aa1994e7416cb55a3"},{"url":"/projects/irs-self-assessment/__next._full.txt","sha256":"5f3a51d4f4a778f20fea4c2bee815426f9f8d2e0350a793aa1994e7416cb55a3"},{"url":"/projects/irs-self-assessment/__next._head.txt","sha256":"b3650fc1e0dd12b7cc7b5659da78399687d16fa13e3e64b6bb5998e29f46944a"},{"url":"/projects/irs-self-assessment/__next._index.txt","sha256":"9071f85764075e17ec8ee42001c7c92048928e7b8f7834301799ed9a1b63ac1d"},{"url":"/projects/irs-self-assessment/__next._tree.txt","sha256":"5b1aed9924166f42e206c6ec55dc3f56f362620db449eeccc1e36066e1af05de"},{"url":"/projects/irs-self-assessment/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"2b848497c82d28b001248a3df3566648fdd80a93a27b9ffbe488dc7550d4c9bb"},{"url":"/projects/irs-self-assessment/__next.projects.%24d%24slug.txt","sha256":"3674bb9bcf3904bc0bf49e973eff231f22ba84abcb76e8f36475237da89e1272"},{"url":"/projects/irs-self-assessment/__next.projects.txt","sha256":"3674bb9bcf3904bc0bf49e973eff231f22ba84abcb76e8f36475237da89e1272"},{"url":"/projects/korean-class.html","sha256":"1098ef16f63d52ee2f7c14fbc4513c24c9be84b7041b088d9bab06696ffc5dfd"},{"url":"/projects/korean-class.txt","sha256":"85019e5d85c9e2dacd4e0bc635e360cc6c787b430087117e331c1c30a95e7f22"},{"url":"/projects/korean-class/__next._full.txt","sha256":"85019e5d85c9e2dacd4e0bc635e360cc6c787b430087117e331c1c30a95e7f22"},{"url":"/projects/korean-class/__next._head.txt","sha256":"ddf3416a342f5b38ef1253bb2d7d9c3d0713a7a6bd2d5e1d2600f45f7f5d4f85"},{"url":"/projects/korean-class/__next._index.txt","sha256":"9071f85764075e17ec8ee42001c7c92048928e7b8f7834301799ed9a1b63ac1d"},{"url":"/projects/korean-class/__next._tree.txt","sha256":"cf7098350aa6ce27ff9326d0a9fa0f27be463e46e48236ebcab3a75989688b3e"},{"url":"/projects/korean-class/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"9a48b90b39ee7c4c3f35c811f072c3b9bf90bb955b0b9ba79252ab2dc911b3a7"},{"url":"/projects/korean-class/__next.projects.%24d%24slug.txt","sha256":"3674bb9bcf3904bc0bf49e973eff231f22ba84abcb76e8f36475237da89e1272"},{"url":"/projects/korean-class/__next.projects.txt","sha256":"3674bb9bcf3904bc0bf49e973eff231f22ba84abcb76e8f36475237da89e1272"},{"url":"/projects/linux-desktop-tools.html","sha256":"ac3ca3ff6c5ba86289c97df8f9cc93b7a636a294dbaa249c437b50411dd8f007"},{"url":"/projects/linux-desktop-tools.txt","sha256":"6e1de32983dab19a599d1a0328a7d822344f27dec018b732ce5082fe5de132b7"},{"url":"/projects/linux-desktop-tools/__next._full.txt","sha256":"6e1de32983dab19a599d1a0328a7d822344f27dec018b732ce5082fe5de132b7"},{"url":"/projects/linux-desktop-tools/__next._head.txt","sha256":"6b820659fe01ebbd52c073c54d64ecaba15973d24d327e99d54ad7c04771c2ec"},{"url":"/projects/linux-desktop-tools/__next._index.txt","sha256":"9071f85764075e17ec8ee42001c7c92048928e7b8f7834301799ed9a1b63ac1d"},{"url":"/projects/linux-desktop-tools/__next._tree.txt","sha256":"26dcaa6c522eb04c88c49c1378abeeb43d3e8079285bf10158e5732bdae8adf6"},{"url":"/projects/linux-desktop-tools/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"2a52fab38173752555e6ed14770963203a84769ef731a4da5ccced1cc8cd0cfc"},{"url":"/projects/linux-desktop-tools/__next.projects.%24d%24slug.txt","sha256":"3674bb9bcf3904bc0bf49e973eff231f22ba84abcb76e8f36475237da89e1272"},{"url":"/projects/linux-desktop-tools/__next.projects.txt","sha256":"3674bb9bcf3904bc0bf49e973eff231f22ba84abcb76e8f36475237da89e1272"},{"url":"/projects/payment-terminal-launcher.html","sha256":"b09665857592822851cf4772f53a836210b1f551e7d2af8bca750d1708f119f9"},{"url":"/projects/payment-terminal-launcher.txt","sha256":"f6dbd5e74baf545078f61fb2af95e1b4ae4fdbe81a132c02b8a4f8cc71d506f1"},{"url":"/projects/payment-terminal-launcher/__next._full.txt","sha256":"f6dbd5e74baf545078f61fb2af95e1b4ae4fdbe81a132c02b8a4f8cc71d506f1"},{"url":"/projects/payment-terminal-launcher/__next._head.txt","sha256":"d1211c045a7c1920f1f80a33e8c91ebd875dd17021325e0853298e4e9f3ea7c3"},{"url":"/projects/payment-terminal-launcher/__next._index.txt","sha256":"9071f85764075e17ec8ee42001c7c92048928e7b8f7834301799ed9a1b63ac1d"},{"url":"/projects/payment-terminal-launcher/__next._tree.txt","sha256":"37efbd18aa3a0b3f106b4873fbf158b97ce7a90a250a2454cbab2da1e35eeca9"},{"url":"/projects/payment-terminal-launcher/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"45f2ec17ebb099cf31cd8f7e1116b384cb87cc3626bf374d9c9bfff1f11e38b3"},{"url":"/projects/payment-terminal-launcher/__next.projects.%24d%24slug.txt","sha256":"3674bb9bcf3904bc0bf49e973eff231f22ba84abcb76e8f36475237da89e1272"},{"url":"/projects/payment-terminal-launcher/__next.projects.txt","sha256":"3674bb9bcf3904bc0bf49e973eff231f22ba84abcb76e8f36475237da89e1272"},{"url":"/projects/sg-life.html","sha256":"cb38ffdb8f004722661d19c8bd43e763897f53ddce1858c2f3c7fa57a56dd607"},{"url":"/projects/sg-life.txt","sha256":"b982f1a1a91a5f316266f889e3ed448b9d10d8e135ff6c2515b98d84b927714f"},{"url":"/projects/sg-life/__next._full.txt","sha256":"b982f1a1a91a5f316266f889e3ed448b9d10d8e135ff6c2515b98d84b927714f"},{"url":"/projects/sg-life/__next._head.txt","sha256":"dc9bc0d7586c4934c3f27eb03e71862ee05ce13c761a6169ac18b7904028dd75"},{"url":"/projects/sg-life/__next._index.txt","sha256":"9071f85764075e17ec8ee42001c7c92048928e7b8f7834301799ed9a1b63ac1d"},{"url":"/projects/sg-life/__next._tree.txt","sha256":"54b645c095a24e2acff75e417ae886c44c7f83bf87ac5a96c59a31bea64e5fc3"},{"url":"/projects/sg-life/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"aebc4b97ec0b1374bd90dd63f86c7e245ff769ce503ed8b7c5f2c6607f83bf1d"},{"url":"/projects/sg-life/__next.projects.%24d%24slug.txt","sha256":"3674bb9bcf3904bc0bf49e973eff231f22ba84abcb76e8f36475237da89e1272"},{"url":"/projects/sg-life/__next.projects.txt","sha256":"3674bb9bcf3904bc0bf49e973eff231f22ba84abcb76e8f36475237da89e1272"},{"url":"/robots.txt","sha256":"3f10717965e181eeee85c09dbe85abfbd355ba7c4257dd41a523422afe5eb9ff"},{"url":"/sitemap.xml","sha256":"464325854cd3c775715f41842397b3336c1b18ebb63cc995fb5dcf73669f5274"},{"url":"/vercel.svg","sha256":"f081337b2fee635b455b63275406a3e7f39d6a014e25ad90dab5a67e62a12ac4"},{"url":"/window.svg","sha256":"644768c4aaeb4767bce293344eeb0c125fb804a94d801440424072202d85e3a1"}];
const CACHE_PREFIX = "wkdkavishka-pwa-v1-";
const CLIENT_CACHE = "wkdkavishka-pwa-clients-v1";
const MANIFEST_URL = new URL("/__pwa_manifest__", self.location.origin).href;
const CLIENT_URL = new URL("/__pwa_clients__/", self.location.origin).href;
const OFFLINE_PAGE = "/offline.html";

async function readManifest(cacheName) {
  const cache = await caches.open(cacheName);
  const response = await cache.match(MANIFEST_URL);
  return response ? response.json() : null;
}

async function pinClient(clientId, cacheName) {
  if (!clientId) return;
  const cache = await caches.open(CLIENT_CACHE);
  await cache.put(CLIENT_URL + clientId, Response.json({ cacheName }));
}

async function clientCacheName(clientId) {
  if (!clientId) return CACHE_NAME;
  const cache = await caches.open(CLIENT_CACHE);
  const response = await cache.match(CLIENT_URL + clientId);
  return response ? (await response.json()).cacheName : CACHE_NAME;
}

async function cleanupCaches() {
  const currentManifest = await readManifest(CACHE_NAME);
  const clients = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
  const liveIds = new Set(clients.map((client) => client.id));
  const metadata = await caches.open(CLIENT_CACHE);
  const retained = new Set([CACHE_NAME]);
  const mapped = new Set();
  for (const request of await metadata.keys()) {
    const id = request.url.slice(CLIENT_URL.length);
    if (!liveIds.has(id)) {
      await metadata.delete(request);
    } else {
      const response = await metadata.match(request);
      retained.add((await response.json()).cacheName);
      mapped.add(id);
    }
  }
  // Unmapped tabs may still run the pre-migration worker. Do not discard their
  // assets until they close or identify their version; never delete foreign caches.
  if (clients.some((client) => !mapped.has(client.id))) return;
  for (const name of await caches.keys()) {
    if (retained.has(name)) continue;
    if (/^pwa-cache-(?:dev|\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d\.\d{3}Z)$/.test(name)) {
      await caches.delete(name);
    } else if (name.startsWith(CACHE_PREFIX)) {
      const manifest = await readManifest(name);
      // An unactivated cache may belong to the installing/waiting worker.
      if (manifest?.activated && manifest.activatedAt <= currentManifest.activatedAt) {
        await caches.delete(name);
      } else if (!manifest?.activated && !self.registration.installing && !self.registration.waiting) {
        await caches.delete(name);
      }
    }
  }
}

async function installVersion() {
  if (!PRECACHE_ASSETS.length) throw new Error("Offline export was not prepared by deploy.ts");
  const cache = await caches.open(CACHE_NAME);
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 120000);
  let cursor = 0;
  let failure;
  const download = async () => {
    while (!controller.signal.aborted && cursor < PRECACHE_ASSETS.length) {
      const asset = PRECACHE_ASSETS[cursor++];
      try {
        const url = new URL(asset.url, self.location.origin);
        url.searchParams.set("__pwa", asset.sha256);
        const response = await fetch(url, { cache: "reload", credentials: "omit", signal: controller.signal });
        if (!response.ok) throw new Error(`${asset.url}: HTTP ${response.status}`);
        const bytes = await response.arrayBuffer();
        const hash = Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256", bytes)))
          .map((byte) => byte.toString(16).padStart(2, "0")).join("");
        if (hash !== asset.sha256) throw new Error(`${asset.url}: deployment integrity mismatch`);
        // A synthetic response prevents the download-only __pwa query leaking
        // into Next.js's canonical navigation URL. Fetch supplies the caller's URL.
        const headers = new Headers(response.headers);
        for (const name of ["content-encoding", "content-length", "vary"]) headers.delete(name);
        await cache.put(new URL(asset.url, self.location.origin), new Response(bytes, { headers }));
      } catch (error) {
        failure ??= error;
        controller.abort();
      }
    }
  };
  try {
    await Promise.all(Array.from({ length: 6 }, download));
    if (failure || controller.signal.aborted) throw failure ?? new Error("Offline download timed out");
    await cache.put(MANIFEST_URL, Response.json({ assets: PRECACHE_ASSETS, activated: false }));
  } catch (error) {
    await caches.delete(CACHE_NAME);
    throw error;
  } finally {
    clearTimeout(timeout);
  }
}

self.addEventListener("install", (event) => {
  // Updates wait for an explicit refresh (or for all old tabs to close).
  event.waitUntil(installVersion());
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    const manifest = await readManifest(CACHE_NAME);
    if (!manifest) throw new Error("Cannot activate an incomplete offline cache");
    await cache.put(MANIFEST_URL, Response.json({ ...manifest, activated: true, activatedAt: Date.now() }));
    await cleanupCaches().catch((error) => console.warn("[PWA] Cache cleanup postponed", error));
    await self.clients.claim();
  })());
});

function assetPath(request, manifest) {
  let path = decodeURIComponent(new URL(request.url).pathname);
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

async function serveRequest(event) {
  const { request } = event;
  const navigation = request.mode === "navigate";
  let cache;
  try {
    const cacheName = navigation ? CACHE_NAME : await clientCacheName(event.clientId);
    if (navigation) {
      // Storage pressure must not turn a working online page into a failed load.
      await pinClient(event.resultingClientId, CACHE_NAME).catch(() => {});
    }
    const manifest = await readManifest(cacheName);
    cache = await caches.open(cacheName);
    const path = manifest ? assetPath(request, manifest) : null;
    if (path) {
      const cached = await cache.match(new URL(path, self.location.origin));
      if (cached) return cached;
    }
  } catch (error) {
    console.warn("[PWA] Cache unavailable; trying the network", error);
  }
  try {
    return await fetch(request, { signal: AbortSignal.timeout(8000) });
  } catch {
    if (navigation && cache) {
      const offline = await cache.match(new URL(OFFLINE_PAGE, self.location.origin)).catch(() => null);
      if (offline) return new Response(await offline.arrayBuffer(), {
        status: 503, headers: { "Content-Type": "text/html; charset=utf-8" },
      });
    }
    return Response.error();
  }
}

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (event.request.method !== "GET" || url.origin !== self.location.origin || url.pathname === "/sw.js") return;
  event.respondWith(serveRequest(event));
});

self.addEventListener("message", (event) => {
  if (event.data?.type === "SKIP_WAITING") {
    event.waitUntil(self.skipWaiting());
  } else if (event.data?.type === "PWA_STATUS" && event.source?.id) {
    event.waitUntil((async () => {
      const pageVersion = event.data.version;
      const names = await caches.keys();
      if (typeof pageVersion === "string" && pageVersion.startsWith(CACHE_PREFIX) && names.includes(pageVersion)) {
        await pinClient(event.source.id, pageVersion);
      }
      const manifest = await readManifest(pageVersion === CACHE_NAME ? CACHE_NAME : await clientCacheName(event.source.id));
      event.source.postMessage({ type: "PWA_STATUS", version: CACHE_NAME, ready: Boolean(manifest) });
      await cleanupCaches();
    })());
  }
});
