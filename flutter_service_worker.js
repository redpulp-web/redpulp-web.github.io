'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "47eb06d578f6bbda8c026e7fda70533a",
"version.json": "42f0124cd836b10fa65cd76d0da35cfd",
"index.html": "4b863be1079aeeafc4c16cba31148eac",
"/": "4b863be1079aeeafc4c16cba31148eac",
"main.dart.js": "5811e8f2c5980728d8a78b098ac50d5c",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "b02089a8c7cc3513f8ace8c8637510b8",
"icons/Icon-192.png": "12f93499217f7bac88bf4119e4de77ff",
"icons/Icon-maskable-192.png": "12f93499217f7bac88bf4119e4de77ff",
"icons/Icon-maskable-512.png": "6481b3e9f428be4574cc912329ea1f20",
"icons/Icon-512.png": "6481b3e9f428be4574cc912329ea1f20",
"manifest.json": "5777477358b9f1ca264cdf0ba4403873",
"assets/AssetManifest.json": "6ef9bc86e8988f013ab05901c8c74f93",
"assets/NOTICES": "607fd473db9a9c355c46c7b7c5e8beb4",
"assets/FontManifest.json": "f21649fc17d96de2cf5ad3bbcc1a4b56",
"assets/AssetManifest.bin.json": "32296631e2cb11b08f57b49868cccbc3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "1b376bcca463cbf60557efa36ebf1a3b",
"assets/fonts/MaterialIcons-Regular.otf": "6f363f7dcb8f2a25a0b50aebace2b83b",
"assets/Assets/Images/denture.jpg": "9cd13a989705efd60fe8c98c62b85a72",
"assets/Assets/Images/invisalign.png": "ab9b5eb3b6c897f2f4f796b4086be068",
"assets/Assets/Images/dental_room.jpg": "5360248cf92bbb3e420891fc4edbfd2a",
"assets/Assets/Images/smile_makeover.jpg": "8f089af227e149b91336ae95c32a39f4",
"assets/Assets/Images/single_visit_root_canal.png": "3bddc5397bef2833e8f34a69e3b02d75",
"assets/Assets/Images/full_mouth_rehabilitation.jpg": "bf47551b4b2c897bf0d228809cb481c2",
"assets/Assets/Images/tmj_specialist.png": "37c5e708d554cd613aa6860b13d67bab",
"assets/Assets/Images/crown_and_bridge.jpg": "511906f070b898890803f7dba93e98a8",
"assets/Assets/Images/teeth_whitening.jpg": "b151ab504a34096865fe1c1551389a95",
"assets/Assets/Images/Logo.png": "be373d3b5c4607c63ac335344fa4275a",
"assets/Assets/Images/r_c_t.jpg": "092bd8c606a17bda8de9a4f4e1c515ef",
"assets/Assets/Images/dental_treatment.png": "e911ed0f89567d6fd9666f597aecc6e6",
"assets/Assets/Images/img2.jpg": "57a279398e4da754f5a7ed144585a65d",
"assets/Assets/Images/sensitive_teeth.jpeg": "0220567b27eb3fd5e541029ef3e55902",
"assets/Assets/Images/gum_problem.jpeg": "b3ef7d4dc29cbadc8f32d76b19bbeeac",
"assets/Assets/Images/img1.png": "538b6e3abacafb7bbe96c4b12ee94784",
"assets/Assets/Images/dental_implant.jpg": "835f4272eeb1caf01d11a079a283c915",
"assets/Assets/Images/light_cure_composite_filling.jpeg": "f1fa1264b03050f769de90e24aca77aa",
"assets/Assets/Images/Logo_1.jpg": "8c362bfe666ade103990ddac7059c277",
"assets/Assets/Images/dental_chair.jpg": "926d8f295c15b04bd4d509e849fdc6a6",
"assets/Assets/Images/impacted_wisdom_teeth.jpg": "a2069b60cac45afeae8bf30a55663251",
"assets/Assets/Fonts/roboto_medium.ttf": "58aef543c97bbaf6a9896e8484456d98",
"assets/Assets/Fonts/NotoSans_SemiCondensed-Regular.ttf": "cf37ab7c1275cd77066ffdab71761a08",
"assets/Assets/Fonts/NotoSans_SemiCondensed-SemiBold.ttf": "8aad5697ec74d04935d7303d028c0924",
"assets/Assets/Fonts/breSerif.ttf": "737426f47c43b8ba6e12b2bfa1dc8c41",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
