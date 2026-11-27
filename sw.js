// Shared engine: preparePwaExport() fills out/sw.js; pwa-worker.js freezes the
// Next build version. Keep these declarations on one line for both preparers.
const CACHE_NAME = "wkdkavishka-pwa-v1-00140ccaff1e478bb1d6d7ff";
const PRECACHE_ASSETS = [{"url":"/404.html","sha256":"5eac2539ae8e8d61a4ed98381bbec4c78587b0ab4bb40cc0713ae87c3acbf8ee"},{"url":"/BingSiteAuth.xml","sha256":"32579827e9d2b93e0a21b9a8cbac07d3478589b220b9ec8dcb460762bd65c48a"},{"url":"/__next.__PAGE__.txt","sha256":"7ceb99ba02b69e55c79a1c46346fa38d564f67f415c323b614dee400a1a42baa"},{"url":"/__next._full.txt","sha256":"a7e36d9cceef835709ac9493d295cceeabbcf8de7457407cb90847ef6cd02541"},{"url":"/__next._tree.txt","sha256":"8a79ec54b04477b0ef6914a501e31a0d3d346def0ab0eb0efa8448c5259c78cf"},{"url":"/_next/static/RYxlReohEbdFQPiT2Ll1h/_buildManifest.js","sha256":"9476e0afd3f9da68a64e6ec58631191fd3eaca62c9f5a377e7517fe9a89e59ea"},{"url":"/_next/static/RYxlReohEbdFQPiT2Ll1h/_clientMiddlewareManifest.js","sha256":"5483e3295dc35dfe29ea932efc85341c916f10ff78ff5b0e965e003710893a4a"},{"url":"/_next/static/RYxlReohEbdFQPiT2Ll1h/_ssgManifest.js","sha256":"92e9502f1d993d2f48296b2dc2cdbd69d9e297c8c8404a1d6d16fa509d1108c4"},{"url":"/_next/static/chunks/092r-mewpaf3q.js","sha256":"30b1a7afdc2b4c18dbed0c12b4cbb9ca6e3b1b048440715e434664cb534d6f11"},{"url":"/_next/static/chunks/0cz1d0mv5g_q7.js","sha256":"0973c1d64c88adc8e3c950410cb58b288f72118d5965b78049438deb8f2f9683"},{"url":"/_next/static/chunks/0jxzbn56kpjkf.js","sha256":"416272c29a64eb495845a998bbe7a6f9e85dd18935f4c6b9dd93b49e4d08cd93"},{"url":"/_next/static/chunks/0leefzyevhih3.js","sha256":"dca08826c9ca5e877ee7ded1ebccc9f31d48f7b4321ac4d1a948d0413fae01c7"},{"url":"/_next/static/chunks/0zlip2jes-oq1.js","sha256":"181633f4ea81182216e8ee11b9f046575ccd3e507af802157bc765ae5a0e2b64"},{"url":"/_next/static/chunks/18teplb2ke1x2.js","sha256":"62af5b401e5d390769b63603b43bd03b683823f2d8fe62c4887e8ab4001e96c0"},{"url":"/_next/static/chunks/1j3_0sqfj90h2.js","sha256":"7a96b57e8a32b2738602e130980e75c99dfe5d840bb3ba91d36bf4e3bfe60b38"},{"url":"/_next/static/chunks/1jox-qfarjn9r.js","sha256":"39bd9da59d62354830c7f4874c9ba1499eb010e2ee493246aef37a556d9a62ea"},{"url":"/_next/static/chunks/1pcw6gskne7pf.js","sha256":"6dbc40a359da7b95b1b5d62b81884098dc2a8bc342bb4493b87712049f4fac08"},{"url":"/_next/static/chunks/1ua2kfq9s-me6.js","sha256":"890002b4e7ccf6ef3ddebcb8a0eab7953d11231160dbd71c67c8bf43ee237442"},{"url":"/_next/static/chunks/1xesltuyj_2sj.js","sha256":"9ea663449ef1a04010911c71e38c3fe3d6124e3b243ae93f9540d1eaefed1e66"},{"url":"/_next/static/chunks/2urr6-fm2smyv.js","sha256":"ee86b6e5631f8350cee1c67bc13f15a6b1c1da8b99c302533c5abe1da4130f78"},{"url":"/_next/static/chunks/39elx3vqh7hrd.js","sha256":"f30464da58deb50920e67e982b5362c9a6e21f66e676325fc8294f9073b6673a"},{"url":"/_next/static/chunks/39l6fnbh76wet.css","sha256":"7b27ed2fef8780f5930f943b68cf688b209aa1e353c53cbb458aa0fce3e9bd0b"},{"url":"/_next/static/chunks/3gc3mnhfffojg.js","sha256":"4caee3c5c1509fd0f42d5c3b449cb81d400b6325dfa8f5fdf2fc3430ec029d5b"},{"url":"/_next/static/chunks/3qsw1t9r5au36.js","sha256":"5abeb9e37420d31c792fd1a568677e7820bac8f5ba3e0d6b485beb78baeacaed"},{"url":"/_next/static/chunks/3tp8cu84taqmp.js","sha256":"e09c4405d336fae0e777a41dcfce451a874f516c5c80c866ad5bc5ba092c9753"},{"url":"/_next/static/chunks/3ydiogt47iook.js","sha256":"35e02a29ffff28daf2030a4855cfdfb0eef347a1bef2bef1fdffd60de418f65d"},{"url":"/_next/static/chunks/452cpu_7-jbvp.js","sha256":"27ccf044cf30af2c5837ef6fd8567199a241850da3041d9f0ebe1dd85a0c291b"},{"url":"/_next/static/chunks/turbopack-077hmtqrhcoji.js","sha256":"3f0ba0c36a0758d76b55b6717fd77e65f46ae1295bb22fa441476e1eb7854d51"},{"url":"/_next/static/media/07c7676b89ed2778-s.p.2bn3s6zvc0dyp.woff2","sha256":"c940764593d0fe5d596be327ca7558855e018039fb78509aa21921fd3644c3e4"},{"url":"/_next/static/media/2fb76073e23fd9e4-s.3lvt2whj97whp.woff2","sha256":"a2e2c783ca6f9c20486e81e72a279203e86730bbf8f01ff6a5ee9dbd09e1c271"},{"url":"/_next/static/media/45462fd7b7c12654-s.0k62hbripvv8p.woff2","sha256":"8db00ff46c67b22cda8bed865acf7077651cac8d2841d5b40980556b48961931"},{"url":"/_next/static/media/46a9e2f250689b4a-s.0-dom-5bn10r2.woff2","sha256":"fccca918fea40089dacadc7045861314d1a6bc91f1f323cc1eeb22ebcdb321b5"},{"url":"/_next/static/media/6131cbbf5549afa2-s.2uwcyprjm3xu3.woff2","sha256":"46dd4cdca58c26ae87cc6927657bf83b2e8abfc39ffd0ab176e301a8d28d22bf"},{"url":"/_next/static/media/76b70a1dbe058eb5-s.1y4-pdgsjb-pw.woff2","sha256":"aebf2ab4a4ce6810d73c1ac7be7cafb4e5ec4cee2d6db5fb3e09691747ec4bd6"},{"url":"/_next/static/media/8bcddb47c8219945-s.1spbknb88wd48.woff2","sha256":"9e38b3f1575daba3435ef09d33a202585ed5bd204bd0a8c744955c750c2b9091"},{"url":"/_next/static/media/ba63f6a0e436df8e-s.3-6t-g6q0vh0a.woff2","sha256":"a28eb6d3ccb534ae0c94ca999371df024aab60b08c3c8a5720ee9e32fa0faaa2"},{"url":"/_next/static/media/c0680f1bdb3a2e90-s.p.1gsd1jahc5dg_.woff2","sha256":"92684e4acde79ef07758cd09380b7e01e9824d8b061eddeda046f78c166d7b12"},{"url":"/_next/static/media/favicon.2fcpk4-xg61hj.ico","sha256":"4bdb962c57df903dbeb54894e24d67a9274ffc144685a6df6ee3eb02395676f3"},{"url":"/_not-found.html","sha256":"5eac2539ae8e8d61a4ed98381bbec4c78587b0ab4bb40cc0713ae87c3acbf8ee"},{"url":"/_not-found.txt","sha256":"c5dcaa52df0099d21526391d2701a38780923dc30fd303a133cd00b731413e7d"},{"url":"/_not-found/__next._full.txt","sha256":"c5dcaa52df0099d21526391d2701a38780923dc30fd303a133cd00b731413e7d"},{"url":"/_not-found/__next._not-found.__PAGE__.txt","sha256":"945d3c8cbc959437932efa11c801987379fa6d632ee82ee79c27e3aedeaf5912"},{"url":"/_not-found/__next._tree.txt","sha256":"6b88f43a987f45d1b302ff3b8d5b1edc0c0d7ceb0f7d7471d460da7c2621cb07"},{"url":"/browserconfig.xml","sha256":"bd828f72f9a53651fcb04c15cf5046d9385dd7adb4f6ae15d67fd98d2ba161d5"},{"url":"/contact.vcf","sha256":"079ca2f10faef6bee32529099dd85bcdeeafddcb1e823d8988c957305d95388a"},{"url":"/favicon.ico","sha256":"4bdb962c57df903dbeb54894e24d67a9274ffc144685a6df6ee3eb02395676f3"},{"url":"/file.svg","sha256":"2b67812c325c199a02536cdbeea0c593a72f707d323b72ee3e08dbab06753bd4"},{"url":"/globe.svg","sha256":"b614b9bf183925957661ac851498fe1d8029fd43a62fbfed86f9e2624a57e7cf"},{"url":"/googleaf175b30968c86d2.html","sha256":"6488c84031b49be37936d2e18670521798dd25f0d04410303dae4ee17f8661fd"},{"url":"/images/meta/android-chrome-192x192.png","sha256":"1ffa5b65cac51876269baba560731230b2352777fbcc24e6d012e24fe7cd5beb"},{"url":"/images/meta/android-chrome-512x512.png","sha256":"c0ea013e9c7e75384552b94824d4626dab8102a8a2337f4800e9e5c07cdf9432"},{"url":"/images/meta/apple-touch-icon.png","sha256":"8df87612a1a6fffadffa88fbb386b4f1530b969c509b137a85e3056fd1ca84da"},{"url":"/images/meta/favicon-16x16.png","sha256":"b6d75de845448431e406e129087801177c96d2fc35edcff7498b77b811d77d2d"},{"url":"/images/meta/favicon-32x32.png","sha256":"0974d1129ac0f6b4a53d82692ce60a079af1eb6948c7f0f5c9bcd158d3c50e77"},{"url":"/images/meta/mstile-150x150.png","sha256":"d97827a279f2af6ffdbccda943b04f19355a85ebea0eff44820118df6a7faa6d"},{"url":"/images/meta/mstile-310x150.png","sha256":"e96f5caa9f0b00c11965b467e2cfdc0e2791bf71212dccb7baeec64ac7cfd436"},{"url":"/images/meta/mstile-310x310.png","sha256":"e2c4b1a36000ba09cd73e408fe5afe11f7c3a1e90d9835e8f86ee1423ef2b55c"},{"url":"/images/meta/mstile-70x70.png","sha256":"ee951c99397baec5513df07b41ae1acf7811c886f9b327dcd8b9a032bfcbc58f"},{"url":"/images/meta/og-image.jpg","sha256":"adcd039b0a7f2b0053b3ddcb088a1fdbd8965620cbe3f00a372ccaa8a9dac93c"},{"url":"/images/profile/profile.webp","sha256":"8c929b9934fb9c0a5cc3f109e1508c7bb9200fcd504efe2f4d443aa2cc50f087"},{"url":"/images/projects/gpt-shell-4o-mini/1.webp","sha256":"3363fea38fb79bc49c0e1272292faa7a81fba151d27239777249369a45f3f463"},{"url":"/images/projects/gpt-shell-4o-mini/2.webp","sha256":"b0a96edf2b4e5b68c044ef6c4472fcb76723619a9fd9cc0ff78379d24260e11f"},{"url":"/images/projects/gpt-shell-4o-mini/3.webp","sha256":"19fd3d660483cd85b2c5b83b2065aed183ab5944f2e6c9c8097580a0e91e7a57"},{"url":"/images/projects/gpt-shell-4o-mini/4.webp","sha256":"94c533faf328491e71fb3b802e282a2fd5978821dea4c52857b7d23b4a4f41cd"},{"url":"/images/projects/irs-calculator/1.webp","sha256":"6f181f962ddb14c5b4d7bc3eb47318dcf6b38307573c5fde5922b44fc83da6cc"},{"url":"/images/projects/irs-calculator/2.webp","sha256":"37a9359de4bf553a94f948a5ef73b6bf50687873268270e5f22307013dc64690"},{"url":"/images/projects/irs-calculator/3.webp","sha256":"0004513976a6c488ca3746ba5a3ba73fea901b20a6685fc60fc30491d87ce852"},{"url":"/images/projects/korean-class/1.webp","sha256":"89877ebdc166b0afcdae70e66854847de9e51573f257a298d286eb65a40f9467"},{"url":"/images/projects/korean-class/2.webp","sha256":"c21bb4d7e8b3e5b716226e0e8942f7fc818531a6fea4b8f610726fea29d3243a"},{"url":"/images/projects/korean-class/3.webp","sha256":"83c28d190a6415be652a036d2b5977691a89256cba61e13f4ffbc9a72ddde606"},{"url":"/images/projects/korean-class/4.webp","sha256":"6c9a09ae1f8c3d11eb8ab9ca716e02cab7129323056ea0c18fc412d0bbb2f375"},{"url":"/images/projects/korean-class/5.webp","sha256":"e3101bd0a6cb6825d04785a10cc636045f056e0312f03be1f2d8c5476d67c76b"},{"url":"/images/projects/korean-class/6.webp","sha256":"7df6e2cf4a8638690436b499f4664e03ca727e8e1cdc49d005c03b8286d9fa96"},{"url":"/images/projects/sg-life/1.webp","sha256":"a866df59cb7a9c0baebbf0dcb24e754d1891f8f66d8c96e9cddc8d6e0192d04f"},{"url":"/images/projects/sg-life/2.webp","sha256":"9a6ebac2d355bf69702f0cef63b50671bddf9efef84b3c37830d9fbc7cc3dc39"},{"url":"/images/projects/sg-life/3.webp","sha256":"2e8f3a7604bcdb27015127a180e5e4ccab63465e52d5e5da4337c6c6b4c86d9b"},{"url":"/images/projects/sg-life/4.webp","sha256":"b06aad28a55558819f1b338e0d45383831db31591c341ab735a839f280a4c7af"},{"url":"/images/projects/wkdkavishka-vue/1.webp","sha256":"910af30a3d732b56f5f1914499baab91e20c2ce52c282d5d1f581775c02e1090"},{"url":"/images/projects/wkdkavishka-vue/2.webp","sha256":"2d3829223ac0896f0f24f9ae97df651a0e3a484a24b419ff3eb0399ef7ce144f"},{"url":"/images/projects/wkdkavishka-vue/3.webp","sha256":"491634244815f3f1056ee1c41bed2a6ac1658d5ed90b936629846fecdb3d4e29"},{"url":"/images/projects/wkdkavishka-vue/4.webp","sha256":"c78ae593672b112a2c87bc55f333155f58a252b7b0c76a3d556ce961ae961aca"},{"url":"/images/pwa/desktop-1.png","sha256":"b458e602d280becaae75f63f6695e48a405bfc86c5082f5cb0e2e2243c365664"},{"url":"/images/pwa/desktop-2.png","sha256":"86f9cfb76d3d2f51c75223436c26089fdaa4fb4cdc24e8e5203a9ae2e1925ec4"},{"url":"/images/pwa/desktop-3.png","sha256":"31a753d4700c0ff89edb7a7701c1e521246c6cba04b5466ab4b4cfe624decdcd"},{"url":"/images/pwa/desktop-4.png","sha256":"beb512e5813f1a203a5754d9e23fb4f5c1d35858b1e0530953d132adde379ad5"},{"url":"/images/pwa/mobile-1.png","sha256":"46acd433df8d83cead5fdfeb11e008e132197a059410fd3a69ac0cfe74a533bf"},{"url":"/images/pwa/mobile-2.png","sha256":"ade270c0cb58ed095f41c40f3d52cc9f6e85cbe2607bd15438380f35bfd9d8d9"},{"url":"/images/pwa/mobile-3.png","sha256":"aea420cf2c98014d620303619d1585fcf7f9a7df6ba659b59b5aca94a652c148"},{"url":"/images/team/member-1.webp","sha256":"3b7b7f815974cc95f748416d0447d653473c69582131a9a9e34d20682e0d5759"},{"url":"/images/team/member-2.webp","sha256":"3b7b7f815974cc95f748416d0447d653473c69582131a9a9e34d20682e0d5759"},{"url":"/images/team/member-3.webp","sha256":"3b7b7f815974cc95f748416d0447d653473c69582131a9a9e34d20682e0d5759"},{"url":"/images/team/member-4.webp","sha256":"3b7b7f815974cc95f748416d0447d653473c69582131a9a9e34d20682e0d5759"},{"url":"/index.html","sha256":"5bd0a4fb883858c40739240ef56bd296792bfc83131eedc6b33503e4c9297d71"},{"url":"/index.txt","sha256":"a7e36d9cceef835709ac9493d295cceeabbcf8de7457407cb90847ef6cd02541"},{"url":"/manifest.webmanifest","sha256":"c81af6eb9c21a2895932666ce251f6d29c6d605fc1142c10cf86cb9cda80a42b"},{"url":"/next.svg","sha256":"55995dfad6ecb4945a1e856ddca03c5e16aa5bf13fd21b4df6a74ae79357bcfc"},{"url":"/offline.html","sha256":"32dedfcbd051aa1378cc6217f1ca802acb7c22efa89d6efb98a5976ea632fc43"},{"url":"/og/android-kiosk-device-owner.png","sha256":"c71dece3619fa4c044f8078ad955900596989b6f9eaa17e29616f273f5077cd8"},{"url":"/og/chrome-tab-extensions.png","sha256":"b75e3ee124d7c060b9fe4c58b8fbf63cfaa8cab581a1f5dda849f0b1709785f0"},{"url":"/og/field-service-gps-tracking-app.png","sha256":"6b0f70ee4342d938138062502131894d9e4162e5606a1d0f464cbe23d373e448"},{"url":"/og/gpt-shell-4o-mini.png","sha256":"237a127bb7eb9ff7f1f6589b6d29afcd3b94abb8b487e1e59bf5e58b58e84740"},{"url":"/og/home.png","sha256":"b0d134357121c770f5889964422b3fe8774d276b8089eb86432252ea476e4efa"},{"url":"/og/inventory-management-system.png","sha256":"ec3b2c4d3f87eee0df7b20dd73521df68b87ae3ee7f6238e3a289ae1924d17c2"},{"url":"/og/irs-self-assessment.png","sha256":"e20b62526d4b4e314434c61a45568c1184ed2e6b72b36ef6015441ef8471196a"},{"url":"/og/korean-class.png","sha256":"082b357f34074051c02bb231a3c1d613aa1f58e78ec92b1c3507ebd3760549dc"},{"url":"/og/linux-desktop-tools.png","sha256":"2850e3f6b976bab1b69463a4037a4c6637ab5601ee4baa465359870f140f5547"},{"url":"/og/payment-terminal-launcher.png","sha256":"cc6e33357d4590731b4b62e4ea2ca836c16593f4f2e0af08aa46f1095937d61b"},{"url":"/og/portfolio.png","sha256":"0b6d10ed18cdbe765420b36967dc8323470ddceeb40d1a2eb1b1bac381814bc8"},{"url":"/og/sg-life.png","sha256":"9334c40be54bb15f31e0544ac42419d53396d9a65390d0d33a7b7b30e931e1a2"},{"url":"/portfolio-artifacts.txt","sha256":"4242bae698caf08ff375440cca53e170ce05a5db3d6040f892f6a750167d13b2"},{"url":"/portfolio-document.html","sha256":"939f8f895964288499ffcd2a7ef8bb010a76aa907a2670d2c17de2983f658fdd"},{"url":"/portfolio.html","sha256":"74defa96a7696804e00065d4786c86f0d3ce868dae7636bed97eae251278fcd2"},{"url":"/portfolio.pdf","sha256":"692aaf9c99e2306cd2c04ea811b0f49a64558679f224a353244d528fb0797a4a"},{"url":"/portfolio.txt","sha256":"41c021194171d5d404d1c5c13da45dd94b568fa9706f244d6380ae4028e5245a"},{"url":"/portfolio/__next._full.txt","sha256":"41c021194171d5d404d1c5c13da45dd94b568fa9706f244d6380ae4028e5245a"},{"url":"/portfolio/__next._tree.txt","sha256":"cb0cbb81afc4aec0527a5de658c34515c8e378bb5d28b1cf04d0a6bac63e3977"},{"url":"/portfolio/__next.portfolio.__PAGE__.txt","sha256":"67641b543a14c48da547000394f842796a7d31756af50e650c061339927d637c"},{"url":"/portfolio/index.html","sha256":"74defa96a7696804e00065d4786c86f0d3ce868dae7636bed97eae251278fcd2"},{"url":"/projects/android-kiosk-device-owner.html","sha256":"e690d4abf26f4abaa7027b39d9fe4cbf625aeffeefa07e2efd1e5a4c3e9520ff"},{"url":"/projects/android-kiosk-device-owner.txt","sha256":"628079428005ca94be8fe3ecc2fe258dcdd0629daf20fb66f10a359e0bfc4d49"},{"url":"/projects/android-kiosk-device-owner/__next._full.txt","sha256":"628079428005ca94be8fe3ecc2fe258dcdd0629daf20fb66f10a359e0bfc4d49"},{"url":"/projects/android-kiosk-device-owner/__next._tree.txt","sha256":"d54352cb61ac6745ff878097eb807f0bc5e1e4d838417d30f96f77a36656f962"},{"url":"/projects/android-kiosk-device-owner/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"ae9aa5283dd806dc5da48c9fb6a40f16aa78e908b220463f8dccbfcae2b06338"},{"url":"/projects/chrome-tab-extensions.html","sha256":"1deb73c054b06917809d96c2e6370d5da5fd2318b4cced9fde8ec3886a3df9bf"},{"url":"/projects/chrome-tab-extensions.txt","sha256":"87f94ba5448e6c78a2629ea2b464accc046e9fd5bd79e680dfee1826560fbefb"},{"url":"/projects/chrome-tab-extensions/__next._full.txt","sha256":"87f94ba5448e6c78a2629ea2b464accc046e9fd5bd79e680dfee1826560fbefb"},{"url":"/projects/chrome-tab-extensions/__next._tree.txt","sha256":"6f10f7e7d407dfdfd726d3e2a12560b861dfdf2e4fe1e7b64f54f4bf1f321a99"},{"url":"/projects/chrome-tab-extensions/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"858add7891958f3b627e001dd5159fff2c42baab5afad469e2b641f002e79478"},{"url":"/projects/field-service-gps-tracking-app.html","sha256":"c6a557d919017e1e3f7772090a10f1d3d6a9405559643bf43ad88e89719584a3"},{"url":"/projects/field-service-gps-tracking-app.txt","sha256":"f22003c2b4d9eaebbf3685049b89b9421b7c37fe0d1e19e9343cb178398788ae"},{"url":"/projects/field-service-gps-tracking-app/__next._full.txt","sha256":"f22003c2b4d9eaebbf3685049b89b9421b7c37fe0d1e19e9343cb178398788ae"},{"url":"/projects/field-service-gps-tracking-app/__next._tree.txt","sha256":"223f08f1337821a9bfff1372e00f0716e35472882eb7e510be4b000699751783"},{"url":"/projects/field-service-gps-tracking-app/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"bf38da596a746a4d40bc2959630f9f6d04ab94fc9abba1bd009179ee53092b4b"},{"url":"/projects/gpt-shell-4o-mini.html","sha256":"44818a13f63a7c677b23cc26eec85e6c1cc858e5ce2de2455cf15890e3756cf9"},{"url":"/projects/gpt-shell-4o-mini.txt","sha256":"f801f77704df9fb5712eddb663502ad6936a5aa59b1807b5bbecf84696a18ab6"},{"url":"/projects/gpt-shell-4o-mini/__next._full.txt","sha256":"f801f77704df9fb5712eddb663502ad6936a5aa59b1807b5bbecf84696a18ab6"},{"url":"/projects/gpt-shell-4o-mini/__next._tree.txt","sha256":"63a79f7923f379d98cd3e22ed445ac0c1af75c6bdacd454247c2070f7f0dbd11"},{"url":"/projects/gpt-shell-4o-mini/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"cf78f83ead86484938448ad9c122cb8bd95a8231f54dcea43adefb2726d06de1"},{"url":"/projects/inventory-management-system.html","sha256":"6dfa38c23cc643f7f7e0656ef0951edd7d15909a8c4421b1aa1a614aa1192542"},{"url":"/projects/inventory-management-system.txt","sha256":"8fa47cb32b3ed8942db247510cc682c2992d99dc009bccf3e27dcc93cfabf748"},{"url":"/projects/inventory-management-system/__next._full.txt","sha256":"8fa47cb32b3ed8942db247510cc682c2992d99dc009bccf3e27dcc93cfabf748"},{"url":"/projects/inventory-management-system/__next._tree.txt","sha256":"a554288217a5524f64c555d8589fe3709c009f39aa7402a6d45a0ffe8a51cea6"},{"url":"/projects/inventory-management-system/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"336628939ed80a6e5ce81a9ef49f55039ccf11027499f797f9ca7d76d552c600"},{"url":"/projects/irs-self-assessment.html","sha256":"b9855c09e9f0827d240ede3dc8d1289fe6134a23b1d6d38bdec5c403db3c78ca"},{"url":"/projects/irs-self-assessment.txt","sha256":"2625f4c45f56e78e3311a55cff4d1afa7b2be7da2659ce8840a2f1c16e143523"},{"url":"/projects/irs-self-assessment/__next._full.txt","sha256":"2625f4c45f56e78e3311a55cff4d1afa7b2be7da2659ce8840a2f1c16e143523"},{"url":"/projects/irs-self-assessment/__next._tree.txt","sha256":"3b9b14c431ddbc65d61e0a148d336399122569a87d00c25e856758f1d7a633cd"},{"url":"/projects/irs-self-assessment/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"c3fb936b79a2350efed8b6c87192a44fb0460a8ede71385b2db6bc648df602cf"},{"url":"/projects/korean-class.html","sha256":"825b2a9698f6660aac154875064fb8e6e17e323035adbe3d7b54d5e0cbd3d936"},{"url":"/projects/korean-class.txt","sha256":"16cb1e276cf2d8136ad053f471bb9ad6074e4a576f7abfa8c03bbf73840121d4"},{"url":"/projects/korean-class/__next._full.txt","sha256":"16cb1e276cf2d8136ad053f471bb9ad6074e4a576f7abfa8c03bbf73840121d4"},{"url":"/projects/korean-class/__next._tree.txt","sha256":"aabd2ba01b766fa5137bf19e45ad400d598c36bc4b5ffb5cf57f9ad701789507"},{"url":"/projects/korean-class/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"bbc19c3e88d1dc1745ca01555239fcd4615eb2ef13a19047aa558bf049c8e9c7"},{"url":"/projects/linux-desktop-tools.html","sha256":"fb9228dd73f67b85a8603377e15d3c0484a768712f1375a7102a248b00160ef0"},{"url":"/projects/linux-desktop-tools.txt","sha256":"b209caf0188ca0d2a70a37a88640afb4984b707b3d66f941ba812bcb5a00ac18"},{"url":"/projects/linux-desktop-tools/__next._full.txt","sha256":"b209caf0188ca0d2a70a37a88640afb4984b707b3d66f941ba812bcb5a00ac18"},{"url":"/projects/linux-desktop-tools/__next._tree.txt","sha256":"3d7605a784bf38b7f6983b25deebc62020a1942bf24fe868c77b09a65dba5614"},{"url":"/projects/linux-desktop-tools/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"751eceb84811e6c3f8e45fb21ed69e31dc7700bf16b33d371c91e02b25ef7008"},{"url":"/projects/payment-terminal-launcher.html","sha256":"35502d6ef487befea53c5a8260bdbd84d5efa62256e37cc27c985d40acb55a09"},{"url":"/projects/payment-terminal-launcher.txt","sha256":"9a98c0e5678da9759e1adcd1fd1df7ff0612a7a38bb35344fc3e3d7f273e2e8b"},{"url":"/projects/payment-terminal-launcher/__next._full.txt","sha256":"9a98c0e5678da9759e1adcd1fd1df7ff0612a7a38bb35344fc3e3d7f273e2e8b"},{"url":"/projects/payment-terminal-launcher/__next._tree.txt","sha256":"5069cf72d157e19c8ea2cb5f75d817bcec7ffb2edb82b460f80ea3a858cf0d67"},{"url":"/projects/payment-terminal-launcher/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"9de55d2803f6157fbe9d5f685a60763cb9c66f88ff8eaed06528ea83655868ab"},{"url":"/projects/sg-life.html","sha256":"d2561d248d7311cc7c43b1bd0d77fd1ca0e5e10d09e6e365ae54a665dda6155a"},{"url":"/projects/sg-life.txt","sha256":"2936456d7c45873c6e598daf93f0a6033dd29c24e40422c49bd79c2803d61f9f"},{"url":"/projects/sg-life/__next._full.txt","sha256":"2936456d7c45873c6e598daf93f0a6033dd29c24e40422c49bd79c2803d61f9f"},{"url":"/projects/sg-life/__next._tree.txt","sha256":"b494cdc5723c25596f3feb8ba818eefd1684d5fd97e77fd4f288c91e618c3c6d"},{"url":"/projects/sg-life/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"80ef558bf6ea209751c219472f80bfccc99681b94ff28ba2924a8f40515af92f"},{"url":"/pwa-worker.js","sha256":"52598070cc530665f00f0f6619668f2f7224121a55694c03f7e8657934ff398b"},{"url":"/robots.txt","sha256":"c65f117307eee6d6c04968c5e8e2336baf7552e43d5cdd9a3f898d3944aa6aac"},{"url":"/sitemap.xml","sha256":"5e4ee9e8dba8e7f8a4230ce4361defc2741e3f248b6c23b720c55262c6a5950a"},{"url":"/vercel.svg","sha256":"f081337b2fee635b455b63275406a3e7f39d6a014e25ad90dab5a67e62a12ac4"},{"url":"/window.svg","sha256":"644768c4aaeb4767bce293344eeb0c125fb804a94d801440424072202d85e3a1"}];
const PWA_MODE = "static";
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
