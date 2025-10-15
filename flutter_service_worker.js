'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "c5afad4aa10aca35ce16d7566d55a0a6",
"version.json": "42f0124cd836b10fa65cd76d0da35cfd",
"index.html": "0d65a450e3b21579f9a1912dea3a8d92",
"/": "0d65a450e3b21579f9a1912dea3a8d92",
"main.dart.js": "6291d40058e79acee5954bb59c64262a",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ac7f4da9b28aaf68fdc9ff370b02b7b7",
"assets/AssetManifest.json": "d8cf0b5a33cd0857ba2450605a6aaa8e",
"assets/NOTICES": "e317c74bc5accaa8b52a3177c1f7230c",
"assets/FontManifest.json": "f21649fc17d96de2cf5ad3bbcc1a4b56",
"assets/AssetManifest.bin.json": "1b4557958d6232626694226404138ea0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "ba088c4f662122c4bbd6e3ac6697948d",
"assets/fonts/MaterialIcons-Regular.otf": "f4853a99e850d719a7069bcc00bd0198",
"assets/Assets/Images/denture.jpg": "9cd13a989705efd60fe8c98c62b85a72",
"assets/Assets/Images/invisalign.png": "ab9b5eb3b6c897f2f4f796b4086be068",
"assets/Assets/Images/dental_room.jpg": "5360248cf92bbb3e420891fc4edbfd2a",
"assets/Assets/Images/smile_makeover.jpg": "8f089af227e149b91336ae95c32a39f4",
"assets/Assets/Images/single_visit_root_canal.png": "3bddc5397bef2833e8f34a69e3b02d75",
"assets/Assets/Images/full_mouth_rehabilitation.jpg": "bf47551b4b2c897bf0d228809cb481c2",
"assets/Assets/Images/tmj_specialist.png": "37c5e708d554cd613aa6860b13d67bab",
"assets/Assets/Images/crown_and_bridge.jpg": "511906f070b898890803f7dba93e98a8",
"assets/Assets/Images/teeth_whitening.jpg": "b151ab504a34096865fe1c1551389a95",
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
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
