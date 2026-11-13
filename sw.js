// Shared engine: preparePwaExport() fills out/sw.js; pwa-worker.js freezes the
// Next build version. Keep these declarations on one line for both preparers.
const CACHE_NAME = "wkdkavishka-pwa-v1-624759f4fbc447ff8e9847be";
const PRECACHE_ASSETS = [{"url":"/404.html","sha256":"e009c0805bc564ec3b98b0dfd408a547703c2c296a97fd0d7e7af733046d36f3"},{"url":"/BingSiteAuth.xml","sha256":"32579827e9d2b93e0a21b9a8cbac07d3478589b220b9ec8dcb460762bd65c48a"},{"url":"/__next.__PAGE__.txt","sha256":"3456c545fda736350074dd58d18c848a4df533b085a58d9a32a7fd4d00c576b1"},{"url":"/__next._full.txt","sha256":"29caf108f12ad136c7077d575932f1949cce0730683295267dad7cd9f1d66551"},{"url":"/__next._tree.txt","sha256":"517e0689e2892dd6078e68839581c56386341689cc0a94870d475628a5ea364b"},{"url":"/_next/static/_034GRG2I1bBfvqKjCQFD/_buildManifest.js","sha256":"9476e0afd3f9da68a64e6ec58631191fd3eaca62c9f5a377e7517fe9a89e59ea"},{"url":"/_next/static/_034GRG2I1bBfvqKjCQFD/_clientMiddlewareManifest.js","sha256":"5483e3295dc35dfe29ea932efc85341c916f10ff78ff5b0e965e003710893a4a"},{"url":"/_next/static/_034GRG2I1bBfvqKjCQFD/_ssgManifest.js","sha256":"92e9502f1d993d2f48296b2dc2cdbd69d9e297c8c8404a1d6d16fa509d1108c4"},{"url":"/_next/static/chunks/092r-mewpaf3q.js","sha256":"30b1a7afdc2b4c18dbed0c12b4cbb9ca6e3b1b048440715e434664cb534d6f11"},{"url":"/_next/static/chunks/0cz1d0mv5g_q7.js","sha256":"0973c1d64c88adc8e3c950410cb58b288f72118d5965b78049438deb8f2f9683"},{"url":"/_next/static/chunks/0d1_bh131z1lq.js","sha256":"512a1c6d6fbaf8bfac9bfd1c856e44b8c5b765d8b532fadcc43c1d54c0d4b80c"},{"url":"/_next/static/chunks/0leefzyevhih3.js","sha256":"dca08826c9ca5e877ee7ded1ebccc9f31d48f7b4321ac4d1a948d0413fae01c7"},{"url":"/_next/static/chunks/11nyl8aqgarjv.js","sha256":"b8dba50ffa0c575bf39d39623906fb848c975f4d2d4b8ec6a6af31e692e2e3c0"},{"url":"/_next/static/chunks/1h34129wpsmru.js","sha256":"c7daf9b15b6ee5c9600b3ff2d03d29d659afcd5291ac9f7553081718f645a52e"},{"url":"/_next/static/chunks/1pcw6gskne7pf.js","sha256":"6dbc40a359da7b95b1b5d62b81884098dc2a8bc342bb4493b87712049f4fac08"},{"url":"/_next/static/chunks/1tn4zp68ypas8.css","sha256":"02b913ce18da4b0349bc665fb2bb7f2586fa2823ab17a737df53d4dd84a71280"},{"url":"/_next/static/chunks/1ua2kfq9s-me6.js","sha256":"890002b4e7ccf6ef3ddebcb8a0eab7953d11231160dbd71c67c8bf43ee237442"},{"url":"/_next/static/chunks/1zis-y-py1_6a.js","sha256":"e06524d99bfd27a37509e73e3b436d72d9afe9214aaf337c17c5350ffd6da842"},{"url":"/_next/static/chunks/2urr6-fm2smyv.js","sha256":"ee86b6e5631f8350cee1c67bc13f15a6b1c1da8b99c302533c5abe1da4130f78"},{"url":"/_next/static/chunks/3k7x2nwn3obos.js","sha256":"aad8730e97457fb54e33457f0a4a75e5e22a6d9baf9cabf4f336629377b0751a"},{"url":"/_next/static/chunks/3qsw1t9r5au36.js","sha256":"5abeb9e37420d31c792fd1a568677e7820bac8f5ba3e0d6b485beb78baeacaed"},{"url":"/_next/static/chunks/3vbxsm27fhfni.js","sha256":"1bf93e55531e8f3652f518bc312900977e7b2efb477db7dfc02d0fc58339e917"},{"url":"/_next/static/chunks/3yatlnhre_iww.js","sha256":"a52b93384af8548345da397c3fe48d2a2c0b0ed0de4eec10fdc67c823369e074"},{"url":"/_next/static/chunks/turbopack-077hmtqrhcoji.js","sha256":"3f0ba0c36a0758d76b55b6717fd77e65f46ae1295bb22fa441476e1eb7854d51"},{"url":"/_next/static/media/07c7676b89ed2778-s.p.2bn3s6zvc0dyp.woff2","sha256":"c940764593d0fe5d596be327ca7558855e018039fb78509aa21921fd3644c3e4"},{"url":"/_next/static/media/2fb76073e23fd9e4-s.3lvt2whj97whp.woff2","sha256":"a2e2c783ca6f9c20486e81e72a279203e86730bbf8f01ff6a5ee9dbd09e1c271"},{"url":"/_next/static/media/45462fd7b7c12654-s.0k62hbripvv8p.woff2","sha256":"8db00ff46c67b22cda8bed865acf7077651cac8d2841d5b40980556b48961931"},{"url":"/_next/static/media/46a9e2f250689b4a-s.0-dom-5bn10r2.woff2","sha256":"fccca918fea40089dacadc7045861314d1a6bc91f1f323cc1eeb22ebcdb321b5"},{"url":"/_next/static/media/6131cbbf5549afa2-s.2uwcyprjm3xu3.woff2","sha256":"46dd4cdca58c26ae87cc6927657bf83b2e8abfc39ffd0ab176e301a8d28d22bf"},{"url":"/_next/static/media/76b70a1dbe058eb5-s.1y4-pdgsjb-pw.woff2","sha256":"aebf2ab4a4ce6810d73c1ac7be7cafb4e5ec4cee2d6db5fb3e09691747ec4bd6"},{"url":"/_next/static/media/8bcddb47c8219945-s.1spbknb88wd48.woff2","sha256":"9e38b3f1575daba3435ef09d33a202585ed5bd204bd0a8c744955c750c2b9091"},{"url":"/_next/static/media/ba63f6a0e436df8e-s.3-6t-g6q0vh0a.woff2","sha256":"a28eb6d3ccb534ae0c94ca999371df024aab60b08c3c8a5720ee9e32fa0faaa2"},{"url":"/_next/static/media/c0680f1bdb3a2e90-s.p.1gsd1jahc5dg_.woff2","sha256":"92684e4acde79ef07758cd09380b7e01e9824d8b061eddeda046f78c166d7b12"},{"url":"/_next/static/media/favicon.2fcpk4-xg61hj.ico","sha256":"4bdb962c57df903dbeb54894e24d67a9274ffc144685a6df6ee3eb02395676f3"},{"url":"/_not-found.html","sha256":"e009c0805bc564ec3b98b0dfd408a547703c2c296a97fd0d7e7af733046d36f3"},{"url":"/_not-found.txt","sha256":"00e3d5ab955fb958045a15ef6524e0ae9c1d27e6d74f62120384d83ec7a4bd9b"},{"url":"/_not-found/__next._full.txt","sha256":"00e3d5ab955fb958045a15ef6524e0ae9c1d27e6d74f62120384d83ec7a4bd9b"},{"url":"/_not-found/__next._not-found.__PAGE__.txt","sha256":"d5204bdf3d1fea3c84e12d097b18f2b330bf3bcb2e0842a2e52cd2ac508f8577"},{"url":"/_not-found/__next._tree.txt","sha256":"7bbab5237ecd53b42d9fff55c1c14bfe17c7d64f751d1240226e3c5b57460777"},{"url":"/browserconfig.xml","sha256":"bd828f72f9a53651fcb04c15cf5046d9385dd7adb4f6ae15d67fd98d2ba161d5"},{"url":"/favicon.ico","sha256":"4bdb962c57df903dbeb54894e24d67a9274ffc144685a6df6ee3eb02395676f3"},{"url":"/file.svg","sha256":"2b67812c325c199a02536cdbeea0c593a72f707d323b72ee3e08dbab06753bd4"},{"url":"/globe.svg","sha256":"b614b9bf183925957661ac851498fe1d8029fd43a62fbfed86f9e2624a57e7cf"},{"url":"/googleaf175b30968c86d2.html","sha256":"6488c84031b49be37936d2e18670521798dd25f0d04410303dae4ee17f8661fd"},{"url":"/images/meta/android-chrome-192x192.png","sha256":"1ffa5b65cac51876269baba560731230b2352777fbcc24e6d012e24fe7cd5beb"},{"url":"/images/meta/android-chrome-512x512.png","sha256":"c0ea013e9c7e75384552b94824d4626dab8102a8a2337f4800e9e5c07cdf9432"},{"url":"/images/meta/apple-touch-icon.png","sha256":"8df87612a1a6fffadffa88fbb386b4f1530b969c509b137a85e3056fd1ca84da"},{"url":"/images/meta/favicon-16x16.png","sha256":"b6d75de845448431e406e129087801177c96d2fc35edcff7498b77b811d77d2d"},{"url":"/images/meta/favicon-32x32.png","sha256":"0974d1129ac0f6b4a53d82692ce60a079af1eb6948c7f0f5c9bcd158d3c50e77"},{"url":"/images/meta/mstile-150x150.png","sha256":"d97827a279f2af6ffdbccda943b04f19355a85ebea0eff44820118df6a7faa6d"},{"url":"/images/meta/mstile-310x150.png","sha256":"e96f5caa9f0b00c11965b467e2cfdc0e2791bf71212dccb7baeec64ac7cfd436"},{"url":"/images/meta/mstile-310x310.png","sha256":"e2c4b1a36000ba09cd73e408fe5afe11f7c3a1e90d9835e8f86ee1423ef2b55c"},{"url":"/images/meta/mstile-70x70.png","sha256":"ee951c99397baec5513df07b41ae1acf7811c886f9b327dcd8b9a032bfcbc58f"},{"url":"/images/meta/og-image.jpg","sha256":"adcd039b0a7f2b0053b3ddcb088a1fdbd8965620cbe3f00a372ccaa8a9dac93c"},{"url":"/images/profile/profile.webp","sha256":"8c929b9934fb9c0a5cc3f109e1508c7bb9200fcd504efe2f4d443aa2cc50f087"},{"url":"/images/projects/gpt-shell-4o-mini/1.webp","sha256":"3363fea38fb79bc49c0e1272292faa7a81fba151d27239777249369a45f3f463"},{"url":"/images/projects/gpt-shell-4o-mini/2.webp","sha256":"b0a96edf2b4e5b68c044ef6c4472fcb76723619a9fd9cc0ff78379d24260e11f"},{"url":"/images/projects/gpt-shell-4o-mini/3.webp","sha256":"19fd3d660483cd85b2c5b83b2065aed183ab5944f2e6c9c8097580a0e91e7a57"},{"url":"/images/projects/gpt-shell-4o-mini/4.webp","sha256":"94c533faf328491e71fb3b802e282a2fd5978821dea4c52857b7d23b4a4f41cd"},{"url":"/images/projects/irs-calculator/1.webp","sha256":"6f181f962ddb14c5b4d7bc3eb47318dcf6b38307573c5fde5922b44fc83da6cc"},{"url":"/images/projects/irs-calculator/2.webp","sha256":"37a9359de4bf553a94f948a5ef73b6bf50687873268270e5f22307013dc64690"},{"url":"/images/projects/irs-calculator/3.webp","sha256":"0004513976a6c488ca3746ba5a3ba73fea901b20a6685fc60fc30491d87ce852"},{"url":"/images/projects/korean-class/1.webp","sha256":"89877ebdc166b0afcdae70e66854847de9e51573f257a298d286eb65a40f9467"},{"url":"/images/projects/korean-class/2.webp","sha256":"c21bb4d7e8b3e5b716226e0e8942f7fc818531a6fea4b8f610726fea29d3243a"},{"url":"/images/projects/korean-class/3.webp","sha256":"83c28d190a6415be652a036d2b5977691a89256cba61e13f4ffbc9a72ddde606"},{"url":"/images/projects/korean-class/4.webp","sha256":"6c9a09ae1f8c3d11eb8ab9ca716e02cab7129323056ea0c18fc412d0bbb2f375"},{"url":"/images/projects/korean-class/5.webp","sha256":"e3101bd0a6cb6825d04785a10cc636045f056e0312f03be1f2d8c5476d67c76b"},{"url":"/images/projects/korean-class/6.webp","sha256":"7df6e2cf4a8638690436b499f4664e03ca727e8e1cdc49d005c03b8286d9fa96"},{"url":"/images/projects/sg-life/1.webp","sha256":"a866df59cb7a9c0baebbf0dcb24e754d1891f8f66d8c96e9cddc8d6e0192d04f"},{"url":"/images/projects/sg-life/2.webp","sha256":"9a6ebac2d355bf69702f0cef63b50671bddf9efef84b3c37830d9fbc7cc3dc39"},{"url":"/images/projects/sg-life/3.webp","sha256":"2e8f3a7604bcdb27015127a180e5e4ccab63465e52d5e5da4337c6c6b4c86d9b"},{"url":"/images/projects/sg-life/4.webp","sha256":"b06aad28a55558819f1b338e0d45383831db31591c341ab735a839f280a4c7af"},{"url":"/images/projects/wkdkavishka-vue/1.webp","sha256":"910af30a3d732b56f5f1914499baab91e20c2ce52c282d5d1f581775c02e1090"},{"url":"/images/projects/wkdkavishka-vue/2.webp","sha256":"2d3829223ac0896f0f24f9ae97df651a0e3a484a24b419ff3eb0399ef7ce144f"},{"url":"/images/projects/wkdkavishka-vue/3.webp","sha256":"491634244815f3f1056ee1c41bed2a6ac1658d5ed90b936629846fecdb3d4e29"},{"url":"/images/projects/wkdkavishka-vue/4.webp","sha256":"c78ae593672b112a2c87bc55f333155f58a252b7b0c76a3d556ce961ae961aca"},{"url":"/images/pwa/desktop-1.png","sha256":"b458e602d280becaae75f63f6695e48a405bfc86c5082f5cb0e2e2243c365664"},{"url":"/images/pwa/desktop-2.png","sha256":"86f9cfb76d3d2f51c75223436c26089fdaa4fb4cdc24e8e5203a9ae2e1925ec4"},{"url":"/images/pwa/desktop-3.png","sha256":"31a753d4700c0ff89edb7a7701c1e521246c6cba04b5466ab4b4cfe624decdcd"},{"url":"/images/pwa/desktop-4.png","sha256":"beb512e5813f1a203a5754d9e23fb4f5c1d35858b1e0530953d132adde379ad5"},{"url":"/images/pwa/mobile-1.png","sha256":"46acd433df8d83cead5fdfeb11e008e132197a059410fd3a69ac0cfe74a533bf"},{"url":"/images/pwa/mobile-2.png","sha256":"ade270c0cb58ed095f41c40f3d52cc9f6e85cbe2607bd15438380f35bfd9d8d9"},{"url":"/images/pwa/mobile-3.png","sha256":"aea420cf2c98014d620303619d1585fcf7f9a7df6ba659b59b5aca94a652c148"},{"url":"/images/team/member-1.webp","sha256":"3b7b7f815974cc95f748416d0447d653473c69582131a9a9e34d20682e0d5759"},{"url":"/images/team/member-2.webp","sha256":"3b7b7f815974cc95f748416d0447d653473c69582131a9a9e34d20682e0d5759"},{"url":"/images/team/member-3.webp","sha256":"3b7b7f815974cc95f748416d0447d653473c69582131a9a9e34d20682e0d5759"},{"url":"/images/team/member-4.webp","sha256":"3b7b7f815974cc95f748416d0447d653473c69582131a9a9e34d20682e0d5759"},{"url":"/index.html","sha256":"137ab44919bb7922442f4c2c7e1a8dab0d9f756f4d7c5e0f6ecc399902632ac0"},{"url":"/index.txt","sha256":"29caf108f12ad136c7077d575932f1949cce0730683295267dad7cd9f1d66551"},{"url":"/manifest.webmanifest","sha256":"160f84f3014039ac6af32208e5a166f547eac835c8502d752694dac5a2e0c54e"},{"url":"/next.svg","sha256":"55995dfad6ecb4945a1e856ddca03c5e16aa5bf13fd21b4df6a74ae79357bcfc"},{"url":"/offline.html","sha256":"926fc933f37074bbde8a93f7c6f5301f10d5c7a750e0e6c3377e4b161a305c97"},{"url":"/og/android-kiosk-device-owner.png","sha256":"55a1b3512b69af6fa65e9dd3a142a68def44a1d1020a0cc87b5c4bf6d9b8ed28"},{"url":"/og/chrome-tab-extensions.png","sha256":"b75e3ee124d7c060b9fe4c58b8fbf63cfaa8cab581a1f5dda849f0b1709785f0"},{"url":"/og/field-service-gps-tracking-app.png","sha256":"2bd510850ac70f096c8c15584b40c24c1465e3cddb58d3196e88a61e36f6876f"},{"url":"/og/gpt-shell-4o-mini.png","sha256":"237a127bb7eb9ff7f1f6589b6d29afcd3b94abb8b487e1e59bf5e58b58e84740"},{"url":"/og/home.png","sha256":"b0d134357121c770f5889964422b3fe8774d276b8089eb86432252ea476e4efa"},{"url":"/og/inventory-management-system.png","sha256":"ec65ed60558f291c03f47128a8d1c55ae9a120fe433371b582328010384686e4"},{"url":"/og/irs-self-assessment.png","sha256":"e20b62526d4b4e314434c61a45568c1184ed2e6b72b36ef6015441ef8471196a"},{"url":"/og/korean-class.png","sha256":"6a61e37f2416d638901da34b79a391a05c6934a56f5649cce82e57aa18ee68ac"},{"url":"/og/linux-desktop-tools.png","sha256":"7caa97926a36db5b34bbfda5680c72c45616b58a677be71180fc6d9902456cb3"},{"url":"/og/payment-terminal-launcher.png","sha256":"cc6e33357d4590731b4b62e4ea2ca836c16593f4f2e0af08aa46f1095937d61b"},{"url":"/og/sg-life.png","sha256":"31e048047d025f1787e5563c2d9fb201611bdf5f8eab0a5797e1e8b17dafbc48"},{"url":"/portfolio.pdf","sha256":"95b565bb04d780322064048a72f4225db4dbeb4b8847fbfed7e400e71d8a11fc"},{"url":"/projects/android-kiosk-device-owner.html","sha256":"baedb71b685257fc8cbcab6281d3ac240794f6a1718a885bc5d55cee78eb0fc4"},{"url":"/projects/android-kiosk-device-owner.txt","sha256":"374d6fb8a43a413c0413dae10687c8dfda026ca9c2201a337ebb32454802b650"},{"url":"/projects/android-kiosk-device-owner/__next._full.txt","sha256":"374d6fb8a43a413c0413dae10687c8dfda026ca9c2201a337ebb32454802b650"},{"url":"/projects/android-kiosk-device-owner/__next._tree.txt","sha256":"e0e0bb44d61f6cdc7fd26359991a1220c7e20603260db09f6f2a7870c0599b10"},{"url":"/projects/android-kiosk-device-owner/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"7e56dd67c546b01840912da68158bf029f2b2057571dc9ecc687d1d082a58bce"},{"url":"/projects/chrome-tab-extensions.html","sha256":"3a17b7b2ba8d1cccdebad98a03f30b96af4e4eb200d392369f8d479f331c0109"},{"url":"/projects/chrome-tab-extensions.txt","sha256":"d5b6d0cc7ed9d8b4e3d14f0ea557e36f7acd479ae71a344b349ea0adecf3cf02"},{"url":"/projects/chrome-tab-extensions/__next._full.txt","sha256":"d5b6d0cc7ed9d8b4e3d14f0ea557e36f7acd479ae71a344b349ea0adecf3cf02"},{"url":"/projects/chrome-tab-extensions/__next._tree.txt","sha256":"cf8911e790c892e6fd50e118cc2cadfc2d2c2d98f1c2c6cf1e5f95706d72fb1a"},{"url":"/projects/chrome-tab-extensions/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"1d17a696a69a3943bcd2629cf286d51a67aaff1db61f7c81d41bd785f48e9e61"},{"url":"/projects/field-service-gps-tracking-app.html","sha256":"bf1b2a7a19beb2a7c6062ada673d7014b092229ee99a08700f2a1ba1d54771c7"},{"url":"/projects/field-service-gps-tracking-app.txt","sha256":"85512f14bd9e7742dbffb98c40abee34f8de37242afa9f0b587ea55bb3413c30"},{"url":"/projects/field-service-gps-tracking-app/__next._full.txt","sha256":"85512f14bd9e7742dbffb98c40abee34f8de37242afa9f0b587ea55bb3413c30"},{"url":"/projects/field-service-gps-tracking-app/__next._tree.txt","sha256":"13c4231892d080d25f91c3f03d35ee2d4ad109c92b12f6710f8445b7c9c3b9d0"},{"url":"/projects/field-service-gps-tracking-app/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"f2fe9592325ef947d74b71e64637d38259db74cccc0db76a3901fbb5401b2231"},{"url":"/projects/gpt-shell-4o-mini.html","sha256":"193862a735cd22faf3839cfbb7d1247b46494fc027214fd3c9bb6e087287a23a"},{"url":"/projects/gpt-shell-4o-mini.txt","sha256":"39da17ed3d271fa550df0e1becc94a28940337752afd08b598459382788ad0a6"},{"url":"/projects/gpt-shell-4o-mini/__next._full.txt","sha256":"39da17ed3d271fa550df0e1becc94a28940337752afd08b598459382788ad0a6"},{"url":"/projects/gpt-shell-4o-mini/__next._tree.txt","sha256":"0f9c3271f2ebf1e354d1af9e18b601864e0c41b1a84072a1c52c1e8a32db279e"},{"url":"/projects/gpt-shell-4o-mini/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"87db808f6513b5404a4eb00ed589b89f6698834b00e832198a4d61e4aec29a72"},{"url":"/projects/inventory-management-system.html","sha256":"5b9f64ee6a2337c460870aa0dc3b5fc9ed6dec9152d2038abc1f5bd3ba4cc8bf"},{"url":"/projects/inventory-management-system.txt","sha256":"c17be540bf952cc7c31064189add322623b2913e226ff67039162cdea096d997"},{"url":"/projects/inventory-management-system/__next._full.txt","sha256":"c17be540bf952cc7c31064189add322623b2913e226ff67039162cdea096d997"},{"url":"/projects/inventory-management-system/__next._tree.txt","sha256":"2212aa663e7834f0da28bd18b218c6be1610cc6ca74b504e0c42aeee6e5aa603"},{"url":"/projects/inventory-management-system/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"81f35cb433bbbb4e888df45d46ac407292f4153ab1107eb33f64187779c46e08"},{"url":"/projects/irs-self-assessment.html","sha256":"1be142158c9336490bc37bcca38f8d530c441161186f68eb1ea8568be5ecaa4c"},{"url":"/projects/irs-self-assessment.txt","sha256":"16ac4764e0715e149d1783067a8081dc2ee032b6614a115912ca39ea06d17490"},{"url":"/projects/irs-self-assessment/__next._full.txt","sha256":"16ac4764e0715e149d1783067a8081dc2ee032b6614a115912ca39ea06d17490"},{"url":"/projects/irs-self-assessment/__next._tree.txt","sha256":"16b79530835f5fc304898fdc36e022657d5b62d486a8678b1e4a8287ed711784"},{"url":"/projects/irs-self-assessment/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"29cc4032172fc04013bb842cd3335153a7cb3beb70d0946913421bf24b0f0f97"},{"url":"/projects/korean-class.html","sha256":"35bb69a09ac459e8758547be31eb090dac11cb0230decc3bbcae56f0be6c686f"},{"url":"/projects/korean-class.txt","sha256":"70acaf575bfd31a3fa780b6a2281cc6943356ad4e5f652da11eda2a3c9cb5e73"},{"url":"/projects/korean-class/__next._full.txt","sha256":"70acaf575bfd31a3fa780b6a2281cc6943356ad4e5f652da11eda2a3c9cb5e73"},{"url":"/projects/korean-class/__next._tree.txt","sha256":"210c21d2930ff6f3e7210833c5d3cd0bb3ba2fdc4f2313c4b403fc34fea9f6e4"},{"url":"/projects/korean-class/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"86d5d96f161592f7ffcfbd1efc38d9d1b425e4d8c52d4efa406a74ed5494a0fd"},{"url":"/projects/linux-desktop-tools.html","sha256":"5b31ed4f26e645ff2e3a36d15ffc562f1a68b13b1fe3ce3e03ce58ed24796587"},{"url":"/projects/linux-desktop-tools.txt","sha256":"20a60ce60d0721851b781444b08c83b68804a1581084fa38973553f1d69c6d61"},{"url":"/projects/linux-desktop-tools/__next._full.txt","sha256":"20a60ce60d0721851b781444b08c83b68804a1581084fa38973553f1d69c6d61"},{"url":"/projects/linux-desktop-tools/__next._tree.txt","sha256":"47a6d028cc44e1c4499b1e2a850bac5e71d2d223abdfe9bd6a076cc4948bba7a"},{"url":"/projects/linux-desktop-tools/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"aa7f0b94dc7fe5129a62b46769c23ab90f3879867b9459cf59a330ccd9cc8d25"},{"url":"/projects/payment-terminal-launcher.html","sha256":"873d0dadc2f7fad67aa291ce6f8cd8e12fd1887d07a7b299a8a5c5710f239994"},{"url":"/projects/payment-terminal-launcher.txt","sha256":"a99e8901cb7d8a66ab2f39d65033ef33751ebef1e90ce42278123ff465c8d18e"},{"url":"/projects/payment-terminal-launcher/__next._full.txt","sha256":"a99e8901cb7d8a66ab2f39d65033ef33751ebef1e90ce42278123ff465c8d18e"},{"url":"/projects/payment-terminal-launcher/__next._tree.txt","sha256":"a3dede5fd899f6f3bd1f412b09303cf4a50f870c47e529d48502f2898a06d72c"},{"url":"/projects/payment-terminal-launcher/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"adb758f106b5e737165d2576e5e1e4dd83d227fc59b320b4442e87f42f1b2ed2"},{"url":"/projects/sg-life.html","sha256":"cfbb3b6c6272ed4b99032ceda36eefadfb17503d5a2c11608d75d67886325892"},{"url":"/projects/sg-life.txt","sha256":"17c4199de4d9449f78ae6a8b47df0b63b57822b81fb696bbd84547ebb2711d21"},{"url":"/projects/sg-life/__next._full.txt","sha256":"17c4199de4d9449f78ae6a8b47df0b63b57822b81fb696bbd84547ebb2711d21"},{"url":"/projects/sg-life/__next._tree.txt","sha256":"b87a426b47b4d7768fc85f7ac6836456c4613ea2ab7259a13375ef9b2e106335"},{"url":"/projects/sg-life/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"7c60fcdecb8364eefa1bab0b1b3211220a5472d186c655bab3d4e04d56ceb480"},{"url":"/pwa-worker.js","sha256":"3195030b9442fcf016cdfd0111acd49dc6733baca49941e917b03ff25452c150"},{"url":"/robots.txt","sha256":"c65f117307eee6d6c04968c5e8e2336baf7552e43d5cdd9a3f898d3944aa6aac"},{"url":"/sitemap.xml","sha256":"5e4ee9e8dba8e7f8a4230ce4361defc2741e3f248b6c23b720c55262c6a5950a"},{"url":"/vercel.svg","sha256":"f081337b2fee635b455b63275406a3e7f39d6a014e25ad90dab5a67e62a12ac4"},{"url":"/window.svg","sha256":"644768c4aaeb4767bce293344eeb0c125fb804a94d801440424072202d85e3a1"}];
const PWA_MODE = "static";
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
  if (!assets.length) throw new Error("Offline build was not prepared");
  const seen = new Set();
  for (const asset of assets) {
    const url = new URL(asset.url, self.location.origin);
    if (url.origin !== self.location.origin || !asset.url.startsWith("/") ||
      url.search || url.hash || seen.has(url.href) ||
      !(typeof asset.sha256 === "string" && /^[a-f0-9]{64}$/.test(asset.sha256) ||
        PWA_MODE === "next" && asset.document === true)) {
      throw new Error("Invalid offline asset manifest");
    }
    seen.add(url.href);
  }
  const cache = await caches.open(CACHE_NAME);
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 120000);
  let cursor = 0;
  let failure;
  const download = async () => {
    while (!controller.signal.aborted && cursor < assets.length) {
      const asset = assets[cursor++];
      try {
        const url = new URL(asset.url, self.location.origin);
        url.searchParams.set("__pwa", asset.sha256 ?? CACHE_NAME);
        const response = await fetch(url, {
          cache: "reload", credentials: "omit", signal: controller.signal,
          ...(asset.document ? { headers: { Accept: "text/html" } } : {}),
        });
        if (!response.ok) throw new Error(`${asset.url}: HTTP ${response.status}`);
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
    await cache.put(MANIFEST_URL, Response.json({ assets, mode: PWA_MODE, activated: false }));
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

async function serveRequest(event) {
  const { request } = event;
  const navigation = request.mode === "navigate";
  let cache;
  let imageFallback;
  try {
    const cacheName = navigation ? CACHE_NAME : await clientCacheName(event.clientId);
    if (navigation) {
      // Storage pressure must not turn a working online page into a failed load.
      await pinClient(event.resultingClientId, CACHE_NAME).catch(() => {});
    }
    const manifest = await readManifest(cacheName);
    cache = await caches.open(cacheName);
    imageFallback = manifest ? optimizedImagePath(request, manifest) : null;
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
    // Keep online requests optimized. Offline, use this tab's verified original
    // rather than precaching every possible width, quality and output format.
    if (imageFallback && cache) {
      const image = await cache.match(new URL(imageFallback, self.location.origin)).catch(() => null);
      if (image) return image;
    }
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
  if (event.request.method !== "GET" || url.origin !== self.location.origin ||
    ["/sw.js", "/pwa-worker.js", "/pwa-manifest.json", "/robots.txt", "/sitemap.xml"].includes(url.pathname)) return;
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
