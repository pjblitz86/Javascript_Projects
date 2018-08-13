const cacheName = 'v2';

// call install event
self.addEventListener('install', e => {
  console.log('service worker: installed');
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
    fetch(e.request)
      .then(res => {
        // make clone of response
        const resClone = res.clone();
        // open cache
        caches
          .open(cacheName)
          .then(cache => {
            // add response to cache
            cache.put(e.request, resClone);
          });
          return res;
      }).catch(err => caches.match(e.request). then(res => res))
  );
});
