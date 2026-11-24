// Shared engine: preparePwaExport() fills out/sw.js; pwa-worker.js freezes the
// Next build version. Keep these declarations on one line for both preparers.
const CACHE_NAME = "wkdkavishka-pwa-v1-d22475fcb3551ce6bb209127";
const PRECACHE_ASSETS = [{"url":"/404.html","sha256":"cd0d00a8ccda2c54a9495c589b5f8ba86e1822ebb549154d4ffa43897b9995a7"},{"url":"/BingSiteAuth.xml","sha256":"32579827e9d2b93e0a21b9a8cbac07d3478589b220b9ec8dcb460762bd65c48a"},{"url":"/__next.__PAGE__.txt","sha256":"103a648c630e14004b40c865dcfdfb9f351bab85e71a30f5bc45b0eb62b74c9c"},{"url":"/__next._full.txt","sha256":"e5a9ed384d7725a19ebc1f20f7b08167d63a48c1c99689f698711e08ddb0bc26"},{"url":"/__next._tree.txt","sha256":"ed1fff3f1ccb2c39c7fc3b115bc20c76687b2f060fe3ba7e49cf35791644b632"},{"url":"/_next/static/4A8BJdW66Rh7UqEBl3eHM/_buildManifest.js","sha256":"9476e0afd3f9da68a64e6ec58631191fd3eaca62c9f5a377e7517fe9a89e59ea"},{"url":"/_next/static/4A8BJdW66Rh7UqEBl3eHM/_clientMiddlewareManifest.js","sha256":"5483e3295dc35dfe29ea932efc85341c916f10ff78ff5b0e965e003710893a4a"},{"url":"/_next/static/4A8BJdW66Rh7UqEBl3eHM/_ssgManifest.js","sha256":"92e9502f1d993d2f48296b2dc2cdbd69d9e297c8c8404a1d6d16fa509d1108c4"},{"url":"/_next/static/chunks/08wgqmxhou74a.js","sha256":"e802a270d5874edcacc4ad34a07432bf7fb177c0a15ff4438bc0e31794321c21"},{"url":"/_next/static/chunks/092r-mewpaf3q.js","sha256":"30b1a7afdc2b4c18dbed0c12b4cbb9ca6e3b1b048440715e434664cb534d6f11"},{"url":"/_next/static/chunks/0cxxg-rwo9oxg.js","sha256":"21f09496c1e652d8f6aefa5c047124e6a58512657d5f684811d86a339454845f"},{"url":"/_next/static/chunks/0cz1d0mv5g_q7.js","sha256":"0973c1d64c88adc8e3c950410cb58b288f72118d5965b78049438deb8f2f9683"},{"url":"/_next/static/chunks/0d0chqxw6vyty.css","sha256":"97fc6388cb8fc23d9579fe770da824bc87a9841c35b2d2109243c0b70808ae95"},{"url":"/_next/static/chunks/0leefzyevhih3.js","sha256":"dca08826c9ca5e877ee7ded1ebccc9f31d48f7b4321ac4d1a948d0413fae01c7"},{"url":"/_next/static/chunks/18teplb2ke1x2.js","sha256":"62af5b401e5d390769b63603b43bd03b683823f2d8fe62c4887e8ab4001e96c0"},{"url":"/_next/static/chunks/19ilz3_2aj1tl.js","sha256":"c3d27962abf9a0ed2c2e2425b9ff48b061be2f670851c1f0094ec8c45ccb2b79"},{"url":"/_next/static/chunks/1pcw6gskne7pf.js","sha256":"6dbc40a359da7b95b1b5d62b81884098dc2a8bc342bb4493b87712049f4fac08"},{"url":"/_next/static/chunks/1ua2kfq9s-me6.js","sha256":"890002b4e7ccf6ef3ddebcb8a0eab7953d11231160dbd71c67c8bf43ee237442"},{"url":"/_next/static/chunks/1zis-y-py1_6a.js","sha256":"e06524d99bfd27a37509e73e3b436d72d9afe9214aaf337c17c5350ffd6da842"},{"url":"/_next/static/chunks/2urr6-fm2smyv.js","sha256":"ee86b6e5631f8350cee1c67bc13f15a6b1c1da8b99c302533c5abe1da4130f78"},{"url":"/_next/static/chunks/3b1t1hdb6cmf7.js","sha256":"0462674ff7bd39a47cb0b69d99d8ed66eff99d7e23455b156155cf2afbb4680e"},{"url":"/_next/static/chunks/3k7x2nwn3obos.js","sha256":"aad8730e97457fb54e33457f0a4a75e5e22a6d9baf9cabf4f336629377b0751a"},{"url":"/_next/static/chunks/3mm2j4ui3pef3.js","sha256":"afb13c335851e390a785d90df82982a8d3171d8e9075ccabc5f6eca8207d92ab"},{"url":"/_next/static/chunks/3qsw1t9r5au36.js","sha256":"5abeb9e37420d31c792fd1a568677e7820bac8f5ba3e0d6b485beb78baeacaed"},{"url":"/_next/static/chunks/turbopack-077hmtqrhcoji.js","sha256":"3f0ba0c36a0758d76b55b6717fd77e65f46ae1295bb22fa441476e1eb7854d51"},{"url":"/_next/static/media/07c7676b89ed2778-s.p.2bn3s6zvc0dyp.woff2","sha256":"c940764593d0fe5d596be327ca7558855e018039fb78509aa21921fd3644c3e4"},{"url":"/_next/static/media/2fb76073e23fd9e4-s.3lvt2whj97whp.woff2","sha256":"a2e2c783ca6f9c20486e81e72a279203e86730bbf8f01ff6a5ee9dbd09e1c271"},{"url":"/_next/static/media/45462fd7b7c12654-s.0k62hbripvv8p.woff2","sha256":"8db00ff46c67b22cda8bed865acf7077651cac8d2841d5b40980556b48961931"},{"url":"/_next/static/media/46a9e2f250689b4a-s.0-dom-5bn10r2.woff2","sha256":"fccca918fea40089dacadc7045861314d1a6bc91f1f323cc1eeb22ebcdb321b5"},{"url":"/_next/static/media/6131cbbf5549afa2-s.2uwcyprjm3xu3.woff2","sha256":"46dd4cdca58c26ae87cc6927657bf83b2e8abfc39ffd0ab176e301a8d28d22bf"},{"url":"/_next/static/media/76b70a1dbe058eb5-s.1y4-pdgsjb-pw.woff2","sha256":"aebf2ab4a4ce6810d73c1ac7be7cafb4e5ec4cee2d6db5fb3e09691747ec4bd6"},{"url":"/_next/static/media/8bcddb47c8219945-s.1spbknb88wd48.woff2","sha256":"9e38b3f1575daba3435ef09d33a202585ed5bd204bd0a8c744955c750c2b9091"},{"url":"/_next/static/media/ba63f6a0e436df8e-s.3-6t-g6q0vh0a.woff2","sha256":"a28eb6d3ccb534ae0c94ca999371df024aab60b08c3c8a5720ee9e32fa0faaa2"},{"url":"/_next/static/media/c0680f1bdb3a2e90-s.p.1gsd1jahc5dg_.woff2","sha256":"92684e4acde79ef07758cd09380b7e01e9824d8b061eddeda046f78c166d7b12"},{"url":"/_next/static/media/favicon.2fcpk4-xg61hj.ico","sha256":"4bdb962c57df903dbeb54894e24d67a9274ffc144685a6df6ee3eb02395676f3"},{"url":"/_not-found.html","sha256":"cd0d00a8ccda2c54a9495c589b5f8ba86e1822ebb549154d4ffa43897b9995a7"},{"url":"/_not-found.txt","sha256":"d9b04e27e74e2e2d744709a3a00078e3a9726d393558d010d7251a8480e13dff"},{"url":"/_not-found/__next._full.txt","sha256":"d9b04e27e74e2e2d744709a3a00078e3a9726d393558d010d7251a8480e13dff"},{"url":"/_not-found/__next._not-found.__PAGE__.txt","sha256":"e09d6da84c1dd458c9706284a93f937bdcc2c58dd19ba52fa1aea97dba9d0147"},{"url":"/_not-found/__next._tree.txt","sha256":"f69d188c295fe698dbca5cf09313e3cade46417bc475667916068e382a6b41a7"},{"url":"/browserconfig.xml","sha256":"bd828f72f9a53651fcb04c15cf5046d9385dd7adb4f6ae15d67fd98d2ba161d5"},{"url":"/favicon.ico","sha256":"4bdb962c57df903dbeb54894e24d67a9274ffc144685a6df6ee3eb02395676f3"},{"url":"/file.svg","sha256":"2b67812c325c199a02536cdbeea0c593a72f707d323b72ee3e08dbab06753bd4"},{"url":"/globe.svg","sha256":"b614b9bf183925957661ac851498fe1d8029fd43a62fbfed86f9e2624a57e7cf"},{"url":"/googleaf175b30968c86d2.html","sha256":"6488c84031b49be37936d2e18670521798dd25f0d04410303dae4ee17f8661fd"},{"url":"/images/meta/android-chrome-192x192.png","sha256":"1ffa5b65cac51876269baba560731230b2352777fbcc24e6d012e24fe7cd5beb"},{"url":"/images/meta/android-chrome-512x512.png","sha256":"c0ea013e9c7e75384552b94824d4626dab8102a8a2337f4800e9e5c07cdf9432"},{"url":"/images/meta/apple-touch-icon.png","sha256":"8df87612a1a6fffadffa88fbb386b4f1530b969c509b137a85e3056fd1ca84da"},{"url":"/images/meta/favicon-16x16.png","sha256":"b6d75de845448431e406e129087801177c96d2fc35edcff7498b77b811d77d2d"},{"url":"/images/meta/favicon-32x32.png","sha256":"0974d1129ac0f6b4a53d82692ce60a079af1eb6948c7f0f5c9bcd158d3c50e77"},{"url":"/images/meta/mstile-150x150.png","sha256":"d97827a279f2af6ffdbccda943b04f19355a85ebea0eff44820118df6a7faa6d"},{"url":"/images/meta/mstile-310x150.png","sha256":"e96f5caa9f0b00c11965b467e2cfdc0e2791bf71212dccb7baeec64ac7cfd436"},{"url":"/images/meta/mstile-310x310.png","sha256":"e2c4b1a36000ba09cd73e408fe5afe11f7c3a1e90d9835e8f86ee1423ef2b55c"},{"url":"/images/meta/mstile-70x70.png","sha256":"ee951c99397baec5513df07b41ae1acf7811c886f9b327dcd8b9a032bfcbc58f"},{"url":"/images/meta/og-image.jpg","sha256":"adcd039b0a7f2b0053b3ddcb088a1fdbd8965620cbe3f00a372ccaa8a9dac93c"},{"url":"/images/profile/profile.webp","sha256":"8c929b9934fb9c0a5cc3f109e1508c7bb9200fcd504efe2f4d443aa2cc50f087"},{"url":"/images/projects/gpt-shell-4o-mini/1.webp","sha256":"3363fea38fb79bc49c0e1272292faa7a81fba151d27239777249369a45f3f463"},{"url":"/images/projects/gpt-shell-4o-mini/2.webp","sha256":"b0a96edf2b4e5b68c044ef6c4472fcb76723619a9fd9cc0ff78379d24260e11f"},{"url":"/images/projects/gpt-shell-4o-mini/3.webp","sha256":"19fd3d660483cd85b2c5b83b2065aed183ab5944f2e6c9c8097580a0e91e7a57"},{"url":"/images/projects/gpt-shell-4o-mini/4.webp","sha256":"94c533faf328491e71fb3b802e282a2fd5978821dea4c52857b7d23b4a4f41cd"},{"url":"/images/projects/irs-calculator/1.webp","sha256":"6f181f962ddb14c5b4d7bc3eb47318dcf6b38307573c5fde5922b44fc83da6cc"},{"url":"/images/projects/irs-calculator/2.webp","sha256":"37a9359de4bf553a94f948a5ef73b6bf50687873268270e5f22307013dc64690"},{"url":"/images/projects/irs-calculator/3.webp","sha256":"0004513976a6c488ca3746ba5a3ba73fea901b20a6685fc60fc30491d87ce852"},{"url":"/images/projects/korean-class/1.webp","sha256":"89877ebdc166b0afcdae70e66854847de9e51573f257a298d286eb65a40f9467"},{"url":"/images/projects/korean-class/2.webp","sha256":"c21bb4d7e8b3e5b716226e0e8942f7fc818531a6fea4b8f610726fea29d3243a"},{"url":"/images/projects/korean-class/3.webp","sha256":"83c28d190a6415be652a036d2b5977691a89256cba61e13f4ffbc9a72ddde606"},{"url":"/images/projects/korean-class/4.webp","sha256":"6c9a09ae1f8c3d11eb8ab9ca716e02cab7129323056ea0c18fc412d0bbb2f375"},{"url":"/images/projects/korean-class/5.webp","sha256":"e3101bd0a6cb6825d04785a10cc636045f056e0312f03be1f2d8c5476d67c76b"},{"url":"/images/projects/korean-class/6.webp","sha256":"7df6e2cf4a8638690436b499f4664e03ca727e8e1cdc49d005c03b8286d9fa96"},{"url":"/images/projects/sg-life/1.webp","sha256":"a866df59cb7a9c0baebbf0dcb24e754d1891f8f66d8c96e9cddc8d6e0192d04f"},{"url":"/images/projects/sg-life/2.webp","sha256":"9a6ebac2d355bf69702f0cef63b50671bddf9efef84b3c37830d9fbc7cc3dc39"},{"url":"/images/projects/sg-life/3.webp","sha256":"2e8f3a7604bcdb27015127a180e5e4ccab63465e52d5e5da4337c6c6b4c86d9b"},{"url":"/images/projects/sg-life/4.webp","sha256":"b06aad28a55558819f1b338e0d45383831db31591c341ab735a839f280a4c7af"},{"url":"/images/projects/wkdkavishka-vue/1.webp","sha256":"910af30a3d732b56f5f1914499baab91e20c2ce52c282d5d1f581775c02e1090"},{"url":"/images/projects/wkdkavishka-vue/2.webp","sha256":"2d3829223ac0896f0f24f9ae97df651a0e3a484a24b419ff3eb0399ef7ce144f"},{"url":"/images/projects/wkdkavishka-vue/3.webp","sha256":"491634244815f3f1056ee1c41bed2a6ac1658d5ed90b936629846fecdb3d4e29"},{"url":"/images/projects/wkdkavishka-vue/4.webp","sha256":"c78ae593672b112a2c87bc55f333155f58a252b7b0c76a3d556ce961ae961aca"},{"url":"/images/pwa/desktop-1.png","sha256":"b458e602d280becaae75f63f6695e48a405bfc86c5082f5cb0e2e2243c365664"},{"url":"/images/pwa/desktop-2.png","sha256":"86f9cfb76d3d2f51c75223436c26089fdaa4fb4cdc24e8e5203a9ae2e1925ec4"},{"url":"/images/pwa/desktop-3.png","sha256":"31a753d4700c0ff89edb7a7701c1e521246c6cba04b5466ab4b4cfe624decdcd"},{"url":"/images/pwa/desktop-4.png","sha256":"beb512e5813f1a203a5754d9e23fb4f5c1d35858b1e0530953d132adde379ad5"},{"url":"/images/pwa/mobile-1.png","sha256":"46acd433df8d83cead5fdfeb11e008e132197a059410fd3a69ac0cfe74a533bf"},{"url":"/images/pwa/mobile-2.png","sha256":"ade270c0cb58ed095f41c40f3d52cc9f6e85cbe2607bd15438380f35bfd9d8d9"},{"url":"/images/pwa/mobile-3.png","sha256":"aea420cf2c98014d620303619d1585fcf7f9a7df6ba659b59b5aca94a652c148"},{"url":"/images/team/member-1.webp","sha256":"3b7b7f815974cc95f748416d0447d653473c69582131a9a9e34d20682e0d5759"},{"url":"/images/team/member-2.webp","sha256":"3b7b7f815974cc95f748416d0447d653473c69582131a9a9e34d20682e0d5759"},{"url":"/images/team/member-3.webp","sha256":"3b7b7f815974cc95f748416d0447d653473c69582131a9a9e34d20682e0d5759"},{"url":"/images/team/member-4.webp","sha256":"3b7b7f815974cc95f748416d0447d653473c69582131a9a9e34d20682e0d5759"},{"url":"/index.html","sha256":"f6a24f84a3764198222bfa63592122aec209605fb706bfd940fec97eef010e81"},{"url":"/index.txt","sha256":"e5a9ed384d7725a19ebc1f20f7b08167d63a48c1c99689f698711e08ddb0bc26"},{"url":"/manifest.webmanifest","sha256":"160f84f3014039ac6af32208e5a166f547eac835c8502d752694dac5a2e0c54e"},{"url":"/next.svg","sha256":"55995dfad6ecb4945a1e856ddca03c5e16aa5bf13fd21b4df6a74ae79357bcfc"},{"url":"/offline.html","sha256":"308ad73b0cd072bd216cd49c35c3204305a02b021e603ad3d43de2d5233fca90"},{"url":"/og/android-kiosk-device-owner.png","sha256":"c71dece3619fa4c044f8078ad955900596989b6f9eaa17e29616f273f5077cd8"},{"url":"/og/chrome-tab-extensions.png","sha256":"b75e3ee124d7c060b9fe4c58b8fbf63cfaa8cab581a1f5dda849f0b1709785f0"},{"url":"/og/field-service-gps-tracking-app.png","sha256":"6b0f70ee4342d938138062502131894d9e4162e5606a1d0f464cbe23d373e448"},{"url":"/og/gpt-shell-4o-mini.png","sha256":"237a127bb7eb9ff7f1f6589b6d29afcd3b94abb8b487e1e59bf5e58b58e84740"},{"url":"/og/home.png","sha256":"b0d134357121c770f5889964422b3fe8774d276b8089eb86432252ea476e4efa"},{"url":"/og/inventory-management-system.png","sha256":"ec3b2c4d3f87eee0df7b20dd73521df68b87ae3ee7f6238e3a289ae1924d17c2"},{"url":"/og/irs-self-assessment.png","sha256":"e20b62526d4b4e314434c61a45568c1184ed2e6b72b36ef6015441ef8471196a"},{"url":"/og/korean-class.png","sha256":"6a61e37f2416d638901da34b79a391a05c6934a56f5649cce82e57aa18ee68ac"},{"url":"/og/linux-desktop-tools.png","sha256":"7caa97926a36db5b34bbfda5680c72c45616b58a677be71180fc6d9902456cb3"},{"url":"/og/payment-terminal-launcher.png","sha256":"cc6e33357d4590731b4b62e4ea2ca836c16593f4f2e0af08aa46f1095937d61b"},{"url":"/og/sg-life.png","sha256":"9334c40be54bb15f31e0544ac42419d53396d9a65390d0d33a7b7b30e931e1a2"},{"url":"/portfolio.pdf","sha256":"2134f1b5b5bde9498614fa3504aaa7296b1d4f7e3d716c602da56a9ac432c4e4"},{"url":"/projects/android-kiosk-device-owner.html","sha256":"70958d80c83dcc58614f6946dd11698fff1702c9ad96457118cdb8a50c0a83dc"},{"url":"/projects/android-kiosk-device-owner.txt","sha256":"8b869ee40a919d495db0c04c862218af83b09b2d366da94b3a6bc8b10b30da89"},{"url":"/projects/android-kiosk-device-owner/__next._full.txt","sha256":"8b869ee40a919d495db0c04c862218af83b09b2d366da94b3a6bc8b10b30da89"},{"url":"/projects/android-kiosk-device-owner/__next._tree.txt","sha256":"d57a4e20e0890241610c283ce5909d15958b6176b268acb8ca28bde8fdf958e2"},{"url":"/projects/android-kiosk-device-owner/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"8fc64b1a5a5a9db7ece57379ec579879a0fc0a1158c8cf0120a8eca2d08a3b3d"},{"url":"/projects/chrome-tab-extensions.html","sha256":"74eb176ba023780b7c785f1171e191eb31f247b5b8b61647d52a2d70d4c6467c"},{"url":"/projects/chrome-tab-extensions.txt","sha256":"2b88f9ca542f269bd805873a1d1fc3f28b2aca0b99bcfcc8244f7a7715ab445d"},{"url":"/projects/chrome-tab-extensions/__next._full.txt","sha256":"2b88f9ca542f269bd805873a1d1fc3f28b2aca0b99bcfcc8244f7a7715ab445d"},{"url":"/projects/chrome-tab-extensions/__next._tree.txt","sha256":"0e7c482f13ca69f138da329eabb57dd03194ea2f4b217240abda1dd9e9f2db39"},{"url":"/projects/chrome-tab-extensions/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"15ac289dd0bd322bdc11fd41a45f2cf746e0496b59ac55138c4f7db8b572cc49"},{"url":"/projects/field-service-gps-tracking-app.html","sha256":"7dba1df3b7bfb62dce76a9f58159b84fd60b2541a96937183f952405c3133e95"},{"url":"/projects/field-service-gps-tracking-app.txt","sha256":"e1325665ebbe1c6c5804e4921be2d79d5e21265c71e2644cbc6cc9318def2859"},{"url":"/projects/field-service-gps-tracking-app/__next._full.txt","sha256":"e1325665ebbe1c6c5804e4921be2d79d5e21265c71e2644cbc6cc9318def2859"},{"url":"/projects/field-service-gps-tracking-app/__next._tree.txt","sha256":"b45169ced783138ac27110acf4cbbc4990fe455cd0d238c8a18daa8dabb4af01"},{"url":"/projects/field-service-gps-tracking-app/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"f269de298938783119b1492740ef580ceb5432d8ed5fd154dad580038debda83"},{"url":"/projects/gpt-shell-4o-mini.html","sha256":"c5508b9795da853045cef8cab3910ef56d180e84c85621671613b429f1547400"},{"url":"/projects/gpt-shell-4o-mini.txt","sha256":"38b7c49dd07f1aad57164cf7269105a25b5e2ccfcbeb253b35b8f22cac3296db"},{"url":"/projects/gpt-shell-4o-mini/__next._full.txt","sha256":"38b7c49dd07f1aad57164cf7269105a25b5e2ccfcbeb253b35b8f22cac3296db"},{"url":"/projects/gpt-shell-4o-mini/__next._tree.txt","sha256":"f3d87126b5d19529beb5fe909f649c948c99226389ec651d28deb2878e4ace63"},{"url":"/projects/gpt-shell-4o-mini/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"1600ddee759b2e5b66784af4784cb517623f6fb29017e2b3e9baf912dda32547"},{"url":"/projects/inventory-management-system.html","sha256":"3d6896657b5341223fb6ee2de140a9634ecc893f6722af7ceed2009d1098288c"},{"url":"/projects/inventory-management-system.txt","sha256":"b529861d759daff3530041aad3713a94bfb969f7f07be08dbf8247f4ba62a3ab"},{"url":"/projects/inventory-management-system/__next._full.txt","sha256":"b529861d759daff3530041aad3713a94bfb969f7f07be08dbf8247f4ba62a3ab"},{"url":"/projects/inventory-management-system/__next._tree.txt","sha256":"ef536b131b92d17b36faa9144e3d80e1e7e55cdb0568899a71c14effc97191ea"},{"url":"/projects/inventory-management-system/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"7d636606dbffccdaa2c6300f94fb8af9c079c22bd23a477bb4fc67bb3694e6be"},{"url":"/projects/irs-self-assessment.html","sha256":"fd2819d279aa090b5528f11539abbc12df707d40d359cec2e3141bf96eb4f550"},{"url":"/projects/irs-self-assessment.txt","sha256":"d28508384797c99607fff5c867dbc494e38c494b8ee64ec045a8e78e9483f318"},{"url":"/projects/irs-self-assessment/__next._full.txt","sha256":"d28508384797c99607fff5c867dbc494e38c494b8ee64ec045a8e78e9483f318"},{"url":"/projects/irs-self-assessment/__next._tree.txt","sha256":"a891ea23bc4093670648e639ac2736c29d380e1bd24dc1e889be7d63e89657e2"},{"url":"/projects/irs-self-assessment/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"5bfca957be41f5cdc1523b8b0852f048b2024513b87af4f0172053e7e509c912"},{"url":"/projects/korean-class.html","sha256":"612d8bb12e5611c0bbe05ed31850b9dbaade16e64ac81939e010daad946ae760"},{"url":"/projects/korean-class.txt","sha256":"837c30eeccc51743333eb83bd68b866b4f0c0a106cf35c85a035e3777a158b84"},{"url":"/projects/korean-class/__next._full.txt","sha256":"837c30eeccc51743333eb83bd68b866b4f0c0a106cf35c85a035e3777a158b84"},{"url":"/projects/korean-class/__next._tree.txt","sha256":"2898bcc26b388947ac939bcc47462adf4564691d1e77688675b977bafd254196"},{"url":"/projects/korean-class/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"52123520ba247dc6acceada199eca884823d60a8ef8c04a7cc328d91070c3c89"},{"url":"/projects/linux-desktop-tools.html","sha256":"4b5a49a1386919c540bd75f812b3344968b992ec46f491685a764ab35b5ac5a6"},{"url":"/projects/linux-desktop-tools.txt","sha256":"e4371f2948e4e5256ea86017d502621384a9a4a95752f25350fdd272431440a7"},{"url":"/projects/linux-desktop-tools/__next._full.txt","sha256":"e4371f2948e4e5256ea86017d502621384a9a4a95752f25350fdd272431440a7"},{"url":"/projects/linux-desktop-tools/__next._tree.txt","sha256":"802e5646a8a13d55b06a066d63099bd670dcfeca8b59929f25890fa1f034b143"},{"url":"/projects/linux-desktop-tools/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"1c405cbdf29412c692451dddacefd437ff13ac2cd6d697f5d51478cb9e601a81"},{"url":"/projects/payment-terminal-launcher.html","sha256":"2472d7348b80cfacfc8830d0b5b5f9d1838f04e362cd22749fd1d4b60af11078"},{"url":"/projects/payment-terminal-launcher.txt","sha256":"5001d80e14e2502132a54457ad58bc02d26d119883263d69de8aa03c0625099d"},{"url":"/projects/payment-terminal-launcher/__next._full.txt","sha256":"5001d80e14e2502132a54457ad58bc02d26d119883263d69de8aa03c0625099d"},{"url":"/projects/payment-terminal-launcher/__next._tree.txt","sha256":"736bb869e3d77be7f4d887e9a60bc8d8173a8bc4502445a897e8f85901c978ed"},{"url":"/projects/payment-terminal-launcher/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"01370d7c63839867ae50dda479c2bd568d7542d0513f22c4718043cf3581340b"},{"url":"/projects/sg-life.html","sha256":"3e1bf7d2cebdf341242755488f99b2e564096c325ac0932e88643992c509cdcd"},{"url":"/projects/sg-life.txt","sha256":"1b426070774fb360f8daccf6330374f2fecbb9b29ce91803467bb278d83e36c1"},{"url":"/projects/sg-life/__next._full.txt","sha256":"1b426070774fb360f8daccf6330374f2fecbb9b29ce91803467bb278d83e36c1"},{"url":"/projects/sg-life/__next._tree.txt","sha256":"67baa43104ac9209668b613bb6d92d0faeef39a4476160cddc4cf4edb5a4905f"},{"url":"/projects/sg-life/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"753fa1847f322198ebe02b8ede48926b75c0c1652a6a84e1b776817b808497d8"},{"url":"/pwa-worker.js","sha256":"3195030b9442fcf016cdfd0111acd49dc6733baca49941e917b03ff25452c150"},{"url":"/robots.txt","sha256":"c65f117307eee6d6c04968c5e8e2336baf7552e43d5cdd9a3f898d3944aa6aac"},{"url":"/sitemap.xml","sha256":"5e4ee9e8dba8e7f8a4230ce4361defc2741e3f248b6c23b720c55262c6a5950a"},{"url":"/vercel.svg","sha256":"f081337b2fee635b455b63275406a3e7f39d6a014e25ad90dab5a67e62a12ac4"},{"url":"/window.svg","sha256":"644768c4aaeb4767bce293344eeb0c125fb804a94d801440424072202d85e3a1"}];
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
