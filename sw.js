// Shared engine: preparePwaExport() fills out/sw.js; pwa-worker.js freezes the
// Next build version. Keep these declarations on one line for both preparers.
const CACHE_NAME = "wkdkavishka-pwa-v1-710475248785ccc2966b771f";
const PRECACHE_ASSETS = [{"url":"/404.html","sha256":"c552e8fff4fcd71f011e1629f244681a7af053bcfd8915168885cff8200b6c9a"},{"url":"/BingSiteAuth.xml","sha256":"32579827e9d2b93e0a21b9a8cbac07d3478589b220b9ec8dcb460762bd65c48a"},{"url":"/__next.__PAGE__.txt","sha256":"e0c7f0a2634275ecc106e05169af4af42323a1f9abf2e61cb6bccbd178cfa0c7"},{"url":"/__next._full.txt","sha256":"9bc2dd4efff2592f0139cc2e6c2328649f291f0b6a0604f32c6aadb33ad38193"},{"url":"/__next._tree.txt","sha256":"646b740b406a786879a9efcc8054cabd8984161d5a2df9578e0b487f76228103"},{"url":"/_next/static/AnBLLU-dnPZaYa0nVkwVq/_buildManifest.js","sha256":"9476e0afd3f9da68a64e6ec58631191fd3eaca62c9f5a377e7517fe9a89e59ea"},{"url":"/_next/static/AnBLLU-dnPZaYa0nVkwVq/_clientMiddlewareManifest.js","sha256":"5483e3295dc35dfe29ea932efc85341c916f10ff78ff5b0e965e003710893a4a"},{"url":"/_next/static/AnBLLU-dnPZaYa0nVkwVq/_ssgManifest.js","sha256":"92e9502f1d993d2f48296b2dc2cdbd69d9e297c8c8404a1d6d16fa509d1108c4"},{"url":"/_next/static/chunks/092r-mewpaf3q.js","sha256":"30b1a7afdc2b4c18dbed0c12b4cbb9ca6e3b1b048440715e434664cb534d6f11"},{"url":"/_next/static/chunks/0cz1d0mv5g_q7.js","sha256":"0973c1d64c88adc8e3c950410cb58b288f72118d5965b78049438deb8f2f9683"},{"url":"/_next/static/chunks/0d1_bh131z1lq.js","sha256":"512a1c6d6fbaf8bfac9bfd1c856e44b8c5b765d8b532fadcc43c1d54c0d4b80c"},{"url":"/_next/static/chunks/0leefzyevhih3.js","sha256":"dca08826c9ca5e877ee7ded1ebccc9f31d48f7b4321ac4d1a948d0413fae01c7"},{"url":"/_next/static/chunks/11nyl8aqgarjv.js","sha256":"b8dba50ffa0c575bf39d39623906fb848c975f4d2d4b8ec6a6af31e692e2e3c0"},{"url":"/_next/static/chunks/1fkrtvg67ur2f.css","sha256":"4bc9ca741421f667093b04b9112fb8d873c76b09cf46ae4789b3427345bbabb8"},{"url":"/_next/static/chunks/1h34129wpsmru.js","sha256":"c7daf9b15b6ee5c9600b3ff2d03d29d659afcd5291ac9f7553081718f645a52e"},{"url":"/_next/static/chunks/1pcw6gskne7pf.js","sha256":"6dbc40a359da7b95b1b5d62b81884098dc2a8bc342bb4493b87712049f4fac08"},{"url":"/_next/static/chunks/1ua2kfq9s-me6.js","sha256":"890002b4e7ccf6ef3ddebcb8a0eab7953d11231160dbd71c67c8bf43ee237442"},{"url":"/_next/static/chunks/1zis-y-py1_6a.js","sha256":"e06524d99bfd27a37509e73e3b436d72d9afe9214aaf337c17c5350ffd6da842"},{"url":"/_next/static/chunks/2urr6-fm2smyv.js","sha256":"ee86b6e5631f8350cee1c67bc13f15a6b1c1da8b99c302533c5abe1da4130f78"},{"url":"/_next/static/chunks/3k7x2nwn3obos.js","sha256":"aad8730e97457fb54e33457f0a4a75e5e22a6d9baf9cabf4f336629377b0751a"},{"url":"/_next/static/chunks/3qsw1t9r5au36.js","sha256":"5abeb9e37420d31c792fd1a568677e7820bac8f5ba3e0d6b485beb78baeacaed"},{"url":"/_next/static/chunks/3vbxsm27fhfni.js","sha256":"1bf93e55531e8f3652f518bc312900977e7b2efb477db7dfc02d0fc58339e917"},{"url":"/_next/static/chunks/3yatlnhre_iww.js","sha256":"a52b93384af8548345da397c3fe48d2a2c0b0ed0de4eec10fdc67c823369e074"},{"url":"/_next/static/chunks/turbopack-077hmtqrhcoji.js","sha256":"3f0ba0c36a0758d76b55b6717fd77e65f46ae1295bb22fa441476e1eb7854d51"},{"url":"/_next/static/media/07c7676b89ed2778-s.p.2bn3s6zvc0dyp.woff2","sha256":"c940764593d0fe5d596be327ca7558855e018039fb78509aa21921fd3644c3e4"},{"url":"/_next/static/media/2fb76073e23fd9e4-s.3lvt2whj97whp.woff2","sha256":"a2e2c783ca6f9c20486e81e72a279203e86730bbf8f01ff6a5ee9dbd09e1c271"},{"url":"/_next/static/media/45462fd7b7c12654-s.0k62hbripvv8p.woff2","sha256":"8db00ff46c67b22cda8bed865acf7077651cac8d2841d5b40980556b48961931"},{"url":"/_next/static/media/46a9e2f250689b4a-s.0-dom-5bn10r2.woff2","sha256":"fccca918fea40089dacadc7045861314d1a6bc91f1f323cc1eeb22ebcdb321b5"},{"url":"/_next/static/media/6131cbbf5549afa2-s.2uwcyprjm3xu3.woff2","sha256":"46dd4cdca58c26ae87cc6927657bf83b2e8abfc39ffd0ab176e301a8d28d22bf"},{"url":"/_next/static/media/76b70a1dbe058eb5-s.1y4-pdgsjb-pw.woff2","sha256":"aebf2ab4a4ce6810d73c1ac7be7cafb4e5ec4cee2d6db5fb3e09691747ec4bd6"},{"url":"/_next/static/media/8bcddb47c8219945-s.1spbknb88wd48.woff2","sha256":"9e38b3f1575daba3435ef09d33a202585ed5bd204bd0a8c744955c750c2b9091"},{"url":"/_next/static/media/ba63f6a0e436df8e-s.3-6t-g6q0vh0a.woff2","sha256":"a28eb6d3ccb534ae0c94ca999371df024aab60b08c3c8a5720ee9e32fa0faaa2"},{"url":"/_next/static/media/c0680f1bdb3a2e90-s.p.1gsd1jahc5dg_.woff2","sha256":"92684e4acde79ef07758cd09380b7e01e9824d8b061eddeda046f78c166d7b12"},{"url":"/_next/static/media/favicon.27j75ylz52ixj.ico","sha256":"2da381d380a3e12401ce914fa6d7986cb3ebc078f72c73e249ce4183d7311197"},{"url":"/_not-found.html","sha256":"c552e8fff4fcd71f011e1629f244681a7af053bcfd8915168885cff8200b6c9a"},{"url":"/_not-found.txt","sha256":"fb64505b81af4aa3efe65a05f4695da012a8d0713e066a7e994ace1bf7ecba42"},{"url":"/_not-found/__next._full.txt","sha256":"fb64505b81af4aa3efe65a05f4695da012a8d0713e066a7e994ace1bf7ecba42"},{"url":"/_not-found/__next._not-found.__PAGE__.txt","sha256":"dd6e3d8bf440eeec7f4c9ba8ec00d83d42682f27f85d27c7a5315aadb5b81514"},{"url":"/_not-found/__next._tree.txt","sha256":"71a83630c76545a27b3c3bb0f583e1611a9556700096494d88219a2db5d399cb"},{"url":"/browserconfig.xml","sha256":"bd828f72f9a53651fcb04c15cf5046d9385dd7adb4f6ae15d67fd98d2ba161d5"},{"url":"/favicon.ico","sha256":"2da381d380a3e12401ce914fa6d7986cb3ebc078f72c73e249ce4183d7311197"},{"url":"/file.svg","sha256":"2b67812c325c199a02536cdbeea0c593a72f707d323b72ee3e08dbab06753bd4"},{"url":"/globe.svg","sha256":"b614b9bf183925957661ac851498fe1d8029fd43a62fbfed86f9e2624a57e7cf"},{"url":"/googleaf175b30968c86d2.html","sha256":"6488c84031b49be37936d2e18670521798dd25f0d04410303dae4ee17f8661fd"},{"url":"/images/meta/android-chrome-192x192.png","sha256":"33c6dd26cdca447c86a1b3b3bfb1858bb28a237ecfd8896b2a232e122d99ab4a"},{"url":"/images/meta/android-chrome-512x512.png","sha256":"a9e4a28bed28133d82453ef2c313ea8e57882386fd1100b896600258c7225a09"},{"url":"/images/meta/apple-touch-icon.png","sha256":"08a61a074d123b53573a2cf9bd8b3965a8988faf3de7a89d842f924c6dcd855f"},{"url":"/images/meta/favicon-16x16.png","sha256":"c17d798171d4044dec2db3cadb9a343424fc273a48c2d85f95c2ccf4221c6db2"},{"url":"/images/meta/favicon-32x32.png","sha256":"704bd11a1a3c856d9ee38fc381277df535ba6f890ad0b1f7552e0768b780b39f"},{"url":"/images/meta/mstile-150x150.png","sha256":"724497c31c94a7ea92e91b7eed279287ed142e3ff3155ba348366ddfbc78ae76"},{"url":"/images/meta/mstile-310x150.png","sha256":"724497c31c94a7ea92e91b7eed279287ed142e3ff3155ba348366ddfbc78ae76"},{"url":"/images/meta/mstile-310x310.png","sha256":"b1d82ae626eb24bf22213d7d0a30b685a470be64dd1d7b718cd25fc8728b5720"},{"url":"/images/meta/mstile-70x70.png","sha256":"8583b6774404c8c7b3f3e5d37af3cae9eb274e9f3c99113f769b3f2d2965b910"},{"url":"/images/meta/og-image.jpg","sha256":"86e14d614f11f73612483fe6922bc6f3515e98643ed5aff6e845a3fa50c0af98"},{"url":"/images/profile/profile.webp","sha256":"5656ef383704139a6aa9bb59cf8cb1831a46c195dde5524358b52bd21e2a4c8d"},{"url":"/images/projects/gpt-shell-4o-mini/1.webp","sha256":"3363fea38fb79bc49c0e1272292faa7a81fba151d27239777249369a45f3f463"},{"url":"/images/projects/gpt-shell-4o-mini/2.webp","sha256":"b0a96edf2b4e5b68c044ef6c4472fcb76723619a9fd9cc0ff78379d24260e11f"},{"url":"/images/projects/gpt-shell-4o-mini/3.webp","sha256":"19fd3d660483cd85b2c5b83b2065aed183ab5944f2e6c9c8097580a0e91e7a57"},{"url":"/images/projects/gpt-shell-4o-mini/4.webp","sha256":"94c533faf328491e71fb3b802e282a2fd5978821dea4c52857b7d23b4a4f41cd"},{"url":"/images/projects/irs-calculator/1.webp","sha256":"6f181f962ddb14c5b4d7bc3eb47318dcf6b38307573c5fde5922b44fc83da6cc"},{"url":"/images/projects/irs-calculator/2.webp","sha256":"37a9359de4bf553a94f948a5ef73b6bf50687873268270e5f22307013dc64690"},{"url":"/images/projects/irs-calculator/3.webp","sha256":"0004513976a6c488ca3746ba5a3ba73fea901b20a6685fc60fc30491d87ce852"},{"url":"/images/projects/korean-class/1.webp","sha256":"89877ebdc166b0afcdae70e66854847de9e51573f257a298d286eb65a40f9467"},{"url":"/images/projects/korean-class/2.webp","sha256":"c21bb4d7e8b3e5b716226e0e8942f7fc818531a6fea4b8f610726fea29d3243a"},{"url":"/images/projects/korean-class/3.webp","sha256":"83c28d190a6415be652a036d2b5977691a89256cba61e13f4ffbc9a72ddde606"},{"url":"/images/projects/korean-class/4.webp","sha256":"6c9a09ae1f8c3d11eb8ab9ca716e02cab7129323056ea0c18fc412d0bbb2f375"},{"url":"/images/projects/korean-class/5.webp","sha256":"e3101bd0a6cb6825d04785a10cc636045f056e0312f03be1f2d8c5476d67c76b"},{"url":"/images/projects/korean-class/6.webp","sha256":"7df6e2cf4a8638690436b499f4664e03ca727e8e1cdc49d005c03b8286d9fa96"},{"url":"/images/projects/sg-life/1.webp","sha256":"a866df59cb7a9c0baebbf0dcb24e754d1891f8f66d8c96e9cddc8d6e0192d04f"},{"url":"/images/projects/sg-life/2.webp","sha256":"9a6ebac2d355bf69702f0cef63b50671bddf9efef84b3c37830d9fbc7cc3dc39"},{"url":"/images/projects/sg-life/3.webp","sha256":"2e8f3a7604bcdb27015127a180e5e4ccab63465e52d5e5da4337c6c6b4c86d9b"},{"url":"/images/projects/sg-life/4.webp","sha256":"b06aad28a55558819f1b338e0d45383831db31591c341ab735a839f280a4c7af"},{"url":"/images/projects/wkdkavishka-vue/1.webp","sha256":"910af30a3d732b56f5f1914499baab91e20c2ce52c282d5d1f581775c02e1090"},{"url":"/images/projects/wkdkavishka-vue/2.webp","sha256":"2d3829223ac0896f0f24f9ae97df651a0e3a484a24b419ff3eb0399ef7ce144f"},{"url":"/images/projects/wkdkavishka-vue/3.webp","sha256":"491634244815f3f1056ee1c41bed2a6ac1658d5ed90b936629846fecdb3d4e29"},{"url":"/images/projects/wkdkavishka-vue/4.webp","sha256":"c78ae593672b112a2c87bc55f333155f58a252b7b0c76a3d556ce961ae961aca"},{"url":"/images/pwa/desktop-1.png","sha256":"7402695d8145dc2ab71d6471e6fb523eed5424cdd0313094c267b5fa2ec90793"},{"url":"/images/pwa/desktop-2.png","sha256":"86f9cfb76d3d2f51c75223436c26089fdaa4fb4cdc24e8e5203a9ae2e1925ec4"},{"url":"/images/pwa/desktop-3.png","sha256":"31a753d4700c0ff89edb7a7701c1e521246c6cba04b5466ab4b4cfe624decdcd"},{"url":"/images/pwa/desktop-4.png","sha256":"beb512e5813f1a203a5754d9e23fb4f5c1d35858b1e0530953d132adde379ad5"},{"url":"/images/pwa/mobile-1.png","sha256":"5cc80723b5dc7ad96b432d154289972e83d3368c95a4865b439f2a929480addd"},{"url":"/images/pwa/mobile-2.png","sha256":"ade270c0cb58ed095f41c40f3d52cc9f6e85cbe2607bd15438380f35bfd9d8d9"},{"url":"/images/pwa/mobile-3.png","sha256":"aea420cf2c98014d620303619d1585fcf7f9a7df6ba659b59b5aca94a652c148"},{"url":"/images/team/member-1.webp","sha256":"3b7b7f815974cc95f748416d0447d653473c69582131a9a9e34d20682e0d5759"},{"url":"/images/team/member-2.webp","sha256":"3b7b7f815974cc95f748416d0447d653473c69582131a9a9e34d20682e0d5759"},{"url":"/images/team/member-3.webp","sha256":"3b7b7f815974cc95f748416d0447d653473c69582131a9a9e34d20682e0d5759"},{"url":"/images/team/member-4.webp","sha256":"3b7b7f815974cc95f748416d0447d653473c69582131a9a9e34d20682e0d5759"},{"url":"/index.html","sha256":"390b1708aeaa101630f97d702adedaca9ca1811ea4d54d541c57aaee1721f34b"},{"url":"/index.txt","sha256":"9bc2dd4efff2592f0139cc2e6c2328649f291f0b6a0604f32c6aadb33ad38193"},{"url":"/manifest.webmanifest","sha256":"cb3147df0fa398f3f0dd780d50888d81ecc1856bf7d5951c2f1c61403b237a61"},{"url":"/next.svg","sha256":"55995dfad6ecb4945a1e856ddca03c5e16aa5bf13fd21b4df6a74ae79357bcfc"},{"url":"/offline.html","sha256":"9c752f61214e07f7b901e2896ce75afafa2c9933ff03c27410e8112d25a7cd0b"},{"url":"/og/android-kiosk-device-owner.png","sha256":"a34970bf8ff51c9f82721d9882b6557a659debc68f4b31225853fcaf7c1c6e14"},{"url":"/og/chrome-tab-extensions.png","sha256":"fad36895a81119487dcdacff08ae501d578c28a14dfc97750eb7827c04dca426"},{"url":"/og/field-service-gps-tracking-app.png","sha256":"92be3d43e65163b3b97c9e0a87df987ce66659c3f4a5dff0ce557919f4a10a27"},{"url":"/og/gpt-shell-4o-mini.png","sha256":"199d5e13b317420ad06c63984a34096b1c05c20e3341f96682b57dc141e6beac"},{"url":"/og/home.png","sha256":"a32f5c8e9fe5d2287bf894aaa9b31db92cb3bd701531549f4a162cbc04367a12"},{"url":"/og/inventory-management-system.png","sha256":"defb87e1f6c69e394dfe0c41b1658743a873663447452c58e57c0077d078a559"},{"url":"/og/irs-self-assessment.png","sha256":"9dedbd52804f1436cdcc79bb1463b09ec69bc5846a5d017e8cb6cc801743612e"},{"url":"/og/korean-class.png","sha256":"334086a94ca9c1c477d6c0915878dad96df2a937f734772dee260518e63404b3"},{"url":"/og/linux-desktop-tools.png","sha256":"1a3709acb573448b82ef1e8c7d891a08a111e9c29d08c907a9f205d452af65a3"},{"url":"/og/payment-terminal-launcher.png","sha256":"1f75ffe6f523de0bff52012e76be4d8cfc246be6bcd78f1693022e5bff2c358f"},{"url":"/og/sg-life.png","sha256":"e452fe4000dfb39a41dda0efbc92df181a0da3facf6044da3efbca42f21edcc6"},{"url":"/portfolio.pdf","sha256":"95b565bb04d780322064048a72f4225db4dbeb4b8847fbfed7e400e71d8a11fc"},{"url":"/projects/android-kiosk-device-owner.html","sha256":"7f477390337c8ca06ac8029db585ddd1610bc3ffb239a41c7919f9f023ef7296"},{"url":"/projects/android-kiosk-device-owner.txt","sha256":"e4060ffc15932b615411aa89ad40a47480f4292a7688366d1a3ebd1998ae8111"},{"url":"/projects/android-kiosk-device-owner/__next._full.txt","sha256":"e4060ffc15932b615411aa89ad40a47480f4292a7688366d1a3ebd1998ae8111"},{"url":"/projects/android-kiosk-device-owner/__next._tree.txt","sha256":"687b41ffa8e9cb1c2a7a1728939496a1a32a9f7c1c47cffa24e18e1b63113ce7"},{"url":"/projects/android-kiosk-device-owner/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"ce599bf402b5874c543f9a73dd03abfd4141f3ed507f847e441384a5796eee1f"},{"url":"/projects/chrome-tab-extensions.html","sha256":"c58292cfcef68944941392ddcfe908eeab73ef9cc4ea5310620d17445ee2f485"},{"url":"/projects/chrome-tab-extensions.txt","sha256":"4942c6ad1e361b3d2d56108d68945f04b4d931b64c76600a643bb2d3744b8d55"},{"url":"/projects/chrome-tab-extensions/__next._full.txt","sha256":"4942c6ad1e361b3d2d56108d68945f04b4d931b64c76600a643bb2d3744b8d55"},{"url":"/projects/chrome-tab-extensions/__next._tree.txt","sha256":"dcab18767f1a32241891e1ef4b2f63dd0b5590bbbc62d621e5b519c12586096c"},{"url":"/projects/chrome-tab-extensions/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"57b2c7e056d5ad32a35f195867e414d262cd02e2309d400038947aaabad240f6"},{"url":"/projects/field-service-gps-tracking-app.html","sha256":"13a0cf1e78541345e06b038c4e5fbea7b65313f7117e6f5a1ff937642b5ea39d"},{"url":"/projects/field-service-gps-tracking-app.txt","sha256":"5c26fdfd3dd2a2664f1648a002db02be4f7e9f5820cb28cafcb6d1eaa9676ed1"},{"url":"/projects/field-service-gps-tracking-app/__next._full.txt","sha256":"5c26fdfd3dd2a2664f1648a002db02be4f7e9f5820cb28cafcb6d1eaa9676ed1"},{"url":"/projects/field-service-gps-tracking-app/__next._tree.txt","sha256":"bd40aafd6812fc022c27eb009278c034f45788baddb04bc778845d3b1397dbc5"},{"url":"/projects/field-service-gps-tracking-app/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"6c8045b77a7587d38f4c2e50c1a8c6a02f1595daef86195b4fd29ac057b27677"},{"url":"/projects/gpt-shell-4o-mini.html","sha256":"94489d4582fd62202547f948bd7ec3f22bb58b0606971d053b7bc331aa041751"},{"url":"/projects/gpt-shell-4o-mini.txt","sha256":"16d2d901b4acc9d5aadcad6f9ae66032febbc32448c3f3fd1bade06f850f1d58"},{"url":"/projects/gpt-shell-4o-mini/__next._full.txt","sha256":"16d2d901b4acc9d5aadcad6f9ae66032febbc32448c3f3fd1bade06f850f1d58"},{"url":"/projects/gpt-shell-4o-mini/__next._tree.txt","sha256":"0f9c009b4f282623a7dd8ec09e366abfe50f8dd53399af9cd118eb810ff5cc28"},{"url":"/projects/gpt-shell-4o-mini/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"d8b72206a06b08da6a698ba355a3179cb6e90767cc7d6e2c114286420fcb302e"},{"url":"/projects/inventory-management-system.html","sha256":"a23f28f343359ff935047a8fafd777e0f5a07359d3204e7d370d82104c6ce364"},{"url":"/projects/inventory-management-system.txt","sha256":"b56e884e8b42b2cf52dd47a179f682e4cc8cb872ffd6fc3bff0340f14622bbb4"},{"url":"/projects/inventory-management-system/__next._full.txt","sha256":"b56e884e8b42b2cf52dd47a179f682e4cc8cb872ffd6fc3bff0340f14622bbb4"},{"url":"/projects/inventory-management-system/__next._tree.txt","sha256":"7e2e4525642c82441f08e0a9260052b8b8b6e5949a1f5644221829549529e6d4"},{"url":"/projects/inventory-management-system/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"4a7e75af8b92bbc5b343730cbfd691b68281f1eafe88d12f1a8055042503f185"},{"url":"/projects/irs-self-assessment.html","sha256":"9bd1c4db6da96d3a8411611bd669b51b6185e06ab99945c8c653afd46dc6bd77"},{"url":"/projects/irs-self-assessment.txt","sha256":"e5cf8e1542e01e0fe478c5fca4c208a90da2c99fd2fea0ce616f69322cc8b65e"},{"url":"/projects/irs-self-assessment/__next._full.txt","sha256":"e5cf8e1542e01e0fe478c5fca4c208a90da2c99fd2fea0ce616f69322cc8b65e"},{"url":"/projects/irs-self-assessment/__next._tree.txt","sha256":"014886dc993c8d6c27549813d0ff97c78fa4efab7ddd0812753626819ecd4edb"},{"url":"/projects/irs-self-assessment/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"0243c73dcb2b0134a42061af1cb1a8b254c5581f0597e1483b465e32a9cd975d"},{"url":"/projects/korean-class.html","sha256":"00f76f25255d9c0839d9b7e99c4c6dadcaa5f7645a6cab2f72286c6136c1fe60"},{"url":"/projects/korean-class.txt","sha256":"ef45c234c36a8f96a76e01116be05a90c786098bc6be82f92a1a15a552631b6a"},{"url":"/projects/korean-class/__next._full.txt","sha256":"ef45c234c36a8f96a76e01116be05a90c786098bc6be82f92a1a15a552631b6a"},{"url":"/projects/korean-class/__next._tree.txt","sha256":"ed33be4721afec9542506486c2864e99f0a429189a672e5b58ac23e6d9b497ba"},{"url":"/projects/korean-class/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"084dfdff8acb14baa84d57f39ac5fa325e90bf8127fd7643895809db684f3f8b"},{"url":"/projects/linux-desktop-tools.html","sha256":"ed67895423c0c514d7ae551cd1dc8666bdeef0ff94e63028bcdcc6f5fd961529"},{"url":"/projects/linux-desktop-tools.txt","sha256":"e2030176b187bbdd7b22c8c526b2aad5a1f2ecabbde2c235723f7e11b2722ed4"},{"url":"/projects/linux-desktop-tools/__next._full.txt","sha256":"e2030176b187bbdd7b22c8c526b2aad5a1f2ecabbde2c235723f7e11b2722ed4"},{"url":"/projects/linux-desktop-tools/__next._tree.txt","sha256":"ab5fa33f9ee71d8f12ed2e3a25bf35925d6bb8641dd903013454eb7262692887"},{"url":"/projects/linux-desktop-tools/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"2961d8175091832ef80d0310d1c5c568b80a6a655774b1bfe09ff536a44d35c6"},{"url":"/projects/payment-terminal-launcher.html","sha256":"ab4e1481603d7e2124c886736c4e63e4238497fae3eb04a8a06807fb819f2657"},{"url":"/projects/payment-terminal-launcher.txt","sha256":"06da86fdc2517c2765f10e67bf4c9bc00a9fc02226405c4d3fc0e639490c96f4"},{"url":"/projects/payment-terminal-launcher/__next._full.txt","sha256":"06da86fdc2517c2765f10e67bf4c9bc00a9fc02226405c4d3fc0e639490c96f4"},{"url":"/projects/payment-terminal-launcher/__next._tree.txt","sha256":"8091ac93bacd6d0cb6715bbdf4b96875fd2fcfcb5c6c0d72d91c3595b7268fee"},{"url":"/projects/payment-terminal-launcher/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"c2ff6c6082a1e0596b8b089f82db9cbfd2407753c4d4c912d94c9ad609af2b91"},{"url":"/projects/sg-life.html","sha256":"fb8a0c4185bbc903a8e08461c6411c1721ed2db3839f5065d7b75daa908fde31"},{"url":"/projects/sg-life.txt","sha256":"23f3d7dfcac0cc48568a36a0579d948f83569efca9a82a5ed3306ef8d5654ade"},{"url":"/projects/sg-life/__next._full.txt","sha256":"23f3d7dfcac0cc48568a36a0579d948f83569efca9a82a5ed3306ef8d5654ade"},{"url":"/projects/sg-life/__next._tree.txt","sha256":"571de795c2da0bd1b1e79acba6ced0c8da62b4e1be66c5b96c8fb22a7e63e4bb"},{"url":"/projects/sg-life/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"97d2428e4c427bcbdbd593c488dd5e22bc650d8760154bee4910500648db0914"},{"url":"/pwa-worker.js","sha256":"3195030b9442fcf016cdfd0111acd49dc6733baca49941e917b03ff25452c150"},{"url":"/robots.txt","sha256":"c65f117307eee6d6c04968c5e8e2336baf7552e43d5cdd9a3f898d3944aa6aac"},{"url":"/sitemap.xml","sha256":"5e4ee9e8dba8e7f8a4230ce4361defc2741e3f248b6c23b720c55262c6a5950a"},{"url":"/vercel.svg","sha256":"f081337b2fee635b455b63275406a3e7f39d6a014e25ad90dab5a67e62a12ac4"},{"url":"/window.svg","sha256":"644768c4aaeb4767bce293344eeb0c125fb804a94d801440424072202d85e3a1"}];
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
