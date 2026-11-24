// Shared engine: preparePwaExport() fills out/sw.js; pwa-worker.js freezes the
// Next build version. Keep these declarations on one line for both preparers.
const CACHE_NAME = "wkdkavishka-pwa-v1-c1e0a84db4f7dbfd0f8d6d55";
const PRECACHE_ASSETS = [{"url":"/404.html","sha256":"2850917dbd9cc4b1db3796a2da1780ca3c522301c8f86ac460796b7f7c0d30a7"},{"url":"/BingSiteAuth.xml","sha256":"32579827e9d2b93e0a21b9a8cbac07d3478589b220b9ec8dcb460762bd65c48a"},{"url":"/__next.__PAGE__.txt","sha256":"d20b0684e40e1001d3f0a29e7c873112d84ed3b0dd47d27c5c0dabc19d55cb02"},{"url":"/__next._full.txt","sha256":"4e3fb39955e97d4047ddaeadc2008e55ddabf26d1c12026bcc60e1322e09c00a"},{"url":"/__next._tree.txt","sha256":"d7d497ef32641700e556ec440506a6fa4c6ff0d57c1afecf997a1f4e62c42675"},{"url":"/_next/static/chunks/05ts_cp8pavpw.js","sha256":"a8b621cbcf038519403b3aae711f63063a0b05d59d4e4ff4061bac4fc09d8d8d"},{"url":"/_next/static/chunks/08wgqmxhou74a.js","sha256":"e802a270d5874edcacc4ad34a07432bf7fb177c0a15ff4438bc0e31794321c21"},{"url":"/_next/static/chunks/092r-mewpaf3q.js","sha256":"30b1a7afdc2b4c18dbed0c12b4cbb9ca6e3b1b048440715e434664cb534d6f11"},{"url":"/_next/static/chunks/0cz1d0mv5g_q7.js","sha256":"0973c1d64c88adc8e3c950410cb58b288f72118d5965b78049438deb8f2f9683"},{"url":"/_next/static/chunks/0dfo58efdkpm6.js","sha256":"41a7c99bf7c375f68a6f39127c1bb4ba8d4817959bf8c9c7e32db79dc4dad4c6"},{"url":"/_next/static/chunks/0gqh3lfhl9kbx.css","sha256":"da1fd9212dfd828d0f4975e2ea35ae5fc619aab6215ccbbabe233df3c4320406"},{"url":"/_next/static/chunks/0leefzyevhih3.js","sha256":"dca08826c9ca5e877ee7ded1ebccc9f31d48f7b4321ac4d1a948d0413fae01c7"},{"url":"/_next/static/chunks/0yjla0tx3_r-3.js","sha256":"8bcb97ae636b3d5bf64abd224f54bad5682234ca079530f64f109931942cc03e"},{"url":"/_next/static/chunks/18teplb2ke1x2.js","sha256":"62af5b401e5d390769b63603b43bd03b683823f2d8fe62c4887e8ab4001e96c0"},{"url":"/_next/static/chunks/1pcw6gskne7pf.js","sha256":"6dbc40a359da7b95b1b5d62b81884098dc2a8bc342bb4493b87712049f4fac08"},{"url":"/_next/static/chunks/1rx_6003u_mpv.js","sha256":"ac7c5d3a11242905c3df9ec02d0af62222fee607ec44758b5500f2879a977e67"},{"url":"/_next/static/chunks/1ua2kfq9s-me6.js","sha256":"890002b4e7ccf6ef3ddebcb8a0eab7953d11231160dbd71c67c8bf43ee237442"},{"url":"/_next/static/chunks/1zis-y-py1_6a.js","sha256":"e06524d99bfd27a37509e73e3b436d72d9afe9214aaf337c17c5350ffd6da842"},{"url":"/_next/static/chunks/2urr6-fm2smyv.js","sha256":"ee86b6e5631f8350cee1c67bc13f15a6b1c1da8b99c302533c5abe1da4130f78"},{"url":"/_next/static/chunks/3b1t1hdb6cmf7.js","sha256":"0462674ff7bd39a47cb0b69d99d8ed66eff99d7e23455b156155cf2afbb4680e"},{"url":"/_next/static/chunks/3qsw1t9r5au36.js","sha256":"5abeb9e37420d31c792fd1a568677e7820bac8f5ba3e0d6b485beb78baeacaed"},{"url":"/_next/static/chunks/turbopack-077hmtqrhcoji.js","sha256":"3f0ba0c36a0758d76b55b6717fd77e65f46ae1295bb22fa441476e1eb7854d51"},{"url":"/_next/static/media/07c7676b89ed2778-s.p.2bn3s6zvc0dyp.woff2","sha256":"c940764593d0fe5d596be327ca7558855e018039fb78509aa21921fd3644c3e4"},{"url":"/_next/static/media/2fb76073e23fd9e4-s.3lvt2whj97whp.woff2","sha256":"a2e2c783ca6f9c20486e81e72a279203e86730bbf8f01ff6a5ee9dbd09e1c271"},{"url":"/_next/static/media/45462fd7b7c12654-s.0k62hbripvv8p.woff2","sha256":"8db00ff46c67b22cda8bed865acf7077651cac8d2841d5b40980556b48961931"},{"url":"/_next/static/media/46a9e2f250689b4a-s.0-dom-5bn10r2.woff2","sha256":"fccca918fea40089dacadc7045861314d1a6bc91f1f323cc1eeb22ebcdb321b5"},{"url":"/_next/static/media/6131cbbf5549afa2-s.2uwcyprjm3xu3.woff2","sha256":"46dd4cdca58c26ae87cc6927657bf83b2e8abfc39ffd0ab176e301a8d28d22bf"},{"url":"/_next/static/media/76b70a1dbe058eb5-s.1y4-pdgsjb-pw.woff2","sha256":"aebf2ab4a4ce6810d73c1ac7be7cafb4e5ec4cee2d6db5fb3e09691747ec4bd6"},{"url":"/_next/static/media/8bcddb47c8219945-s.1spbknb88wd48.woff2","sha256":"9e38b3f1575daba3435ef09d33a202585ed5bd204bd0a8c744955c750c2b9091"},{"url":"/_next/static/media/ba63f6a0e436df8e-s.3-6t-g6q0vh0a.woff2","sha256":"a28eb6d3ccb534ae0c94ca999371df024aab60b08c3c8a5720ee9e32fa0faaa2"},{"url":"/_next/static/media/c0680f1bdb3a2e90-s.p.1gsd1jahc5dg_.woff2","sha256":"92684e4acde79ef07758cd09380b7e01e9824d8b061eddeda046f78c166d7b12"},{"url":"/_next/static/media/favicon.2fcpk4-xg61hj.ico","sha256":"4bdb962c57df903dbeb54894e24d67a9274ffc144685a6df6ee3eb02395676f3"},{"url":"/_next/static/p3JoL1nxBMjh7_SG4VAka/_buildManifest.js","sha256":"9476e0afd3f9da68a64e6ec58631191fd3eaca62c9f5a377e7517fe9a89e59ea"},{"url":"/_next/static/p3JoL1nxBMjh7_SG4VAka/_clientMiddlewareManifest.js","sha256":"5483e3295dc35dfe29ea932efc85341c916f10ff78ff5b0e965e003710893a4a"},{"url":"/_next/static/p3JoL1nxBMjh7_SG4VAka/_ssgManifest.js","sha256":"92e9502f1d993d2f48296b2dc2cdbd69d9e297c8c8404a1d6d16fa509d1108c4"},{"url":"/_not-found.html","sha256":"2850917dbd9cc4b1db3796a2da1780ca3c522301c8f86ac460796b7f7c0d30a7"},{"url":"/_not-found.txt","sha256":"1aa838b0f93640fb37cace1706e51529534b5b2c736b69b3c6f2c3c62451ae10"},{"url":"/_not-found/__next._full.txt","sha256":"1aa838b0f93640fb37cace1706e51529534b5b2c736b69b3c6f2c3c62451ae10"},{"url":"/_not-found/__next._not-found.__PAGE__.txt","sha256":"cad937ed2b4c85ff8264ba4a177918cc3780f07d605a2f0b432f4b403e199b9f"},{"url":"/_not-found/__next._tree.txt","sha256":"34cb7bcf91cc1810158a8d4b47219a2fb921e7602f30d06c9a205439619b00d0"},{"url":"/browserconfig.xml","sha256":"bd828f72f9a53651fcb04c15cf5046d9385dd7adb4f6ae15d67fd98d2ba161d5"},{"url":"/contact.vcf","sha256":"079ca2f10faef6bee32529099dd85bcdeeafddcb1e823d8988c957305d95388a"},{"url":"/favicon.ico","sha256":"4bdb962c57df903dbeb54894e24d67a9274ffc144685a6df6ee3eb02395676f3"},{"url":"/file.svg","sha256":"2b67812c325c199a02536cdbeea0c593a72f707d323b72ee3e08dbab06753bd4"},{"url":"/globe.svg","sha256":"b614b9bf183925957661ac851498fe1d8029fd43a62fbfed86f9e2624a57e7cf"},{"url":"/googleaf175b30968c86d2.html","sha256":"6488c84031b49be37936d2e18670521798dd25f0d04410303dae4ee17f8661fd"},{"url":"/images/meta/android-chrome-192x192.png","sha256":"1ffa5b65cac51876269baba560731230b2352777fbcc24e6d012e24fe7cd5beb"},{"url":"/images/meta/android-chrome-512x512.png","sha256":"c0ea013e9c7e75384552b94824d4626dab8102a8a2337f4800e9e5c07cdf9432"},{"url":"/images/meta/apple-touch-icon.png","sha256":"8df87612a1a6fffadffa88fbb386b4f1530b969c509b137a85e3056fd1ca84da"},{"url":"/images/meta/favicon-16x16.png","sha256":"b6d75de845448431e406e129087801177c96d2fc35edcff7498b77b811d77d2d"},{"url":"/images/meta/favicon-32x32.png","sha256":"0974d1129ac0f6b4a53d82692ce60a079af1eb6948c7f0f5c9bcd158d3c50e77"},{"url":"/images/meta/mstile-150x150.png","sha256":"d97827a279f2af6ffdbccda943b04f19355a85ebea0eff44820118df6a7faa6d"},{"url":"/images/meta/mstile-310x150.png","sha256":"e96f5caa9f0b00c11965b467e2cfdc0e2791bf71212dccb7baeec64ac7cfd436"},{"url":"/images/meta/mstile-310x310.png","sha256":"e2c4b1a36000ba09cd73e408fe5afe11f7c3a1e90d9835e8f86ee1423ef2b55c"},{"url":"/images/meta/mstile-70x70.png","sha256":"ee951c99397baec5513df07b41ae1acf7811c886f9b327dcd8b9a032bfcbc58f"},{"url":"/images/meta/og-image.jpg","sha256":"adcd039b0a7f2b0053b3ddcb088a1fdbd8965620cbe3f00a372ccaa8a9dac93c"},{"url":"/images/profile/profile.webp","sha256":"8c929b9934fb9c0a5cc3f109e1508c7bb9200fcd504efe2f4d443aa2cc50f087"},{"url":"/images/projects/gpt-shell-4o-mini/1.webp","sha256":"3363fea38fb79bc49c0e1272292faa7a81fba151d27239777249369a45f3f463"},{"url":"/images/projects/gpt-shell-4o-mini/2.webp","sha256":"b0a96edf2b4e5b68c044ef6c4472fcb76723619a9fd9cc0ff78379d24260e11f"},{"url":"/images/projects/gpt-shell-4o-mini/3.webp","sha256":"19fd3d660483cd85b2c5b83b2065aed183ab5944f2e6c9c8097580a0e91e7a57"},{"url":"/images/projects/gpt-shell-4o-mini/4.webp","sha256":"94c533faf328491e71fb3b802e282a2fd5978821dea4c52857b7d23b4a4f41cd"},{"url":"/images/projects/irs-calculator/1.webp","sha256":"6f181f962ddb14c5b4d7bc3eb47318dcf6b38307573c5fde5922b44fc83da6cc"},{"url":"/images/projects/irs-calculator/2.webp","sha256":"37a9359de4bf553a94f948a5ef73b6bf50687873268270e5f22307013dc64690"},{"url":"/images/projects/irs-calculator/3.webp","sha256":"0004513976a6c488ca3746ba5a3ba73fea901b20a6685fc60fc30491d87ce852"},{"url":"/images/projects/korean-class/1.webp","sha256":"89877ebdc166b0afcdae70e66854847de9e51573f257a298d286eb65a40f9467"},{"url":"/images/projects/korean-class/2.webp","sha256":"c21bb4d7e8b3e5b716226e0e8942f7fc818531a6fea4b8f610726fea29d3243a"},{"url":"/images/projects/korean-class/3.webp","sha256":"83c28d190a6415be652a036d2b5977691a89256cba61e13f4ffbc9a72ddde606"},{"url":"/images/projects/korean-class/4.webp","sha256":"6c9a09ae1f8c3d11eb8ab9ca716e02cab7129323056ea0c18fc412d0bbb2f375"},{"url":"/images/projects/korean-class/5.webp","sha256":"e3101bd0a6cb6825d04785a10cc636045f056e0312f03be1f2d8c5476d67c76b"},{"url":"/images/projects/korean-class/6.webp","sha256":"7df6e2cf4a8638690436b499f4664e03ca727e8e1cdc49d005c03b8286d9fa96"},{"url":"/images/projects/sg-life/1.webp","sha256":"a866df59cb7a9c0baebbf0dcb24e754d1891f8f66d8c96e9cddc8d6e0192d04f"},{"url":"/images/projects/sg-life/2.webp","sha256":"9a6ebac2d355bf69702f0cef63b50671bddf9efef84b3c37830d9fbc7cc3dc39"},{"url":"/images/projects/sg-life/3.webp","sha256":"2e8f3a7604bcdb27015127a180e5e4ccab63465e52d5e5da4337c6c6b4c86d9b"},{"url":"/images/projects/sg-life/4.webp","sha256":"b06aad28a55558819f1b338e0d45383831db31591c341ab735a839f280a4c7af"},{"url":"/images/projects/wkdkavishka-vue/1.webp","sha256":"910af30a3d732b56f5f1914499baab91e20c2ce52c282d5d1f581775c02e1090"},{"url":"/images/projects/wkdkavishka-vue/2.webp","sha256":"2d3829223ac0896f0f24f9ae97df651a0e3a484a24b419ff3eb0399ef7ce144f"},{"url":"/images/projects/wkdkavishka-vue/3.webp","sha256":"491634244815f3f1056ee1c41bed2a6ac1658d5ed90b936629846fecdb3d4e29"},{"url":"/images/projects/wkdkavishka-vue/4.webp","sha256":"c78ae593672b112a2c87bc55f333155f58a252b7b0c76a3d556ce961ae961aca"},{"url":"/images/pwa/desktop-1.png","sha256":"b458e602d280becaae75f63f6695e48a405bfc86c5082f5cb0e2e2243c365664"},{"url":"/images/pwa/desktop-2.png","sha256":"86f9cfb76d3d2f51c75223436c26089fdaa4fb4cdc24e8e5203a9ae2e1925ec4"},{"url":"/images/pwa/desktop-3.png","sha256":"31a753d4700c0ff89edb7a7701c1e521246c6cba04b5466ab4b4cfe624decdcd"},{"url":"/images/pwa/desktop-4.png","sha256":"beb512e5813f1a203a5754d9e23fb4f5c1d35858b1e0530953d132adde379ad5"},{"url":"/images/pwa/mobile-1.png","sha256":"46acd433df8d83cead5fdfeb11e008e132197a059410fd3a69ac0cfe74a533bf"},{"url":"/images/pwa/mobile-2.png","sha256":"ade270c0cb58ed095f41c40f3d52cc9f6e85cbe2607bd15438380f35bfd9d8d9"},{"url":"/images/pwa/mobile-3.png","sha256":"aea420cf2c98014d620303619d1585fcf7f9a7df6ba659b59b5aca94a652c148"},{"url":"/images/team/member-1.webp","sha256":"3b7b7f815974cc95f748416d0447d653473c69582131a9a9e34d20682e0d5759"},{"url":"/images/team/member-2.webp","sha256":"3b7b7f815974cc95f748416d0447d653473c69582131a9a9e34d20682e0d5759"},{"url":"/images/team/member-3.webp","sha256":"3b7b7f815974cc95f748416d0447d653473c69582131a9a9e34d20682e0d5759"},{"url":"/images/team/member-4.webp","sha256":"3b7b7f815974cc95f748416d0447d653473c69582131a9a9e34d20682e0d5759"},{"url":"/index.html","sha256":"55f1dae61ccf1761ef39a5da6f192db13935173c5388e4d5da548e200d7e318d"},{"url":"/index.txt","sha256":"4e3fb39955e97d4047ddaeadc2008e55ddabf26d1c12026bcc60e1322e09c00a"},{"url":"/manifest.webmanifest","sha256":"10976c042845ba7077b118514284d0ce311e1c11a716d01b725addcd49551d00"},{"url":"/next.svg","sha256":"55995dfad6ecb4945a1e856ddca03c5e16aa5bf13fd21b4df6a74ae79357bcfc"},{"url":"/offline.html","sha256":"cc309c8adb0e08ed9f03fb2a1667eed05b489b4293c89778f8bc844bc28b11af"},{"url":"/og/android-kiosk-device-owner.png","sha256":"c71dece3619fa4c044f8078ad955900596989b6f9eaa17e29616f273f5077cd8"},{"url":"/og/chrome-tab-extensions.png","sha256":"b75e3ee124d7c060b9fe4c58b8fbf63cfaa8cab581a1f5dda849f0b1709785f0"},{"url":"/og/field-service-gps-tracking-app.png","sha256":"6b0f70ee4342d938138062502131894d9e4162e5606a1d0f464cbe23d373e448"},{"url":"/og/gpt-shell-4o-mini.png","sha256":"237a127bb7eb9ff7f1f6589b6d29afcd3b94abb8b487e1e59bf5e58b58e84740"},{"url":"/og/home.png","sha256":"b0d134357121c770f5889964422b3fe8774d276b8089eb86432252ea476e4efa"},{"url":"/og/inventory-management-system.png","sha256":"ec3b2c4d3f87eee0df7b20dd73521df68b87ae3ee7f6238e3a289ae1924d17c2"},{"url":"/og/irs-self-assessment.png","sha256":"e20b62526d4b4e314434c61a45568c1184ed2e6b72b36ef6015441ef8471196a"},{"url":"/og/korean-class.png","sha256":"6a61e37f2416d638901da34b79a391a05c6934a56f5649cce82e57aa18ee68ac"},{"url":"/og/linux-desktop-tools.png","sha256":"7caa97926a36db5b34bbfda5680c72c45616b58a677be71180fc6d9902456cb3"},{"url":"/og/payment-terminal-launcher.png","sha256":"cc6e33357d4590731b4b62e4ea2ca836c16593f4f2e0af08aa46f1095937d61b"},{"url":"/og/sg-life.png","sha256":"9334c40be54bb15f31e0544ac42419d53396d9a65390d0d33a7b7b30e931e1a2"},{"url":"/portfolio.pdf","sha256":"778ae01dee45d1597c8d108cd250bfc6904ef81b81049bbe77424e774ff3c8a1"},{"url":"/projects/android-kiosk-device-owner.html","sha256":"9db66747a306e0f149cfcb2cde8601329cc53d9df8a760cd4d9845a5652fa4f6"},{"url":"/projects/android-kiosk-device-owner.txt","sha256":"f8a341f4ae66b2ac03600f7555a738446fb96030c10343650fcda1fd5faca95f"},{"url":"/projects/android-kiosk-device-owner/__next._full.txt","sha256":"f8a341f4ae66b2ac03600f7555a738446fb96030c10343650fcda1fd5faca95f"},{"url":"/projects/android-kiosk-device-owner/__next._tree.txt","sha256":"5bcfddde8684747371cd6346e05a64cec95197a63b8f148ceb0c01f7734759a5"},{"url":"/projects/android-kiosk-device-owner/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"3deceb7350703c4f98aa7090843095a4931df0aad578230ad9530b9a7ba2b417"},{"url":"/projects/chrome-tab-extensions.html","sha256":"4ff8a012f978b7f15e5fc9b6e6acc30c13d941f33719a54812cd549bdbab8b7d"},{"url":"/projects/chrome-tab-extensions.txt","sha256":"a4e29b568c1c1f62d2867acdbeb3c43590e3a8ac0d0ba481447c892bdf190ff8"},{"url":"/projects/chrome-tab-extensions/__next._full.txt","sha256":"a4e29b568c1c1f62d2867acdbeb3c43590e3a8ac0d0ba481447c892bdf190ff8"},{"url":"/projects/chrome-tab-extensions/__next._tree.txt","sha256":"59e0782adab9ebfedb2fec91ef3fcb280ddaebe42f41cca0aa0c3c06aaf96bf7"},{"url":"/projects/chrome-tab-extensions/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"f5c08f2555cc4c06fbcb4f2fbe618ef1bd25ab5716f96e8aa06f98447b4de4db"},{"url":"/projects/field-service-gps-tracking-app.html","sha256":"7e2c187c68f55fc27fe4220b6e40639caae252b668e7ba9e3ae8640cf6dc7644"},{"url":"/projects/field-service-gps-tracking-app.txt","sha256":"3a12d1ea351638093733a4835e6571982a51401605e571d3b265e0c8e6f414db"},{"url":"/projects/field-service-gps-tracking-app/__next._full.txt","sha256":"3a12d1ea351638093733a4835e6571982a51401605e571d3b265e0c8e6f414db"},{"url":"/projects/field-service-gps-tracking-app/__next._tree.txt","sha256":"e077415148fcb1d0f0052c9f5d24b1da5d52179222a6954c6f9aca427a362284"},{"url":"/projects/field-service-gps-tracking-app/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"66c807bab05ab0c5bf2fce61c63d6310c32244765bb4593e1ed760d11e40341a"},{"url":"/projects/gpt-shell-4o-mini.html","sha256":"95e16fdbeb3a8d4044c649c7517a98b387a798fb28834867f401e941a2826cda"},{"url":"/projects/gpt-shell-4o-mini.txt","sha256":"b81c14eacc1bbb3b7457d692ebb0e80cd9bb58d3a935c66ac69a65f1a9f876e2"},{"url":"/projects/gpt-shell-4o-mini/__next._full.txt","sha256":"b81c14eacc1bbb3b7457d692ebb0e80cd9bb58d3a935c66ac69a65f1a9f876e2"},{"url":"/projects/gpt-shell-4o-mini/__next._tree.txt","sha256":"1045cbd2ccd4d7ebf4b156b14f3355455d0d45502361bf56e53d7d6da0b36b94"},{"url":"/projects/gpt-shell-4o-mini/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"305ebfe1d451c44611be9376196808ff9f9c7fffc56e23ecfe11b75d37d2ae36"},{"url":"/projects/inventory-management-system.html","sha256":"9f38643c5ae06a7edc99178041a575de3f4008ec4e649ef213bb0d857198542b"},{"url":"/projects/inventory-management-system.txt","sha256":"c9d87e1dccd25017dddb52ecb20be16aefc9f22927bc6719afb831ab28cc974c"},{"url":"/projects/inventory-management-system/__next._full.txt","sha256":"c9d87e1dccd25017dddb52ecb20be16aefc9f22927bc6719afb831ab28cc974c"},{"url":"/projects/inventory-management-system/__next._tree.txt","sha256":"aa1df6ba2ff6688799460d66a79cbc776db82e71c1c00653606f024874e47522"},{"url":"/projects/inventory-management-system/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"ec66e9fe169811b3380b91b1b434f984983271bac22bdd612f14dbff9f3e0757"},{"url":"/projects/irs-self-assessment.html","sha256":"a95ff1db958cad439a7389160c8a90e1153bbcce1b8a6e73c72f16a9df08447f"},{"url":"/projects/irs-self-assessment.txt","sha256":"077830d1b713d214f15422d52a623f9de33ca4a99b3354f0318e1f6415affa12"},{"url":"/projects/irs-self-assessment/__next._full.txt","sha256":"077830d1b713d214f15422d52a623f9de33ca4a99b3354f0318e1f6415affa12"},{"url":"/projects/irs-self-assessment/__next._tree.txt","sha256":"647ebfb37b710b9a41b001e3f10c3dc12b97d679a169d9a1e651d0c26b44542e"},{"url":"/projects/irs-self-assessment/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"b2e823d88ba7ab0162ebf8b8246b11cee16cb6fe14c204e5403bc42bdd58204b"},{"url":"/projects/korean-class.html","sha256":"c3875067536898fb5cca8fd4069a8f787aadf386af9d39aeb6627ed64e5d85e4"},{"url":"/projects/korean-class.txt","sha256":"7ab601350455dc6f5c138c267e84ef6d31a092b47fe764ba6523442dcbeb47ca"},{"url":"/projects/korean-class/__next._full.txt","sha256":"7ab601350455dc6f5c138c267e84ef6d31a092b47fe764ba6523442dcbeb47ca"},{"url":"/projects/korean-class/__next._tree.txt","sha256":"8908c393d15f8798802589ccaf1dea3905591dd527eead6de3812290f8d35949"},{"url":"/projects/korean-class/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"6f8f7df5ae99482cb6cba60d8c388593fe300b877d1479a1e7c3607fef388e61"},{"url":"/projects/linux-desktop-tools.html","sha256":"4b9b43e2fd597c1f4d73618fe999496bc6c4abaa5cb28cb498690b53fc29a28c"},{"url":"/projects/linux-desktop-tools.txt","sha256":"873cc0626b5758485be62f356d50917e13783f84c3101c9564f4f73d7c0e3835"},{"url":"/projects/linux-desktop-tools/__next._full.txt","sha256":"873cc0626b5758485be62f356d50917e13783f84c3101c9564f4f73d7c0e3835"},{"url":"/projects/linux-desktop-tools/__next._tree.txt","sha256":"46d6963ef42fb8b3073a85d74142c99ffb421c22f44f2ff47085477066f729c8"},{"url":"/projects/linux-desktop-tools/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"d1f2d06cae44b99b08ed4a78beb474633609b5d04b5ed2315aa776b8c7723370"},{"url":"/projects/payment-terminal-launcher.html","sha256":"1f8552ba046ca30742f99c2fa6c996b8116145d5cc5fcc3a312368cab56e4e4c"},{"url":"/projects/payment-terminal-launcher.txt","sha256":"341b1e7fd72ac49ad535058fb4b0294d817c6267253676cd5d754cd94bb81a04"},{"url":"/projects/payment-terminal-launcher/__next._full.txt","sha256":"341b1e7fd72ac49ad535058fb4b0294d817c6267253676cd5d754cd94bb81a04"},{"url":"/projects/payment-terminal-launcher/__next._tree.txt","sha256":"c48705f4913fbe2e5d8cc1bb70cb068b67e081b8dccf07adb493da646d50bdef"},{"url":"/projects/payment-terminal-launcher/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"936eafd4df87b8d27d93c94dba428f5b7a91517be0d3d56a7bf09ce597c09f3a"},{"url":"/projects/sg-life.html","sha256":"00db4ca32f23efb6470134fd8fcc314d59056ba8961f8ceada64e845a9613eae"},{"url":"/projects/sg-life.txt","sha256":"955f56364515ae21836b0abd54591a1b7f4e39a44996ca5e11c5594114b51875"},{"url":"/projects/sg-life/__next._full.txt","sha256":"955f56364515ae21836b0abd54591a1b7f4e39a44996ca5e11c5594114b51875"},{"url":"/projects/sg-life/__next._tree.txt","sha256":"ddb20ff2584cc31ef94f6d4c58eb5eeeb67d110273d53dc4725c846d87ff27ca"},{"url":"/projects/sg-life/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"6af08657d3982a83d9768f3a8daeec00b92741773bea304aea084495b5dba112"},{"url":"/pwa-worker.js","sha256":"3195030b9442fcf016cdfd0111acd49dc6733baca49941e917b03ff25452c150"},{"url":"/robots.txt","sha256":"c65f117307eee6d6c04968c5e8e2336baf7552e43d5cdd9a3f898d3944aa6aac"},{"url":"/sitemap.xml","sha256":"5e4ee9e8dba8e7f8a4230ce4361defc2741e3f248b6c23b720c55262c6a5950a"},{"url":"/vercel.svg","sha256":"f081337b2fee635b455b63275406a3e7f39d6a014e25ad90dab5a67e62a12ac4"},{"url":"/window.svg","sha256":"644768c4aaeb4767bce293344eeb0c125fb804a94d801440424072202d85e3a1"}];
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
