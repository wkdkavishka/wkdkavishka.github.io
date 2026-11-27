// Shared engine: preparePwaExport() fills out/sw.js; pwa-worker.js freezes the
// Next build version. Keep these declarations on one line for both preparers.
const CACHE_NAME = "wkdkavishka-pwa-v1-a98c0ca6195989e25d48f8a8";
const PRECACHE_ASSETS = [{"url":"/404.html","sha256":"f1268f8ff4c494d624c9fae868880d626db2dd863a794bd84e4ab18773815fe9"},{"url":"/BingSiteAuth.xml","sha256":"32579827e9d2b93e0a21b9a8cbac07d3478589b220b9ec8dcb460762bd65c48a"},{"url":"/__next.__PAGE__.txt","sha256":"11b54e4b583a46e24def106ab9df674a7c3f9ccc45beb7cb7e51056bb24b48ff"},{"url":"/__next._full.txt","sha256":"f3066a59f8734e43337a78ca6d27c0b4c842de40cd9146f6ab8288ea0219ad92"},{"url":"/__next._tree.txt","sha256":"be9f74137ede0399ea86262c4948f23de0f4c83c56ff9ae3a299dda92f7ce293"},{"url":"/_next/static/b6AP7EU5w3fcT2lBzrmsZ/_buildManifest.js","sha256":"9476e0afd3f9da68a64e6ec58631191fd3eaca62c9f5a377e7517fe9a89e59ea"},{"url":"/_next/static/b6AP7EU5w3fcT2lBzrmsZ/_clientMiddlewareManifest.js","sha256":"5483e3295dc35dfe29ea932efc85341c916f10ff78ff5b0e965e003710893a4a"},{"url":"/_next/static/b6AP7EU5w3fcT2lBzrmsZ/_ssgManifest.js","sha256":"92e9502f1d993d2f48296b2dc2cdbd69d9e297c8c8404a1d6d16fa509d1108c4"},{"url":"/_next/static/chunks/092r-mewpaf3q.js","sha256":"30b1a7afdc2b4c18dbed0c12b4cbb9ca6e3b1b048440715e434664cb534d6f11"},{"url":"/_next/static/chunks/0cz1d0mv5g_q7.js","sha256":"0973c1d64c88adc8e3c950410cb58b288f72118d5965b78049438deb8f2f9683"},{"url":"/_next/static/chunks/0jxzbn56kpjkf.js","sha256":"416272c29a64eb495845a998bbe7a6f9e85dd18935f4c6b9dd93b49e4d08cd93"},{"url":"/_next/static/chunks/0leefzyevhih3.js","sha256":"dca08826c9ca5e877ee7ded1ebccc9f31d48f7b4321ac4d1a948d0413fae01c7"},{"url":"/_next/static/chunks/0zlip2jes-oq1.js","sha256":"181633f4ea81182216e8ee11b9f046575ccd3e507af802157bc765ae5a0e2b64"},{"url":"/_next/static/chunks/18teplb2ke1x2.js","sha256":"62af5b401e5d390769b63603b43bd03b683823f2d8fe62c4887e8ab4001e96c0"},{"url":"/_next/static/chunks/1j3_0sqfj90h2.js","sha256":"7a96b57e8a32b2738602e130980e75c99dfe5d840bb3ba91d36bf4e3bfe60b38"},{"url":"/_next/static/chunks/1jox-qfarjn9r.js","sha256":"39bd9da59d62354830c7f4874c9ba1499eb010e2ee493246aef37a556d9a62ea"},{"url":"/_next/static/chunks/1pcw6gskne7pf.js","sha256":"6dbc40a359da7b95b1b5d62b81884098dc2a8bc342bb4493b87712049f4fac08"},{"url":"/_next/static/chunks/1ua2kfq9s-me6.js","sha256":"890002b4e7ccf6ef3ddebcb8a0eab7953d11231160dbd71c67c8bf43ee237442"},{"url":"/_next/static/chunks/1xesltuyj_2sj.js","sha256":"9ea663449ef1a04010911c71e38c3fe3d6124e3b243ae93f9540d1eaefed1e66"},{"url":"/_next/static/chunks/2kg-zlr1nxxxj.js","sha256":"f732ea4b8a3ca713b6d584a37f15080ba9e1620a6f2d53dc257458eff07ed15b"},{"url":"/_next/static/chunks/2urr6-fm2smyv.js","sha256":"ee86b6e5631f8350cee1c67bc13f15a6b1c1da8b99c302533c5abe1da4130f78"},{"url":"/_next/static/chunks/39elx3vqh7hrd.js","sha256":"f30464da58deb50920e67e982b5362c9a6e21f66e676325fc8294f9073b6673a"},{"url":"/_next/static/chunks/39l6fnbh76wet.css","sha256":"7b27ed2fef8780f5930f943b68cf688b209aa1e353c53cbb458aa0fce3e9bd0b"},{"url":"/_next/static/chunks/3gc3mnhfffojg.js","sha256":"4caee3c5c1509fd0f42d5c3b449cb81d400b6325dfa8f5fdf2fc3430ec029d5b"},{"url":"/_next/static/chunks/3qsw1t9r5au36.js","sha256":"5abeb9e37420d31c792fd1a568677e7820bac8f5ba3e0d6b485beb78baeacaed"},{"url":"/_next/static/chunks/3ydiogt47iook.js","sha256":"35e02a29ffff28daf2030a4855cfdfb0eef347a1bef2bef1fdffd60de418f65d"},{"url":"/_next/static/chunks/452cpu_7-jbvp.js","sha256":"27ccf044cf30af2c5837ef6fd8567199a241850da3041d9f0ebe1dd85a0c291b"},{"url":"/_next/static/chunks/turbopack-077hmtqrhcoji.js","sha256":"3f0ba0c36a0758d76b55b6717fd77e65f46ae1295bb22fa441476e1eb7854d51"},{"url":"/_next/static/media/07c7676b89ed2778-s.p.2bn3s6zvc0dyp.woff2","sha256":"c940764593d0fe5d596be327ca7558855e018039fb78509aa21921fd3644c3e4"},{"url":"/_next/static/media/2fb76073e23fd9e4-s.3lvt2whj97whp.woff2","sha256":"a2e2c783ca6f9c20486e81e72a279203e86730bbf8f01ff6a5ee9dbd09e1c271"},{"url":"/_next/static/media/45462fd7b7c12654-s.0k62hbripvv8p.woff2","sha256":"8db00ff46c67b22cda8bed865acf7077651cac8d2841d5b40980556b48961931"},{"url":"/_next/static/media/46a9e2f250689b4a-s.0-dom-5bn10r2.woff2","sha256":"fccca918fea40089dacadc7045861314d1a6bc91f1f323cc1eeb22ebcdb321b5"},{"url":"/_next/static/media/6131cbbf5549afa2-s.2uwcyprjm3xu3.woff2","sha256":"46dd4cdca58c26ae87cc6927657bf83b2e8abfc39ffd0ab176e301a8d28d22bf"},{"url":"/_next/static/media/76b70a1dbe058eb5-s.1y4-pdgsjb-pw.woff2","sha256":"aebf2ab4a4ce6810d73c1ac7be7cafb4e5ec4cee2d6db5fb3e09691747ec4bd6"},{"url":"/_next/static/media/8bcddb47c8219945-s.1spbknb88wd48.woff2","sha256":"9e38b3f1575daba3435ef09d33a202585ed5bd204bd0a8c744955c750c2b9091"},{"url":"/_next/static/media/ba63f6a0e436df8e-s.3-6t-g6q0vh0a.woff2","sha256":"a28eb6d3ccb534ae0c94ca999371df024aab60b08c3c8a5720ee9e32fa0faaa2"},{"url":"/_next/static/media/c0680f1bdb3a2e90-s.p.1gsd1jahc5dg_.woff2","sha256":"92684e4acde79ef07758cd09380b7e01e9824d8b061eddeda046f78c166d7b12"},{"url":"/_next/static/media/favicon.2fcpk4-xg61hj.ico","sha256":"4bdb962c57df903dbeb54894e24d67a9274ffc144685a6df6ee3eb02395676f3"},{"url":"/_not-found.html","sha256":"f1268f8ff4c494d624c9fae868880d626db2dd863a794bd84e4ab18773815fe9"},{"url":"/_not-found.txt","sha256":"bfcf30c94c64be0dda1f01b08f2155a9914fd0af7db0a1cb6203b096c1ae5b52"},{"url":"/_not-found/__next._full.txt","sha256":"bfcf30c94c64be0dda1f01b08f2155a9914fd0af7db0a1cb6203b096c1ae5b52"},{"url":"/_not-found/__next._not-found.__PAGE__.txt","sha256":"7d54acf3ad6fa790cba36bfa7251146353e34e78ea9aad1f90a580cb918cbee6"},{"url":"/_not-found/__next._tree.txt","sha256":"beb089d245488cc09fa2fc6f964df4f40dcf4c99efb67e24d7184667b7c06366"},{"url":"/browserconfig.xml","sha256":"bd828f72f9a53651fcb04c15cf5046d9385dd7adb4f6ae15d67fd98d2ba161d5"},{"url":"/contact.vcf","sha256":"079ca2f10faef6bee32529099dd85bcdeeafddcb1e823d8988c957305d95388a"},{"url":"/favicon.ico","sha256":"4bdb962c57df903dbeb54894e24d67a9274ffc144685a6df6ee3eb02395676f3"},{"url":"/file.svg","sha256":"2b67812c325c199a02536cdbeea0c593a72f707d323b72ee3e08dbab06753bd4"},{"url":"/globe.svg","sha256":"b614b9bf183925957661ac851498fe1d8029fd43a62fbfed86f9e2624a57e7cf"},{"url":"/googleaf175b30968c86d2.html","sha256":"6488c84031b49be37936d2e18670521798dd25f0d04410303dae4ee17f8661fd"},{"url":"/images/meta/android-chrome-192x192.png","sha256":"1ffa5b65cac51876269baba560731230b2352777fbcc24e6d012e24fe7cd5beb"},{"url":"/images/meta/android-chrome-512x512.png","sha256":"c0ea013e9c7e75384552b94824d4626dab8102a8a2337f4800e9e5c07cdf9432"},{"url":"/images/meta/apple-touch-icon.png","sha256":"8df87612a1a6fffadffa88fbb386b4f1530b969c509b137a85e3056fd1ca84da"},{"url":"/images/meta/favicon-16x16.png","sha256":"b6d75de845448431e406e129087801177c96d2fc35edcff7498b77b811d77d2d"},{"url":"/images/meta/favicon-32x32.png","sha256":"0974d1129ac0f6b4a53d82692ce60a079af1eb6948c7f0f5c9bcd158d3c50e77"},{"url":"/images/meta/mstile-150x150.png","sha256":"d97827a279f2af6ffdbccda943b04f19355a85ebea0eff44820118df6a7faa6d"},{"url":"/images/meta/mstile-310x150.png","sha256":"e96f5caa9f0b00c11965b467e2cfdc0e2791bf71212dccb7baeec64ac7cfd436"},{"url":"/images/meta/mstile-310x310.png","sha256":"e2c4b1a36000ba09cd73e408fe5afe11f7c3a1e90d9835e8f86ee1423ef2b55c"},{"url":"/images/meta/mstile-70x70.png","sha256":"ee951c99397baec5513df07b41ae1acf7811c886f9b327dcd8b9a032bfcbc58f"},{"url":"/images/meta/og-image.jpg","sha256":"adcd039b0a7f2b0053b3ddcb088a1fdbd8965620cbe3f00a372ccaa8a9dac93c"},{"url":"/images/profile/profile.webp","sha256":"8c929b9934fb9c0a5cc3f109e1508c7bb9200fcd504efe2f4d443aa2cc50f087"},{"url":"/images/projects/gpt-shell-4o-mini/1.webp","sha256":"3363fea38fb79bc49c0e1272292faa7a81fba151d27239777249369a45f3f463"},{"url":"/images/projects/gpt-shell-4o-mini/2.webp","sha256":"b0a96edf2b4e5b68c044ef6c4472fcb76723619a9fd9cc0ff78379d24260e11f"},{"url":"/images/projects/gpt-shell-4o-mini/3.webp","sha256":"19fd3d660483cd85b2c5b83b2065aed183ab5944f2e6c9c8097580a0e91e7a57"},{"url":"/images/projects/gpt-shell-4o-mini/4.webp","sha256":"94c533faf328491e71fb3b802e282a2fd5978821dea4c52857b7d23b4a4f41cd"},{"url":"/images/projects/irs-calculator/1.webp","sha256":"6f181f962ddb14c5b4d7bc3eb47318dcf6b38307573c5fde5922b44fc83da6cc"},{"url":"/images/projects/irs-calculator/2.webp","sha256":"37a9359de4bf553a94f948a5ef73b6bf50687873268270e5f22307013dc64690"},{"url":"/images/projects/irs-calculator/3.webp","sha256":"0004513976a6c488ca3746ba5a3ba73fea901b20a6685fc60fc30491d87ce852"},{"url":"/images/projects/korean-class/1.webp","sha256":"89877ebdc166b0afcdae70e66854847de9e51573f257a298d286eb65a40f9467"},{"url":"/images/projects/korean-class/2.webp","sha256":"c21bb4d7e8b3e5b716226e0e8942f7fc818531a6fea4b8f610726fea29d3243a"},{"url":"/images/projects/korean-class/3.webp","sha256":"83c28d190a6415be652a036d2b5977691a89256cba61e13f4ffbc9a72ddde606"},{"url":"/images/projects/korean-class/4.webp","sha256":"6c9a09ae1f8c3d11eb8ab9ca716e02cab7129323056ea0c18fc412d0bbb2f375"},{"url":"/images/projects/korean-class/5.webp","sha256":"e3101bd0a6cb6825d04785a10cc636045f056e0312f03be1f2d8c5476d67c76b"},{"url":"/images/projects/korean-class/6.webp","sha256":"7df6e2cf4a8638690436b499f4664e03ca727e8e1cdc49d005c03b8286d9fa96"},{"url":"/images/projects/sg-life/1.webp","sha256":"a866df59cb7a9c0baebbf0dcb24e754d1891f8f66d8c96e9cddc8d6e0192d04f"},{"url":"/images/projects/sg-life/2.webp","sha256":"9a6ebac2d355bf69702f0cef63b50671bddf9efef84b3c37830d9fbc7cc3dc39"},{"url":"/images/projects/sg-life/3.webp","sha256":"2e8f3a7604bcdb27015127a180e5e4ccab63465e52d5e5da4337c6c6b4c86d9b"},{"url":"/images/projects/sg-life/4.webp","sha256":"b06aad28a55558819f1b338e0d45383831db31591c341ab735a839f280a4c7af"},{"url":"/images/projects/wkdkavishka-vue/1.webp","sha256":"910af30a3d732b56f5f1914499baab91e20c2ce52c282d5d1f581775c02e1090"},{"url":"/images/projects/wkdkavishka-vue/2.webp","sha256":"2d3829223ac0896f0f24f9ae97df651a0e3a484a24b419ff3eb0399ef7ce144f"},{"url":"/images/projects/wkdkavishka-vue/3.webp","sha256":"491634244815f3f1056ee1c41bed2a6ac1658d5ed90b936629846fecdb3d4e29"},{"url":"/images/projects/wkdkavishka-vue/4.webp","sha256":"c78ae593672b112a2c87bc55f333155f58a252b7b0c76a3d556ce961ae961aca"},{"url":"/images/pwa/desktop-1.png","sha256":"b458e602d280becaae75f63f6695e48a405bfc86c5082f5cb0e2e2243c365664"},{"url":"/images/pwa/desktop-2.png","sha256":"86f9cfb76d3d2f51c75223436c26089fdaa4fb4cdc24e8e5203a9ae2e1925ec4"},{"url":"/images/pwa/desktop-3.png","sha256":"31a753d4700c0ff89edb7a7701c1e521246c6cba04b5466ab4b4cfe624decdcd"},{"url":"/images/pwa/desktop-4.png","sha256":"beb512e5813f1a203a5754d9e23fb4f5c1d35858b1e0530953d132adde379ad5"},{"url":"/images/pwa/mobile-1.png","sha256":"46acd433df8d83cead5fdfeb11e008e132197a059410fd3a69ac0cfe74a533bf"},{"url":"/images/pwa/mobile-2.png","sha256":"ade270c0cb58ed095f41c40f3d52cc9f6e85cbe2607bd15438380f35bfd9d8d9"},{"url":"/images/pwa/mobile-3.png","sha256":"aea420cf2c98014d620303619d1585fcf7f9a7df6ba659b59b5aca94a652c148"},{"url":"/images/team/member-1.webp","sha256":"3b7b7f815974cc95f748416d0447d653473c69582131a9a9e34d20682e0d5759"},{"url":"/images/team/member-2.webp","sha256":"3b7b7f815974cc95f748416d0447d653473c69582131a9a9e34d20682e0d5759"},{"url":"/images/team/member-3.webp","sha256":"3b7b7f815974cc95f748416d0447d653473c69582131a9a9e34d20682e0d5759"},{"url":"/images/team/member-4.webp","sha256":"3b7b7f815974cc95f748416d0447d653473c69582131a9a9e34d20682e0d5759"},{"url":"/index.html","sha256":"9fa1eb69afc4ccd9d84f027d8aa9011a6781eedae581520b047fbe989c5716c4"},{"url":"/index.txt","sha256":"f3066a59f8734e43337a78ca6d27c0b4c842de40cd9146f6ab8288ea0219ad92"},{"url":"/manifest.webmanifest","sha256":"c81af6eb9c21a2895932666ce251f6d29c6d605fc1142c10cf86cb9cda80a42b"},{"url":"/next.svg","sha256":"55995dfad6ecb4945a1e856ddca03c5e16aa5bf13fd21b4df6a74ae79357bcfc"},{"url":"/offline.html","sha256":"f52a3a6671df7909031bb9f76cb9494fc8b74586867f873eb26ef3f9fe04593b"},{"url":"/og/android-kiosk-device-owner.png","sha256":"c71dece3619fa4c044f8078ad955900596989b6f9eaa17e29616f273f5077cd8"},{"url":"/og/chrome-tab-extensions.png","sha256":"b75e3ee124d7c060b9fe4c58b8fbf63cfaa8cab581a1f5dda849f0b1709785f0"},{"url":"/og/field-service-gps-tracking-app.png","sha256":"6b0f70ee4342d938138062502131894d9e4162e5606a1d0f464cbe23d373e448"},{"url":"/og/gpt-shell-4o-mini.png","sha256":"237a127bb7eb9ff7f1f6589b6d29afcd3b94abb8b487e1e59bf5e58b58e84740"},{"url":"/og/home.png","sha256":"b0d134357121c770f5889964422b3fe8774d276b8089eb86432252ea476e4efa"},{"url":"/og/inventory-management-system.png","sha256":"ec3b2c4d3f87eee0df7b20dd73521df68b87ae3ee7f6238e3a289ae1924d17c2"},{"url":"/og/irs-self-assessment.png","sha256":"e20b62526d4b4e314434c61a45568c1184ed2e6b72b36ef6015441ef8471196a"},{"url":"/og/korean-class.png","sha256":"082b357f34074051c02bb231a3c1d613aa1f58e78ec92b1c3507ebd3760549dc"},{"url":"/og/linux-desktop-tools.png","sha256":"2850e3f6b976bab1b69463a4037a4c6637ab5601ee4baa465359870f140f5547"},{"url":"/og/payment-terminal-launcher.png","sha256":"cc6e33357d4590731b4b62e4ea2ca836c16593f4f2e0af08aa46f1095937d61b"},{"url":"/og/portfolio.png","sha256":"0b6d10ed18cdbe765420b36967dc8323470ddceeb40d1a2eb1b1bac381814bc8"},{"url":"/og/sg-life.png","sha256":"9334c40be54bb15f31e0544ac42419d53396d9a65390d0d33a7b7b30e931e1a2"},{"url":"/portfolio-artifacts.txt","sha256":"5b7b15734ea61d822e16021ea21bd8a2f91ea92cf034e57665b116f4bb4a472b"},{"url":"/portfolio-document.html","sha256":"939f8f895964288499ffcd2a7ef8bb010a76aa907a2670d2c17de2983f658fdd"},{"url":"/portfolio.html","sha256":"aee456b6d70e7b0145290ecb52300a0ddd698c79b4b7316a708004a53e8191fb"},{"url":"/portfolio.pdf","sha256":"a33aa913b154e0c478ba2664783660de17b88a1bf90d1c4be7923d237be64bdb"},{"url":"/portfolio.txt","sha256":"33cf65beefa3909810c20b039ce33388ecec65704944e41439e77601db6f617d"},{"url":"/portfolio/__next._full.txt","sha256":"33cf65beefa3909810c20b039ce33388ecec65704944e41439e77601db6f617d"},{"url":"/portfolio/__next._tree.txt","sha256":"40887f0efc2485c22f26830cca3ec2b106fa82dba273801b2c9a77939ca5305d"},{"url":"/portfolio/__next.portfolio.__PAGE__.txt","sha256":"ee0addb2b82d939a3a96f233feed77a7868cf3d166e65ea046520d9518775992"},{"url":"/portfolio/index.html","sha256":"aee456b6d70e7b0145290ecb52300a0ddd698c79b4b7316a708004a53e8191fb"},{"url":"/projects/android-kiosk-device-owner.html","sha256":"0ba226b91a0487eae4915ed0578fe0169ffddd9795efa87462c56371ea1503ac"},{"url":"/projects/android-kiosk-device-owner.txt","sha256":"63978fcfeffb3529ea07bdc77246d5547ae9822fbbb9ad222b5fc5213095b74e"},{"url":"/projects/android-kiosk-device-owner/__next._full.txt","sha256":"63978fcfeffb3529ea07bdc77246d5547ae9822fbbb9ad222b5fc5213095b74e"},{"url":"/projects/android-kiosk-device-owner/__next._tree.txt","sha256":"c2ccd97d2ba28653eae2510cf19e72f5f6eaeee782942abb59fb6ab96cfe5456"},{"url":"/projects/android-kiosk-device-owner/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"df5e2bdcc85123b6afbbfab790b6eff5a06e24ea8a8373321c77346f249f0118"},{"url":"/projects/chrome-tab-extensions.html","sha256":"1c3c131881ba75a1eebd9d6dd6cede608639c89a9264c9f979b23a2e8283797c"},{"url":"/projects/chrome-tab-extensions.txt","sha256":"dc7f04d50ebef7b5f5c87d360d1dc0dc713b08a39b39e2cc5e7ea397ee405f20"},{"url":"/projects/chrome-tab-extensions/__next._full.txt","sha256":"dc7f04d50ebef7b5f5c87d360d1dc0dc713b08a39b39e2cc5e7ea397ee405f20"},{"url":"/projects/chrome-tab-extensions/__next._tree.txt","sha256":"a0a807e4a3edc164ef79ea964d29bc2218ed60c18be799f4b041fcb57eed7310"},{"url":"/projects/chrome-tab-extensions/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"4b3848a071ebcf3e833ab501c0d149e66c6b63f9e4e35a382d9e652da59fc456"},{"url":"/projects/field-service-gps-tracking-app.html","sha256":"c703231379bb662e9c8809353c7600c39ddcbf94e5abf087181ab0a1c2a5c5ba"},{"url":"/projects/field-service-gps-tracking-app.txt","sha256":"c35384a45252681c75927cdedae7fd647d6d48f744a67cce79a3c274ea21003f"},{"url":"/projects/field-service-gps-tracking-app/__next._full.txt","sha256":"c35384a45252681c75927cdedae7fd647d6d48f744a67cce79a3c274ea21003f"},{"url":"/projects/field-service-gps-tracking-app/__next._tree.txt","sha256":"624a9face3bbc0a5511f6fef1a5c4105044a347508e20f1df863793778c6e26e"},{"url":"/projects/field-service-gps-tracking-app/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"75a20c24162d60bc0de9e7576372acf7a7457ae7a3a993a305c4d7849b578a74"},{"url":"/projects/gpt-shell-4o-mini.html","sha256":"58433c1cc688a4a99255e20e667bc370203f232c1cced0697c225ad7cef5216f"},{"url":"/projects/gpt-shell-4o-mini.txt","sha256":"ac4e82809ac1c89d8cca9a2590531892a31507ab4ce97ef928f46a897e3468fc"},{"url":"/projects/gpt-shell-4o-mini/__next._full.txt","sha256":"ac4e82809ac1c89d8cca9a2590531892a31507ab4ce97ef928f46a897e3468fc"},{"url":"/projects/gpt-shell-4o-mini/__next._tree.txt","sha256":"631d7abbd947b047165f3d8552425a81135244987acb47f1172eb7963f3ff806"},{"url":"/projects/gpt-shell-4o-mini/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"a1fbc1d262402cad51cba6a426df2e8d93c4bc4b63c4ce074ad121b8a24eab5e"},{"url":"/projects/inventory-management-system.html","sha256":"fb4f846174f68e236551dff78ac667bb20e73085e5a507feb2ff721e7f36fc90"},{"url":"/projects/inventory-management-system.txt","sha256":"aeb637f67dea818a9cf7b4fa416b067d50bdfbf02365a0dd7a4421c14701bfa4"},{"url":"/projects/inventory-management-system/__next._full.txt","sha256":"aeb637f67dea818a9cf7b4fa416b067d50bdfbf02365a0dd7a4421c14701bfa4"},{"url":"/projects/inventory-management-system/__next._tree.txt","sha256":"93e2fac1e4fe0fa062c798f2df39c946c3d249fa3fd92f0a37212a6395e216ad"},{"url":"/projects/inventory-management-system/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"85ce779a06aec0fba075d6f898f2183451a53a16e98bcec0585fb04584b270c8"},{"url":"/projects/irs-self-assessment.html","sha256":"314dd4d45a93ad6d911b9dc760a450e78f469a03eb7f1cb2d8c8d7d8d2420e21"},{"url":"/projects/irs-self-assessment.txt","sha256":"86be643345438b27b35575c46c45b92e6372f0934535e77cf36dec6cd333ee33"},{"url":"/projects/irs-self-assessment/__next._full.txt","sha256":"86be643345438b27b35575c46c45b92e6372f0934535e77cf36dec6cd333ee33"},{"url":"/projects/irs-self-assessment/__next._tree.txt","sha256":"6a79a878b9cd4edd783c7275dcec22b2c1e934548123548251d36a581379bbb4"},{"url":"/projects/irs-self-assessment/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"b2e6355d75c14374688eb2b491032b4fefcf1fd297c44f9e05be50e18c9bbcfe"},{"url":"/projects/korean-class.html","sha256":"90ece5fe5df4f0870e57f835cc2d2f00efd6e017b1ebd65eda49b532d3473f3e"},{"url":"/projects/korean-class.txt","sha256":"cec51f9dcd7414c9b06e6062aa4426387d93ad099deb52b19d61d2b0ab2de60e"},{"url":"/projects/korean-class/__next._full.txt","sha256":"cec51f9dcd7414c9b06e6062aa4426387d93ad099deb52b19d61d2b0ab2de60e"},{"url":"/projects/korean-class/__next._tree.txt","sha256":"f68e9c543b2f52523f6bf7557e3469b52cee51f58858f66de87f7a9088fbec01"},{"url":"/projects/korean-class/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"2d34b39fc0be6a5dc2eaf593788f9d9892869368fb691e0a744285a2a1bb5268"},{"url":"/projects/linux-desktop-tools.html","sha256":"865ba21b454343f547b4ce8add8a81aefa4bd4a252f2663bf74709307b776593"},{"url":"/projects/linux-desktop-tools.txt","sha256":"fb739d40a900f18ce7875bb8f39931b943c30062350d92fb3e39c5137a3143fe"},{"url":"/projects/linux-desktop-tools/__next._full.txt","sha256":"fb739d40a900f18ce7875bb8f39931b943c30062350d92fb3e39c5137a3143fe"},{"url":"/projects/linux-desktop-tools/__next._tree.txt","sha256":"0855686bceb371d84456a2d1aac535307342203f16d67d2df3376f772a8f2fa1"},{"url":"/projects/linux-desktop-tools/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"e085cb86bed708a74b02642b37cad6227dad43399be9194d91087e655455c22b"},{"url":"/projects/payment-terminal-launcher.html","sha256":"6da398837d9c2af4da7576e93ecbd129f2e56e12b89b3ec3624c4c52f9b04e92"},{"url":"/projects/payment-terminal-launcher.txt","sha256":"f35c05a3f3b5734287c371498113d28ec6c9fef9e6a513a09ad4d42442c6d0d2"},{"url":"/projects/payment-terminal-launcher/__next._full.txt","sha256":"f35c05a3f3b5734287c371498113d28ec6c9fef9e6a513a09ad4d42442c6d0d2"},{"url":"/projects/payment-terminal-launcher/__next._tree.txt","sha256":"16b9bf01ef6d2fd323c6864d1a04fffa8e841795539c0ab4315164798e922c1d"},{"url":"/projects/payment-terminal-launcher/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"ee1e6ed761498e3801faddcddf89cbeee8d3a007067eb96a6a70df01660b38a1"},{"url":"/projects/sg-life.html","sha256":"4a688d83624bfe146d566159a8ba195b92a682495ae1a9f9e54f29b78da33723"},{"url":"/projects/sg-life.txt","sha256":"2c64a2640212eb34283c194d2fc355de4ce41e242e3eecf15381079c3dd8960b"},{"url":"/projects/sg-life/__next._full.txt","sha256":"2c64a2640212eb34283c194d2fc355de4ce41e242e3eecf15381079c3dd8960b"},{"url":"/projects/sg-life/__next._tree.txt","sha256":"686faa0a0fec97def15b18222748ea160ff1d634966be4d6af9fb02a160caa1d"},{"url":"/projects/sg-life/__next.projects.%24d%24slug.__PAGE__.txt","sha256":"2fa53a5db23c471b031ab7217ddd2e0fc6ed5abc03a6c28d4c3cc19a15cb4214"},{"url":"/pwa-worker.js","sha256":"c44f2169e2dd62d35b6d353f4c650977c78247844fcc6f07948dfd4359624862"},{"url":"/robots.txt","sha256":"c65f117307eee6d6c04968c5e8e2336baf7552e43d5cdd9a3f898d3944aa6aac"},{"url":"/sitemap.xml","sha256":"5e4ee9e8dba8e7f8a4230ce4361defc2741e3f248b6c23b720c55262c6a5950a"},{"url":"/vercel.svg","sha256":"f081337b2fee635b455b63275406a3e7f39d6a014e25ad90dab5a67e62a12ac4"},{"url":"/window.svg","sha256":"644768c4aaeb4767bce293344eeb0c125fb804a94d801440424072202d85e3a1"}];
const PWA_MODE = "static";
const CACHE_PREFIX = "wkdkavishka-pwa-v1-";
const CLIENT_CACHE = "wkdkavishka-pwa-clients-v1";
const MANIFEST_URL = new URL("/__pwa_manifest__", self.location.origin).href;
const CLIENT_URL = new URL("/__pwa_clients__/", self.location.origin).href;
const OFFLINE_PAGE = "/offline.html";

let installProgress;
let lastProgressReport = -Infinity;
let progressTimer;

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
  let saved = 0;
  let failure;
  installProgress = { saved, total: assets.length };
  reportInstallProgress();
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
        installProgress = { saved: ++saved, total: assets.length };
        reportInstallProgress();
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

async function portfolioAsset(url, hash) {
  // The first iframe navigation may have no client ID. Use the artifact's
  // digest rather than the tab mapping, which may point to a newer deployment.
  const path = new URL(url.pathname, self.location.origin);
  const names = [CACHE_NAME, ...(await caches.keys()).filter((name) =>
    name !== CACHE_NAME && name.startsWith(CACHE_PREFIX))];
  for (const name of names) {
    const manifest = await readManifest(name);
    if (!manifest?.activated || !manifest.assets.some((asset) =>
      asset.url === path.pathname && asset.sha256 === hash)) continue;
    const response = await caches.match(path, { cacheName: name });
    if (response) return response;
  }
  return null;
}

async function serveRequest(event) {
  const { request } = event;
  const navigation = request.mode === "navigate";
  const url = new URL(request.url);
  const hash = url.searchParams.get("v");
  const versionedPortfolioAsset =
    ["/portfolio-document.html", "/portfolio.pdf"].includes(url.pathname) && /^[a-f0-9]{64}$/.test(hash ?? "");
  let cache;
  let imageFallback;
  try {
    if (versionedPortfolioAsset) {
      const cached = await portfolioAsset(url, hash);
      if (cached) return cached;
    } else {
      const cacheName = navigation ? CACHE_NAME : await clientCacheName(event.clientId);
      if (navigation) {
        // Storage pressure must not turn a working online page into a failed load.
        await pinClient(event.resultingClientId, cacheName).catch(() => {});
      }
      const manifest = await readManifest(cacheName);
      cache = await caches.open(cacheName);
      imageFallback = manifest ? optimizedImagePath(request, manifest) : null;
      const path = manifest ? assetPath(request, manifest) : null;
      if (path) {
        const cached = await cache.match(new URL(path, self.location.origin));
        if (cached) return cached;
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
  } else if (event.data?.type === "PWA_INSTALL_STATUS" && installProgress && event.source?.type === "window") {
    sendInstallProgress(event.source, installProgress);
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
