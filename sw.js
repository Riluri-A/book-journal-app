const CACHE_NAME = 'book-journal-v2';
const urlsToCache = [
    '/book-journal-app/',
    '/book-journal-app/index.html',
    '/book-journal-app/manifest.json',
    '/book-journal-app/icons/icon-192.png',
    '/book-journal-app/icons/icon-512.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});
