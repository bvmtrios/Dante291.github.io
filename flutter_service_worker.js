'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a08b1a9443db0ad41dc6dddee81eef3e",
".git/config": "479d60fc68c0ceed1eddd79c1dc2fda0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "00f6a19d8bfdcdad383260c6aca7781d",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0bc51ce32ccd429d022f987a65414357",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3506efe48cc84b6aa9851a6f4816c8a4",
".git/logs/refs/heads/main": "65b68368bf97e0ab3d1600c0428f594a",
".git/logs/refs/remotes/origin/main": "c206bf1c6d86f3de1f1ae374e793ff89",
".git/objects/01/d0d52d690d11c5502c6c05edf8e6527b817813": "dff91b7445bd228c01606f00b11a5b24",
".git/objects/03/359bc51b71b9052b5dd9a12ca2d890adcdcd45": "15e4d983e4607f7447e5eda255c0d1a1",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/07/24b6c0c1af459392ac459dbde0b9289592d993": "7dda567dad47112b47ca7b0580ff2908",
".git/objects/08/939b41299067cdcc25771183eed26b06267af1": "4373d99c8adcbeb41f03f02230d5cbe0",
".git/objects/09/7cbf751a86e052a5853f5316b8d44d14285199": "60c56e344e015749100141f5b0f1d1f9",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/1e/dc4358134f7597cb829a3ec8c032eaf4caafdf": "c34d52b6569b7c5beb69784631539a47",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/32/d4c7933de5cdca709fa6daed760ddd58a912a8": "97bef28fa82024be5a44e9a6b0ffcbaf",
".git/objects/37/16ee12007bbc262155b934a145a3f30bda8a66": "18ca0eb58f6693d30c63d2da0f2c7cfa",
".git/objects/39/4a171f9483652ea1c85f7e41a20b0b6faca70e": "a6246c7e339fb99ab42af8aad27e6968",
".git/objects/39/fd136b4f050b15dc69683e673a9ae1a3657e24": "221f435ee2cd67360cda049d7d117c2b",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3b/4413f3fffeeb5222486b1349d81d594e5ac41e": "a756bd4d19b1068e12fc078f8e8c641c",
".git/objects/3b/ea4d8b83428c3de28792057a0825a6d9b3e1ec": "784ff0d920caba0deecb6385b9f0db5b",
".git/objects/3d/2c97e7fab503111c34401b356e6501415f0575": "bc75b032b9a3112af94b31ade0f9c88d",
".git/objects/3f/222c5fe80239301497f0da4b3421fd7313fbc8": "aac1e35e4fca4585bf3b4366fd4e224a",
".git/objects/41/dd972772498a9bd180248e1099d2526d0a2b44": "6dee0cc24d62937dfa24fe43db82bbbd",
".git/objects/43/2c4ae55f3d01b36358124fc415a64f0ea4ec42": "9aeb3365e8c69cacd0bbbea14f75aee6",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/45/c5c2d601aae13dafb2ef8091bb93513d1777cf": "542843c9bb18d6379df155c39ac3efaa",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4f/a1e8bb2e7c790f62bf41d8e4bf211b3b899c13": "319ecaf0783298279d8efc18e14f8740",
".git/objects/51/609ec726331f2129401cd5392bc4d6c9de19d7": "8317f0cc83e52810c9391a047893f23b",
".git/objects/52/9ff2a69faa50be1c597074a61001dc0622ead2": "9ec317a7e5faf64025a2c68e9bf8c817",
".git/objects/52/b57771ad798a6913654979827f83df77de657f": "caf1bb0665bb460b2c29ffe60a8a82db",
".git/objects/53/1ec0165e0318de3691f33489cd1efd9baf7251": "701f912b580b9672fdfc2ef9a9ee7982",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/57/d64d66b8cd0ec9fc25a68621704ecadc9a82fc": "992fb9ef07622fe689327a20f5a53e4e",
".git/objects/5c/57cf8585f9ae4bddcc7b7a0dc455a572d215ee": "ad5fb9d1ab2785fcf3d05d5c48779511",
".git/objects/5c/f13f4ef648486541bd5d93254f227a6ba957bb": "a4f4551ef2c735d253082493316162da",
".git/objects/5d/19942d71b6d57d4be8565c4fa2991336a22088": "567a5b5ced3c204c47e8d70abe6a57f4",
".git/objects/5f/b1ddb3d86d53ed2c1a9b05cc803a54b26ae1b4": "ab4e764eb985e7a42c9de5d8becade48",
".git/objects/62/04ee450ad9faeaf94274d4563c0620938c56f1": "fa0da0ca71244d198db8d72aac0b8f7c",
".git/objects/6c/80525b64998ac13e2acdf1795e0eb9f5e21ae9": "0870ef1830ba4c1c5d38b9b7c7307ea4",
".git/objects/6c/8fd107fbc18978e7a57bbd943a32cae1c0a357": "7ff9af8767f7309cd1541f2e9ce32956",
".git/objects/72/bd2ed7fd3da448ff535261c512c784ee9b433e": "db3348cba4af3dfbf53bb80bda689567",
".git/objects/73/a593ab2e46a290502620519a7f49660f9d50fb": "c9cd8a6efcfcf0a8a08144f9896af9aa",
".git/objects/78/282e3614fbbffd2613ddef08ae8f112863d216": "e228aec6e483822d4170302107f173f0",
".git/objects/82/60709e4555bd391a6d94f93b5da7feebdda064": "0e321951ed3d2b24b7fe9958ea36f59a",
".git/objects/85/a3c838cda9e6f854950743c7e18d961456864a": "56e2e79437f61d636625747ae3a66a74",
".git/objects/87/b76751e491f085f8a603f2ee1de86b7a5513d7": "ca2086bd179550a842545cb6aefbeee6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8b/95845bdec4b2321388e81e590abfecf075684d": "1cd901a6e1fa7c5108be83fab7847b41",
".git/objects/8c/de2fd1de1f8f9779c8401eb08a0cf7d2fa5b85": "2bd6dcd4b105c2370372d19f3a4da8ed",
".git/objects/8d/309bdea2283d97178a512fbf0f6223e9e3dbb6": "396916ca8b008a18d908e29a2ac52994",
".git/objects/8d/fc50a07e0a5c4d87efe610b39f5a04f8d0220d": "1a5e9c55ac1491c38b386e9f7db68f4e",
".git/objects/8f/226e61162cdd937245e4a5c02e273839e4f379": "eaa58d043221c7ccb61250a4967b9e5f",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/97/923a7a2bb3e38c85dcbfa2b630a7e76cca2703": "147f15f01e954db4f5477ac5547ac25c",
".git/objects/9d/d14b6102e261282a2d4d2b0b96cb1bd43a4bd6": "dd3260a9a484a3a54421e295007853d1",
".git/objects/a0/2be8eb19644c0ef72b9a3f11ca030359dc37e0": "164784fe55f542ebb4eb289cb4f0be11",
".git/objects/aa/afbdd17933e8e75c5bcec22ee7cb563d38dbb6": "6dd3b7caeeac2b51076e9d37b38aac13",
".git/objects/b1/10f3a2314c17437728e054b0db87448f24edbb": "49371c80b40578ac2f9b4fb7494f4a24",
".git/objects/b6/7ae79037a531e3f55e5397c73e7c7e8d8ce6be": "522d9628faad56a454a55ea9c14209b8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/fa51d85ebf62f01499f3c50efe277dbfd5db6b": "0262d062042df99ee26fe07cb9cd06bd",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/c2/0a40e397c00daf2ce273c1c8769b8644377c9f": "c8a1870afc78229a93abe1ff5374bc95",
".git/objects/c2/47c163720eeffe41d2c046119798b50c6f451d": "d96f39e735106d859bb1a755e3fdf9b0",
".git/objects/d0/37aaa5483bf487e5aaae9db31775912550a586": "d65eb490959eb6f88d6055b46e36fee0",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/c7af814da7dc7109e67eabd791749d7f8547ea": "16e893130c5d970ad20e31d3c2b81de6",
".git/objects/d6/cd43513b65ab8173ce51181bc3d63179a54a15": "b011feebe71c2e41113767e75fcdf652",
".git/objects/d6/e9f1296c7e14b83876b5e611b2fc7007a922b0": "d26ecf11157d69258e62580f7a852a64",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e3/84921e1e5351da19dd92ac596b4d2a4cda2582": "1967d3d83a3f54656223b0b31fc2caa6",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e9/486c3b1db184ba22311e483b90e13c6fa3b4f0": "90c007e4b051a4cd25a23e50c7563281",
".git/objects/ea/560af3bf02a8849ca9887c5cd59da588e1e84c": "d1814a4c376683242e207d4e3100305e",
".git/objects/ea/cb620b8e16347298988b1021ca20ed9a1ef871": "b2557bc2e118bd397c72e3ef508a2ae5",
".git/objects/eb/97597a81bad9823cdcbe6502e5279b5cf3c8e2": "bade151d6ddfcc11747b1035091b6646",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/d84c56e9d5be3160ade8680bac1026047d4c5a": "d52d42b9acae39b4af48be6425541b8f",
".git/objects/f0/9e047b1ed6e89e7d9ab17a88878fbdd2458682": "1ee8a91a9233e90272f9ad6dc84e8eea",
".git/objects/f3/26041d57f331a6c8bc21b1281091b0e3945870": "8bdac84c1ba58a69b311b3fbb255ca16",
".git/objects/f8/d204e4ec36d68ef1f2d7de3b8b4fb17c3cfeb5": "5afa7a62b7ea95d35e5bbaa897999da6",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/ORIG_HEAD": "8eaef983e832273670ed346e566fe796",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "27545d92aa8d195ed8ce33e842d076ef",
".git/refs/remotes/origin/main": "27545d92aa8d195ed8ce33e842d076ef",
"assets/AssetManifest.bin": "3b9805433902edae5f09315875736f06",
"assets/AssetManifest.bin.json": "ad6742c7d861fb82e2c81bdc7689d60f",
"assets/AssetManifest.json": "bab5675794ae45dcc8a2e9ee84efd2c1",
"assets/assets/images/1.png": "31bf39928e4d0b1beb5fe048b951eaae",
"assets/assets/images/background.png": "4ceda28033e3c4e87fdf86e839263811",
"assets/assets/images/Background1.png": "67f0b53facdd538dcf12ccfb54f478ea",
"assets/assets/images/bow.png": "5f933014fcf5d34161012f755f243ca6",
"assets/assets/images/dhanush.png": "53360f84d0349d622684d12750d5ad1e",
"assets/assets/images/item_0.png": "33e18b9a5655b10248e61df444094498",
"assets/assets/images/item_1.png": "b632c8b26618d74b3c903506d598a4d1",
"assets/assets/images/item_2.png": "f02e2094c3545291abc1b9983905ba32",
"assets/assets/images/item_3.png": "e0840d1a6479dc24dd62ec8c1a7dd0d2",
"assets/assets/images/item_4.png": "287179a4186ca514927c98223f190f7b",
"assets/assets/images/item_5.png": "2442d47cb5c2399ee787fbd0e9e8ba16",
"assets/assets/images/item_6.png": "f4450db8a08408bddeb07ded85acde5a",
"assets/assets/images/logo.jpg": "fd7e71c507c412cfdae9b63a50fc427a",
"assets/assets/images/mala.png": "27b51e9135625620b8d4967f4032c360",
"assets/assets/images/mandir.png": "f07825c40b60bbb7b5b26098538ed160",
"assets/assets/images/mukut.png": "47168efb8cc4f0ec0fb1902940d32751",
"assets/assets/images/ram%2520splash.jpg": "ff3efa31f4be12d57f3f31988c9e2af2",
"assets/assets/images/ram1.jpg": "c0c8c84d4735424be2f81f8beb9ea7e0",
"assets/assets/images/ramji.png": "9cc7e84337a56550c55b7645e990e434",
"assets/assets/images/ramji1.png": "11d037b06e9be44a88900571d8b8738c",
"assets/assets/images/rudrakash.png": "efca3283ae7522c905ecd8bc9d1f94d6",
"assets/assets/images/splash.png": "9ef25f77f81be1ce36176675dc7765b7",
"assets/assets/images/tilak.png": "ece0234572a3a2a3cb94d35a84e439c1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "a96a0eecd51c17cab8617fef27e0d370",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f7e991802327185b6f779fb74caefa18",
"/": "f7e991802327185b6f779fb74caefa18",
"main.dart.js": "4ed716169332fd9dd88589ce943458f7",
"manifest.json": "ffc7a96083998f09b675fb6ebf8454f2",
"version.json": "ff6ac57128c2eeed94cd801244441182"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
