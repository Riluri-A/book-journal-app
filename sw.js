const CACHE_NAME = 'book-journal-v1';
const urlsToCache = [
    '/book-journal/',
    '/book-journal/index.html',
    '/book-journal/manifest.json',
    '/book-journal/icons/icon-192.png',
    '/book-journal/icons/icon-512.png'
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