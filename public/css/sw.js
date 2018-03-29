console.log('Je moet toch hier komen?')

self.addEventListener('install', event => event.waitUntil(
    caches.open('oba-v1-super-core')
        .then(cache => cache.addAll([
            '/',
            '/offline/',
            'css/style.css',
            'js/bundle.js',
            'js/imageScript.js'
        ]))
        .then(self.skipWaiting())
));

self.addEventListener('fetch', event => {
    const request = event.request;
    if (request.mode === 'navigate' || request.url.match('.jpg$')) {
        event.respondWith(
            fetch(request)
                .then(response => cachePage(request, response))
                .catch(err => getCachedPage(request))
                .catch(err => fetchCoreFile('/offline/'))
        );
    } else {
        event.respondWith(
            fetch(request)
                .catch(err => fetchCoreFile(request.url))
                .catch(err => fetchCoreFile('/offline/'))
        );
    }
});

function fetchCoreFile(url) {
    return caches.open('oba-v1-super-core')
        .then(cache => cache.match(url))
        .then(response => response ? response : Promise.reject());
}

function getCachedPage(request) {
    return caches.open('oba-v1-super-pages')
        .then(cache => cache.match(request))
        .then(response => response ? response : Promise.reject());
}

function cachePage(request, response) {
    const clonedResponse = response.clone();
    caches.open('oba-v1-super-pages')
        .then(cache => cache.put(request, clonedResponse));
    return response;
}