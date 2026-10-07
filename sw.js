const CACHE = 'golf-app-v2';
const FILES = [
  './',
  'index.html',
  'manifest.json',
  'icon192.png',
  'icon512.png'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE).then(function(cache) {
      return cache.addAll(FILES);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(res) {
      return res || fetch(e.request);
    })
  );
});
