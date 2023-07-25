;
// Crear el service Worker (configurar)
// asignar un nombre y version al cache

const CACHE_NAME = 'v1_cache_news_month_pwa',
urlsToCache = [
    './',
    './style/style.css',
    './src/app.js',
    './img/N.png'
]

/* Durante la fase fase de instalacion, generalmente se almacena en cache los archivos estaticos */
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            return cache.addAll(urlsToCache)
            .then(()=> self.skipWaiting())
        })
        .catch(err => console.log("Fallo el registro de cache", err))
    );
});

/* Una vez que se inatal el service worker,se activa y busca los recursos para hacewr que funcione sin conexion */
self.addEventListener('activate', e => {
    const CACHE_WHITE_LIST = [CACHE_NAME];
    e.waitUntil(
        caches.keys()
        .then(cachesNames => {
            cachesNames.map(cacheName => {
                // Eliminamos lo que ya no se necesita en cache
                if(CACHE_WHITE_LIST.indexOf(cacheName) === -1){
                    return caches.delete(cacheName);
                }
            })
        })
        //Le indicamos al service worker activr la cache
        .then(()=> self.clients.claim())
    )
});

/* Cuando el navegador recupera una url */
self.addEventListener('fetch', e => {
    // Responder ya sea con el objeto en cache o continuar y buscar la url real
    e.respondWith(
        caches.match(e.request)
        .then(res => {
            if(res){
                // recuperar la cache
                return res
            }

            // recuperar la peticion a la url    
            return fetch(e.request)

        })
    )
});