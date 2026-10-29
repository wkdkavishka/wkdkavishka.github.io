// preparePwaExport() fills both declarations in out/sw.js; keep each on one line.
const CACHE_NAME = "wkdkavishka-pwa-v1-3cccbabb8ce26f31990c20e6";
const PRECACHE_ASSETS = [{"url":"/404.html","sha256":"8a65a12b2f340b346e71cdb1812b433e28c36342bf4956feeea91873f36325df"},{"url":"/BingSiteAuth.xml","sha256":"32579827e9d2b93e0a21b9a8cbac07d3478589b220b9ec8dcb460762bd65c48a"},{"url":"/__next.__PAGE__.txt","sha256":"7bb09b16e292a65d7bd277ef412f2e687e09b0a3ffbe00c06ba8ae49424179d8"},{"url":"/__next._full.txt","sha256":"6e51c61e593f4623bb38c91ca3d947d029531bdf55018b0c40a5efd8c44c3ae3"},{"url":"/__next._head.txt","sha256":"e89273db0d6f92aab37d95a9bec9b0d3f29827be483526ac2f72bc2081680fd4"},{"url":"/__next._index.txt","sha256":"3f154a5c03233e85c621a91fd9187691a6f1c1fa4b9fed9e7e8e31a66c3de9d0"},{"url":"/__next._tree.txt","sha256":"1624f02b8d02776e30f56c5563b23164a023a17641c992888ff4d4c1f343a1b2"},{"url":"/_next/static/AFDHuUIITKLG1qYamST4U/_buildManifest.js","sha256":"9476e0afd3f9da68a64e6ec58631191fd3eaca62c9f5a377e7517fe9a89e59ea"},{"url":"/_next/static/AFDHuUIITKLG1qYamST4U/_clientMiddlewareManifest.js","sha256":"5483e3295dc35dfe29ea932efc85341c916f10ff78ff5b0e965e003710893a4a"},{"url":"/_next/static/AFDHuUIITKLG1qYamST4U/_ssgManifest.js","sha256":"92e9502f1d993d2f48296b2dc2cdbd69d9e297c8c8404a1d6d16fa509d1108c4"},{"url":"/_next/static/chunks/005bbwp137q4p.css","sha256":"23c7d570ed41b582742ba16934263fe86e6aeaf56135e3e8d6f0c738c724a4ff"},{"url":"/_next/static/chunks/05-c3ty_6dwfk.js","sha256":"aee2d073d2a1157cfe5c98907f90b3967de4c3625f9ffb154bd1979ae2b917b0"},{"url":"/_next/static/chunks/0cz1d0mv5g_q7.js","sha256":"0973c1d64c88adc8e3c950410cb58b288f72118d5965b78049438deb8f2f9683"},{"url":"/_next/static/chunks/14mrh2-p_w84d.js","sha256":"a3ac200f3ab8bfa57cf78882057741ddb5c0fbc9e2490c5d951c099b37484206"},{"url":"/_next/static/chunks/1lqk67u1q7f-3.js","sha256":"9810959917f1eceedb07f61d8c9cebd5dc883cd1d4658a218afb9f8f46585fca"},{"url":"/_next/static/chunks/1x84qdcdsqk4x.js","sha256":"4ed699051dcc2049983eb0bff0a7923def576169ce37c87da417fbb71ce10890"},{"url":"/_next/static/chunks/21y3go662gzm2.js","sha256":"573b6cd60cc541ce802c0e7ecd496817f0096096be8dc5356cb430bb0fe2be4b"},{"url":"/_next/static/chunks/27jktro2p5rq9.js","sha256":"5261101892e2476e4346e19e86fd5f19cbcf7c765ff76e92eb9cefcc86b6db6a"},{"url":"/_next/static/chunks/2cya-h6pss2j9.js","sha256":"ad9f0377c0d43de17b2ecd496ad1f5390214c8c53083a638bee2ab26ed32b016"},{"url":"/_next/static/chunks/2k0ewwk_iw8xh.js","sha256":"2a37b64f2814759731f37ec0e39e2e13bb3b19d495bfa290a5194f0bb0e1134f"},{"url":"/_next/static/chunks/2w1p8z-haya-f.js","sha256":"bb7090f1a2aebfff8eace715bebdbb2ba65d941e097e436dc6e1e9e5f6a9df50"},{"url":"/_next/static/chunks/31r-xy3l40e2k.js","sha256":"920b9868dcbe129bdd0dcc3e7cd9c9e745fe817b1d0c77a8e28ffca0220d08ab"},{"url":"/_next/static/chunks/3_4ewku2ym80j.js","sha256":"b247836342bc9ba851a43dc0b02d8667998717b60d36b97b5a572d75db685530"},{"url":"/_next/static/chunks/3bk8l2j0uemr3.js","sha256":"1c9702842c722171a6ac3d6e82ef62f8a74b75a35bc6811ff01d0208d6af4781"},{"url":"/_next/static/chunks/3q8p9a7btkyh7.js","sha256":"dbe5e176ee47407616510f73bd152f8abf75dd34e23369d20b107a730fc71c04"},{"url":"/_next/static/chunks/3xg6l4nhapqk7.js","sha256":"5c32aa7aed320fb82050f49f17baa21a0e265153eb5d6ed85ab0704f4052a5d7"},{"url":"/_next/static/chunks/40dptth33ljrj.js","sha256":"e1ae24faa970c28e48d941d3cf8febedd3ce1fe8a0a4e5e102bd2cfb6ae62cdc"},{"url":"/_next/static/chunks/turbopack-240foss4xbjgh.js","sha256":"45e250897d621a8b43397015d20b5de4a06a394475114c678a23a4a64890c58a"},{"url":"/_next/static/media/1b99372b3eaef0c8-s.p.1gsd1jahc5dg_.woff2","sha256":"92684e4acde79ef07758cd09380b7e01e9824d8b061eddeda046f78c166d7b12"},{"url":"/_next/static/media/1bffadaabf893a1e-s.3-6t-g6q0vh0a.woff2","sha256":"a28eb6d3ccb534ae0c94ca999371df024aab60b08c3c8a5720ee9e32fa0faaa2"},{"url":"/_next/static/media/2bbe8d2671613f1f-s.0k62hbripvv8p.woff2","sha256":"8db00ff46c67b22cda8bed865acf7077651cac8d2841d5b40980556b48961931"},{"url":"/_next/static/media/2c55a0e60120577a-s.0-dom-5bn10r2.woff2","sha256":"fccca918fea40089dacadc7045861314d1a6bc91f1f323cc1eeb22ebcdb321b5"},{"url":"/_next/static/media/5476f68d60460930-s.2uwcyprjm3xu3.woff2","sha256":"46dd4cdca58c26ae87cc6927657bf83b2e8abfc39ffd0ab176e301a8d28d22bf"},{"url":"/_next/static/media/83afe278b6a6bb3c-s.p.2bn3s6zvc0dyp.woff2","sha256":"c940764593d0fe5d596be327ca7558855e018039fb78509aa21921fd3644c3e4"},{"url":"/_next/static/media/9c72aa0f40e4eef8-s.1y4-pdgsjb-pw.woff2","sha256":"aebf2ab4a4ce6810d73c1ac7be7cafb4e5ec4cee2d6db5fb3e09691747ec4bd6"},{"url":"/_next/static/media/ad66f9afd8947f86-s.3lvt2whj97whp.woff2","sha256":"a2e2c783ca6f9c20486e81e72a279203e86730bbf8f01ff6a5ee9dbd09e1c271"},{"url":"/_next/static/media/b2ea385cb5ae8625-s.1spbknb88wd48.woff2","sha256":"9e38b3f1575daba3435ef09d33a202585ed5bd204bd0a8c744955c750c2b9091"},{"url":"/_next/static/media/favicon.27j75ylz52ixj.ico","sha256":"2da381d380a3e12401ce914fa6d7986cb3ebc078f72c73e249ce4183d7311197"},{"url":"/_not-found.html","sha256":"8a65a12b2f340b346e71cdb1812b433e28c36342bf4956feeea91873f36325df"},{"url":"/_not-found.txt","sha256":"856224466742f6970dca2d82129e00f749df9cbb59b862d0ef5188012dab5129"},{"url":"/_not-found/__next._full.txt","sha256":"856224466742f6970dca2d82129e00f749df9cbb59b862d0ef5188012dab5129"},{"url":"/_not-found/__next._head.txt","sha256":"3d33c7dca83bfb233b444d57bafc0adbb26861f2281b151eb8f2f5d891c016c8"},{"url":"/_not-found/__next._index.txt","sha256":"3f154a5c03233e85c621a91fd9187691a6f1c1fa4b9fed9e7e8e31a66c3de9d0"},{"url":"/_not-found/__next._not-found.__PAGE__.txt","sha256":"ead5055b8e959061ff10a8db079f9514680da4b9d31ea9608bd6c94e52f7522b"},{"url":"/_not-found/__next._not-found.txt","sha256":"0f446b09253bfb1ca669145406c88a8ee185f419e6feb87f6980013d37c15d2d"},{"url":"/_not-found/__next._tree.txt","sha256":"ed9d82c0881faaccfe797b5080d659f0060881569f7d4ba988adfef5e4254f79"},{"url":"/browserconfig.xml","sha256":"bd828f72f9a53651fcb04c15cf5046d9385dd7adb4f6ae15d67fd98d2ba161d5"},{"url":"/favicon.ico","sha256":"2da381d380a3e12401ce914fa6d7986cb3ebc078f72c73e249ce4183d7311197"},{"url":"/file.svg","sha256":"2b67812c325c199a02536cdbeea0c593a72f707d323b72ee3e08dbab06753bd4"},{"url":"/globe.svg","sha256":"b614b9bf183925957661ac851498fe1d8029fd43a62fbfed86f9e2624a57e7cf"},{"url":"/googleaf175b30968c86d2.html","sha256":"6488c84031b49be37936d2e18670521798dd25f0d04410303dae4ee17f8661fd"},{"url":"/images/meta/android-chrome-192x192.png","sha256":"33c6dd26cdca447c86a1b3b3bfb1858bb28a237ecfd8896b2a232e122d99ab4a"},{"url":"/images/meta/android-chrome-512x512.png","sha256":"a9e4a28bed28133d82453ef2c313ea8e57882386fd1100b896600258c7225a09"},{"url":"/images/meta/apple-touch-icon.png","sha256":"08a61a074d123b53573a2cf9bd8b3965a8988faf3de7a89d842f924c6dcd855f"},{"url":"/images/meta/favicon-16x16.png","sha256":"c17d798171d4044dec2db3cadb9a343424fc273a48c2d85f95c2ccf4221c6db2"},{"url":"/images/meta/favicon-32x32.png","sha256":"704bd11a1a3c856d9ee38fc381277df535ba6f890ad0b1f7552e0768b780b39f"},{"url":"/images/meta/mstile-150x150.png","sha256":"724497c31c94a7ea92e91b7eed279287ed142e3ff3155ba348366ddfbc78ae76"},{"url":"/images/meta/mstile-310x150.png","sha256":"724497c31c94a7ea92e91b7eed279287ed142e3ff3155ba348366ddfbc78ae76"},{"url":"/images/meta/mstile-310x310.png","sha256":"b1d82ae626eb24bf22213d7d0a30b685a470be64dd1d7b718cd25fc8728b5720"},{"url":"/images/meta/mstile-70x70.png","sha256":"8583b6774404c8c7b3f3e5d37af3cae9eb274e9f3c99113f769b3f2d2965b910"},{"url":"/images/meta/og-image.jpg","sha256":"86e14d614f11f73612483fe6922bc6f3515e98643ed5aff6e845a3fa50c0af98"},{"url":"/images/profile/profile.webp","sha256":"5656ef383704139a6aa9bb59cf8cb1831a46c195dde5524358b52bd21e2a4c8d"},{"url":"/images/projects/gpt-shell-4o-mini/1.webp","sha256":"3363fea38fb79bc49c0e1272292faa7a81fba151d27239777249369a45f3f463"},{"url":"/images/projects/gpt-shell-4o-mini/2.webp","sha256":"b0a96edf2b4e5b68c044ef6c4472fcb76723619a9fd9cc0ff78379d24260e11f"},{"url":"/images/projects/gpt-shell-4o-mini/3.webp","sha256":"19fd3d660483cd85b2c5b83b2065aed183ab5944f2e6c9c8097580a0e91e7a57"},{"url":"/images/projects/gpt-shell-4o-mini/4.webp","sha256":"94c533faf328491e71fb3b802e282a2fd5978821dea4c52857b7d23b4a4f41cd"},{"url":"/images/projects/irs-calculator/1.webp","sha256":"6f181f962ddb14c5b4d7bc3eb47318dcf6b38307573c5fde5922b44fc83da6cc"},{"url":"/images/projects/irs-calculator/2.webp","sha256":"37a9359de4bf553a94f948a5ef73b6bf50687873268270e5f22307013dc64690"},{"url":"/images/projects/irs-calculator/3.webp","sha256":"0004513976a6c488ca3746ba5a3ba73fea901b20a6685fc60fc30491d87ce852"},{"url":"/images/projects/korean-class/1.webp","sha256":"89877ebdc166b0afcdae70e66854847de9e51573f257a298d286eb65a40f9467"},{"url":"/images/projects/korean-class/2.webp","sha256":"c21bb4d7e8b3e5b716226e0e8942f7fc818531a6fea4b8f610726fea29d3243a"},{"url":"/images/projects/korean-class/3.webp","sha256":"83c28d190a6415be652a036d2b5977691a89256cba61e13f4ffbc9a72ddde606"},{"url":"/images/projects/korean-class/4.webp","sha256":"6c9a09ae1f8c3d11eb8ab9ca716e02cab7129323056ea0c18fc412d0bbb2f375"},{"url":"/images/projects/korean-class/5.webp","sha256":"e3101bd0a6cb6825d04785a10cc636045f056e0312f03be1f2d8c5476d67c76b"},{"url":"/images/projects/korean-class/6.webp","sha256":"7df6e2cf4a8638690436b499f4664e03ca727e8e1cdc49d005c03b8286d9fa96"},{"url":"/images/projects/sg-life/1.webp","sha256":"a866df59cb7a9c0baebbf0dcb24e754d1891f8f66d8c96e9cddc8d6e0192d04f"},{"url":"/images/projects/sg-life/2.webp","sha256":"9a6ebac2d355bf69702f0cef63b50671bddf9efef84b3c37830d9fbc7cc3dc39"},{"url":"/images/projects/sg-life/3.webp","sha256":"2e8f3a7604bcdb27015127a180e5e4ccab63465e52d5e5da4337c6c6b4c86d9b"},{"url":"/images/projects/sg-life/4.webp","sha256":"b06aad28a55558819f1b338e0d45383831db31591c341ab735a839f280a4c7af"},{"url":"/images/projects/wkdkavishka-vue/1.webp","sha256":"910af30a3d732b56f5f1914499baab91e20c2ce52c282d5d1f581775c02e1090"},{"url":"/images/projects/wkdkavishka-vue/2.webp","sha256":"2d3829223ac0896f0f24f9ae97df651a0e3a484a24b419ff3eb0399ef7ce144f"},{"url":"/images/projects/wkdkavishka-vue/3.webp","sha256":"491634244815f3f1056ee1c41bed2a6ac1658d5ed90b936629846fecdb3d4e29"},{"url":"/images/projects/wkdkavishka-vue/4.webp","sha256":"c78ae593672b112a2c87bc55f333155f58a252b7b0c76a3d556ce961ae961aca"},{"url":"/images/pwa/desktop-1.png","sha256":"7402695d8145dc2ab71d6471e6fb523eed5424cdd0313094c267b5fa2ec90793"},{"url":"/images/pwa/desktop-2.png","sha256":"86f9cfb76d3d2f51c75223436c26089fdaa4fb4cdc24e8e5203a9ae2e1925ec4"},{"url":"/images/pwa/desktop-3.png","sha256":"31a753d4700c0ff89edb7a7701c1e521246c6cba04b5466ab4b4cfe624decdcd"},{"url":"/images/pwa/desktop-4.png","sha256":"beb512e5813f1a203a5754d9e23fb4f5c1d35858b1e0530953d132adde379ad5"},{"url":"/images/pwa/mobile-1.png","sha256":"5cc80723b5dc7ad96b432d154289972e83d3368c95a4865b439f2a929480addd"},{"url":"/images/pwa/mobile-2.png","sha256":"ade270c0cb58ed095f41c40f3d52cc9f6e85cbe2607bd15438380f35bfd9d8d9"},{"url":"/images/pwa/mobile-3.png","sha256":"aea420cf2c98014d620303619d1585fcf7f9a7df6ba659b59b5aca94a652c148"},{"url":"/images/team/member-1.webp","sha256":"3b7b7f815974cc95f748416d0447d653473c69582131a9a9e34d20682e0d5759"},{"url":"/images/team/member-2.webp","sha256":"3b7b7f815974cc95f748416d0447d653473c69582131a9a9e34d20682e0d5759"},{"url":"/images/team/member-3.webp","sha256":"3b7b7f815974cc95f748416d0447d653473c69582131a9a9e34d20682e0d5759"},{"url":"/images/team/member-4.webp","sha256":"3b7b7f815974cc95f748416d0447d653473c69582131a9a9e34d20682e0d5759"},{"url":"/index.html","sha256":"8181324f69ac57c66e72d23b4ac437858045d89fdbaf47e3c053731ba7d8ce1b"},{"url":"/index.txt","sha256":"6e51c61e593f4623bb38c91ca3d947d029531bdf55018b0c40a5efd8c44c3ae3"},{"url":"/manifest.webmanifest","sha256":"cb3147df0fa398f3f0dd780d50888d81ecc1856bf7d5951c2f1c61403b237a61"},{"url":"/next.svg","sha256":"55995dfad6ecb4945a1e856ddca03c5e16aa5bf13fd21b4df6a74ae79357bcfc"},{"url":"/offline.html","sha256":"46be021f6df60de2daacb8d3613a0ebc58b1a951d34fcc64a0805457c8a5858f"},{"url":"/og/android-kiosk-device-owner.png","sha256":"a34970bf8ff51c9f82721d9882b6557a659debc68f4b31225853fcaf7c1c6e14"},{"url":"/og/chrome-tab-extensions.png","sha256":"fad36895a81119487dcdacff08ae501d578c28a14dfc97750eb7827c04dca426"},{"url":"/og/field-service-gps-tracking-app.png","sha256":"92be3d43e65163b3b97c9e0a87df987ce66659c3f4a5dff0ce557919f4a10a27"},{"url":"/og/gpt-shell-4o-mini.png","sha256":"199d5e13b317420ad06c63984a34096b1c05c20e3341f96682b57dc141e6beac"},{"url":"/og/home.png","sha256":"a32f5c8e9fe5d2287bf894aaa9b31db92cb3bd701531549f4a162cbc04367a12"},{"url":"/og/inventory-management-system.png","sha256":"defb87e1f6c69e394dfe0c41b1658743a873663447452c58e57c0077d078a559"},{"url":"/og/irs-self-assessment.png","sha256":"9dedbd52804f1436cdcc79bb1463b09ec69bc5846a5d017e8cb6cc801743612e"},{"url":"/og/korean-class.png","sha256":"334086a94ca9c1c477d6c0915878dad96df2a937f734772dee260518e63404b3"},{"url":"/og/linux-desktop-tools.png","sha256":"1a3709acb573448b82ef1e8c7d891a08a111e9c29d08c907a9f205d452af65a3"},{"url":"/og/payment-terminal-launcher.png","sha256":"1f75ffe6f523de0bff52012e76be4d8cfc246be6bcd78f1693022e5bff2c358f"},{"url":"/og/sg-life.png","sha256":"e452fe4000dfb39a41dda0efbc92df181a0da3facf6044da3efbca42f21edcc6"},{"url":"/portfolio.pdf","sha256":"95b565bb04d780322064048a72f4225db4dbeb4b8847fbfed7e400e71d8a11fc"},{"url":"/projects/android-kiosk-device-owner.html","sha256":"3c285b8be17262ffde80d26fd592f44a151363b7fc995c4b8190551ebd125f2e"},{"url":"/projects/android-kiosk-device-owner.txt","sha256":"403094c3ef8fcd34f10ccca516fbcc8f84f656504ff5caf33159ba72c1968436"},{"url":"/projects/android-kiosk-device-owner/__next._full.txt","sha256":"403094c3ef8fcd34f10ccca516fbcc8f84f656504ff5caf33159ba72c1968436"},{"url":"/projects/android-kiosk-device-owner/__next._head.txt","sha256":"c4df21816ca986401fd4d2e28fd12fd7fda56603ee9008a3cc4b3954d69e614e"},{"url":"/projects/android-kiosk-device-owner/__next._index.txt","sha256":"3f154a5c03233e85c621a91fd9187691a6f1c1fa4b9fed9e7e8e31a66c3de9d0"},{"url":"/projects/android-kiosk-device-owner/__next._tree.txt","sha256":"7b7d5c312f5dccf2168aec7a10fc56d274550de2be5559349ac5772e8a74c65a"},{"url":"/projects/android-kiosk-device-owner/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"d721551ebff11ffb5e1af73becd17df55ea98b3c9482180e4a7d01af4328cf6e"},{"url":"/projects/android-kiosk-device-owner/__next.projects.%24d%24slug.txt","sha256":"0f446b09253bfb1ca669145406c88a8ee185f419e6feb87f6980013d37c15d2d"},{"url":"/projects/android-kiosk-device-owner/__next.projects.txt","sha256":"0f446b09253bfb1ca669145406c88a8ee185f419e6feb87f6980013d37c15d2d"},{"url":"/projects/chrome-tab-extensions.html","sha256":"a83b96950a400f65be56438adca3a71ba8dea8a4611d4772705374dc1e731315"},{"url":"/projects/chrome-tab-extensions.txt","sha256":"0af89476f5ded280e7792dbc78c05c5dd3abd5a445236d8e13e8ba016d2a36cb"},{"url":"/projects/chrome-tab-extensions/__next._full.txt","sha256":"0af89476f5ded280e7792dbc78c05c5dd3abd5a445236d8e13e8ba016d2a36cb"},{"url":"/projects/chrome-tab-extensions/__next._head.txt","sha256":"a4c9c4a8d7d0c058bb21794285ea5a5ea7f7d7283b04bb497e024514f7d655a2"},{"url":"/projects/chrome-tab-extensions/__next._index.txt","sha256":"3f154a5c03233e85c621a91fd9187691a6f1c1fa4b9fed9e7e8e31a66c3de9d0"},{"url":"/projects/chrome-tab-extensions/__next._tree.txt","sha256":"daa9b8cebd6de34bdbbe7b159517dcdd916b78ff0c59e3d939c4c2b38498bfdd"},{"url":"/projects/chrome-tab-extensions/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"8fa67f6d65c6bc014ea6e0538e45cbc8129696c3ead59ed4122613d12657d478"},{"url":"/projects/chrome-tab-extensions/__next.projects.%24d%24slug.txt","sha256":"0f446b09253bfb1ca669145406c88a8ee185f419e6feb87f6980013d37c15d2d"},{"url":"/projects/chrome-tab-extensions/__next.projects.txt","sha256":"0f446b09253bfb1ca669145406c88a8ee185f419e6feb87f6980013d37c15d2d"},{"url":"/projects/field-service-gps-tracking-app.html","sha256":"307c2a44058f895bad135a1979ef11e4c8a38494ac5782182673f0bead0a628f"},{"url":"/projects/field-service-gps-tracking-app.txt","sha256":"e88fd136cae8751a42c99573b0380ea7c80121ebae53239a3bbd1e56fab20e50"},{"url":"/projects/field-service-gps-tracking-app/__next._full.txt","sha256":"e88fd136cae8751a42c99573b0380ea7c80121ebae53239a3bbd1e56fab20e50"},{"url":"/projects/field-service-gps-tracking-app/__next._head.txt","sha256":"2d09e073da16a005e40326131b5f2af6d8e22e5e910705759c8798e7fe9bdfa4"},{"url":"/projects/field-service-gps-tracking-app/__next._index.txt","sha256":"3f154a5c03233e85c621a91fd9187691a6f1c1fa4b9fed9e7e8e31a66c3de9d0"},{"url":"/projects/field-service-gps-tracking-app/__next._tree.txt","sha256":"d39ec2af28da071c97b3e60f8e334548892b037905ab4b7870c1f9f27d289b62"},{"url":"/projects/field-service-gps-tracking-app/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"3fda89d23e5f7b5b8d74fcac3de48252057492c6bffd35eae11944e4afddd9ba"},{"url":"/projects/field-service-gps-tracking-app/__next.projects.%24d%24slug.txt","sha256":"0f446b09253bfb1ca669145406c88a8ee185f419e6feb87f6980013d37c15d2d"},{"url":"/projects/field-service-gps-tracking-app/__next.projects.txt","sha256":"0f446b09253bfb1ca669145406c88a8ee185f419e6feb87f6980013d37c15d2d"},{"url":"/projects/gpt-shell-4o-mini.html","sha256":"b6f3a7b2ea507818851c900d0d68917a8ca7404766a7b6a3d443320b9ec5ae6f"},{"url":"/projects/gpt-shell-4o-mini.txt","sha256":"42208c90e174fdc71520a67783d361571ebf9a090f636dfc6df296aa26f8737d"},{"url":"/projects/gpt-shell-4o-mini/__next._full.txt","sha256":"42208c90e174fdc71520a67783d361571ebf9a090f636dfc6df296aa26f8737d"},{"url":"/projects/gpt-shell-4o-mini/__next._head.txt","sha256":"9dc223f2f3a9ca075246683e954c5d97d21418a46547cfce0bd0f51679458b57"},{"url":"/projects/gpt-shell-4o-mini/__next._index.txt","sha256":"3f154a5c03233e85c621a91fd9187691a6f1c1fa4b9fed9e7e8e31a66c3de9d0"},{"url":"/projects/gpt-shell-4o-mini/__next._tree.txt","sha256":"e6b69099b2d15225466732e27318477fd7c7762b368df8505c813d3269bf19b1"},{"url":"/projects/gpt-shell-4o-mini/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"9091192928b64f1ed72f189b69f6c60a83a8e8b5ff9d96aebe41e63736caf99a"},{"url":"/projects/gpt-shell-4o-mini/__next.projects.%24d%24slug.txt","sha256":"0f446b09253bfb1ca669145406c88a8ee185f419e6feb87f6980013d37c15d2d"},{"url":"/projects/gpt-shell-4o-mini/__next.projects.txt","sha256":"0f446b09253bfb1ca669145406c88a8ee185f419e6feb87f6980013d37c15d2d"},{"url":"/projects/inventory-management-system.html","sha256":"2479d9b4c6c63dcf0438d52859f9ec1146ebd36d1ef2319ab7e089afbeee50d0"},{"url":"/projects/inventory-management-system.txt","sha256":"72df6db4117162c769f131c2b801ced8efbc112c17dd7c8adc2d0f419b863434"},{"url":"/projects/inventory-management-system/__next._full.txt","sha256":"72df6db4117162c769f131c2b801ced8efbc112c17dd7c8adc2d0f419b863434"},{"url":"/projects/inventory-management-system/__next._head.txt","sha256":"b8633e180d02e7f7dba811af9714c0229e6c5a1b4bb7bdfdc60f1b9c8cb213fa"},{"url":"/projects/inventory-management-system/__next._index.txt","sha256":"3f154a5c03233e85c621a91fd9187691a6f1c1fa4b9fed9e7e8e31a66c3de9d0"},{"url":"/projects/inventory-management-system/__next._tree.txt","sha256":"8b114866491f21d9cd3942d27a3f6887d5e98607ad728112afa309aa7f85c377"},{"url":"/projects/inventory-management-system/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"9a2e4f96a21d5bb049df459564b19e78f8de9e2886a312a7f938c512a416222f"},{"url":"/projects/inventory-management-system/__next.projects.%24d%24slug.txt","sha256":"0f446b09253bfb1ca669145406c88a8ee185f419e6feb87f6980013d37c15d2d"},{"url":"/projects/inventory-management-system/__next.projects.txt","sha256":"0f446b09253bfb1ca669145406c88a8ee185f419e6feb87f6980013d37c15d2d"},{"url":"/projects/irs-self-assessment.html","sha256":"4ec90807373e1579e76ca4d6c6f36d27c731ab3d95733373daa3e873b0762dd3"},{"url":"/projects/irs-self-assessment.txt","sha256":"ada6e8443464e4bb5d07ce57489bafe40a43cfffadcee5725a35492bdfcaff92"},{"url":"/projects/irs-self-assessment/__next._full.txt","sha256":"ada6e8443464e4bb5d07ce57489bafe40a43cfffadcee5725a35492bdfcaff92"},{"url":"/projects/irs-self-assessment/__next._head.txt","sha256":"59961624700cd284dc612216893b1ddc509ba5bc72fa6282d180cc5016a00539"},{"url":"/projects/irs-self-assessment/__next._index.txt","sha256":"3f154a5c03233e85c621a91fd9187691a6f1c1fa4b9fed9e7e8e31a66c3de9d0"},{"url":"/projects/irs-self-assessment/__next._tree.txt","sha256":"15116dbee67147917bdd19e712421987e26665010f380b1a61c49f5dfc42210f"},{"url":"/projects/irs-self-assessment/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"986481f64af938654e520fb0ef8f1dd55b4bfbdbdb45d2829f0c968383f027c2"},{"url":"/projects/irs-self-assessment/__next.projects.%24d%24slug.txt","sha256":"0f446b09253bfb1ca669145406c88a8ee185f419e6feb87f6980013d37c15d2d"},{"url":"/projects/irs-self-assessment/__next.projects.txt","sha256":"0f446b09253bfb1ca669145406c88a8ee185f419e6feb87f6980013d37c15d2d"},{"url":"/projects/korean-class.html","sha256":"1444495a9070624bd55d8c12a079f87f6993c7d1d7431d14c1452e798104ca11"},{"url":"/projects/korean-class.txt","sha256":"af2ccf178e623af4cf5828efcbe0f28df88ee8b9fed281c2175c31f2cdd13d92"},{"url":"/projects/korean-class/__next._full.txt","sha256":"af2ccf178e623af4cf5828efcbe0f28df88ee8b9fed281c2175c31f2cdd13d92"},{"url":"/projects/korean-class/__next._head.txt","sha256":"ebd812d5deecb650f1ae69d70003073151e7d549c25c1e9c8d74f2edb8d9cff7"},{"url":"/projects/korean-class/__next._index.txt","sha256":"3f154a5c03233e85c621a91fd9187691a6f1c1fa4b9fed9e7e8e31a66c3de9d0"},{"url":"/projects/korean-class/__next._tree.txt","sha256":"c10541b8dd24eac92c4a32b376f07ceee72b7e82075db99b3277f409496ce96b"},{"url":"/projects/korean-class/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"a7819b7e466fec9dfa6fa01736e93a8f6bcbef61157141b6cd80d88b2b96c97b"},{"url":"/projects/korean-class/__next.projects.%24d%24slug.txt","sha256":"0f446b09253bfb1ca669145406c88a8ee185f419e6feb87f6980013d37c15d2d"},{"url":"/projects/korean-class/__next.projects.txt","sha256":"0f446b09253bfb1ca669145406c88a8ee185f419e6feb87f6980013d37c15d2d"},{"url":"/projects/linux-desktop-tools.html","sha256":"56965cec258fad0354af0f06a8076f7cf286fa059d94e54b8a005b682ed8e377"},{"url":"/projects/linux-desktop-tools.txt","sha256":"154f779972b5fd51dece9dcb725a381c597aa1d2cdbba567c240ae7115a161a0"},{"url":"/projects/linux-desktop-tools/__next._full.txt","sha256":"154f779972b5fd51dece9dcb725a381c597aa1d2cdbba567c240ae7115a161a0"},{"url":"/projects/linux-desktop-tools/__next._head.txt","sha256":"8170d43615317a46ff3110419604f336afecea2abf11d0e1dfd17e8554620484"},{"url":"/projects/linux-desktop-tools/__next._index.txt","sha256":"3f154a5c03233e85c621a91fd9187691a6f1c1fa4b9fed9e7e8e31a66c3de9d0"},{"url":"/projects/linux-desktop-tools/__next._tree.txt","sha256":"effdefc08dcbb3d5f25d392fa62a0d2fa3c860021071ac9de51257e331137d14"},{"url":"/projects/linux-desktop-tools/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"f9ec60113a90f3548dba3f10651e6e05515a108ef2ea0588eaa1f3c0689eb5ef"},{"url":"/projects/linux-desktop-tools/__next.projects.%24d%24slug.txt","sha256":"0f446b09253bfb1ca669145406c88a8ee185f419e6feb87f6980013d37c15d2d"},{"url":"/projects/linux-desktop-tools/__next.projects.txt","sha256":"0f446b09253bfb1ca669145406c88a8ee185f419e6feb87f6980013d37c15d2d"},{"url":"/projects/payment-terminal-launcher.html","sha256":"ae9968709d7401b3c7bc2e374923dca8098a71b51c4653850b81038dda3b491e"},{"url":"/projects/payment-terminal-launcher.txt","sha256":"722869be3615a24d788d90c4f797c02f1a492c31f0eca37b892ed9724f86235d"},{"url":"/projects/payment-terminal-launcher/__next._full.txt","sha256":"722869be3615a24d788d90c4f797c02f1a492c31f0eca37b892ed9724f86235d"},{"url":"/projects/payment-terminal-launcher/__next._head.txt","sha256":"febc609967ec56f57571283d0eddb854a8ef4f0032fb2f4d1c8502c7439a538e"},{"url":"/projects/payment-terminal-launcher/__next._index.txt","sha256":"3f154a5c03233e85c621a91fd9187691a6f1c1fa4b9fed9e7e8e31a66c3de9d0"},{"url":"/projects/payment-terminal-launcher/__next._tree.txt","sha256":"11c384be3cdbe738d11527811dc24d9134d691588265880b939be101ed642d29"},{"url":"/projects/payment-terminal-launcher/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"763a68147ff7772de2d98b5488abcd59e3d40a5f6f0ec32940a8c0c500948b0c"},{"url":"/projects/payment-terminal-launcher/__next.projects.%24d%24slug.txt","sha256":"0f446b09253bfb1ca669145406c88a8ee185f419e6feb87f6980013d37c15d2d"},{"url":"/projects/payment-terminal-launcher/__next.projects.txt","sha256":"0f446b09253bfb1ca669145406c88a8ee185f419e6feb87f6980013d37c15d2d"},{"url":"/projects/sg-life.html","sha256":"83ffdecbd0627548eb5e47b67be47848ffb72536f784cd9fc1abf314266f4f96"},{"url":"/projects/sg-life.txt","sha256":"f19065ec2a95a6ef806ef59c5585b2193bfda44028f78a2a4eba5809dff29e70"},{"url":"/projects/sg-life/__next._full.txt","sha256":"f19065ec2a95a6ef806ef59c5585b2193bfda44028f78a2a4eba5809dff29e70"},{"url":"/projects/sg-life/__next._head.txt","sha256":"ac8845aa1bc7f90207f7b68496028fb3dda4d7509abb5ee794fa6623c981582a"},{"url":"/projects/sg-life/__next._index.txt","sha256":"3f154a5c03233e85c621a91fd9187691a6f1c1fa4b9fed9e7e8e31a66c3de9d0"},{"url":"/projects/sg-life/__next._tree.txt","sha256":"cfda1c2e135a2b5822102d304e5cd47b44d166b19447ed39a2aeaf9fe2f4ac6b"},{"url":"/projects/sg-life/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"72ed85cc0eccf589947076f6173c3709a5712f33262bbf4a2e80adf2cb000175"},{"url":"/projects/sg-life/__next.projects.%24d%24slug.txt","sha256":"0f446b09253bfb1ca669145406c88a8ee185f419e6feb87f6980013d37c15d2d"},{"url":"/projects/sg-life/__next.projects.txt","sha256":"0f446b09253bfb1ca669145406c88a8ee185f419e6feb87f6980013d37c15d2d"},{"url":"/robots.txt","sha256":"3f10717965e181eeee85c09dbe85abfbd355ba7c4257dd41a523422afe5eb9ff"},{"url":"/sitemap.xml","sha256":"464325854cd3c775715f41842397b3336c1b18ebb63cc995fb5dcf73669f5274"},{"url":"/vercel.svg","sha256":"f081337b2fee635b455b63275406a3e7f39d6a014e25ad90dab5a67e62a12ac4"},{"url":"/window.svg","sha256":"644768c4aaeb4767bce293344eeb0c125fb804a94d801440424072202d85e3a1"}];
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
