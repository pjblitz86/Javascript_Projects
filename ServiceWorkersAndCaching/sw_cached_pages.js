const cacheName = 'v1';
const cacheAssets = [
  'index.html',
  'about.html',
  'css/style.css',
  'js/main.js'
];

// call install event
self.addEventListener('install', e => {
  console.log('service worker: installed');
  e.waitUntil(
    caches
      .open(cacheName)
      .then(cache => {
        console.log('Service worker: caching files');
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );
});

// call activate event
self.addEventListener('activate', e => {
  console.log('service worker: activated');
  // remove unwanted caches
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if(cache !== cacheName) {
            console.log('Service worker: clearing old cache');
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Call Fetch Event
self.addEventListener('fetch', e => {
  console.log('Service worker: fetching');
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
