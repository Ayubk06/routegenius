self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('routegenius-v1').then(cache => {
      return cache.addAll(['./', './index-osm.html']);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});