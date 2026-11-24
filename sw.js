const CACHE_NAME = 'saborfit-br-v13';
const CORE_ASSETS = [
  './',
  './index.html',
  './brain.js',
  './dishes_catalog.js',
  './sweets_catalog.js',
  './extras_catalog.js', './features.js', './features.css',
  './manifest.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(CORE_ASSETS.map((u) => new Request(u, { cache: 'reload' })))));
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.url.includes('/images/')) {
    // Cache-first para las fotos
    e.respondWith(
      caches.match(req).then((cached) =>
        cached || fetch(req).then((res) => {
          // Solo guarda fotos que cargaron bien (nunca errores 404)
          if (res.ok) {
            const copy = res.clone();
            caches.open(CACHE_NAME).then((c) => c.put(req, copy));
          }
          return res;
        })
      )
    );
  } else {
    // Network-first para HTML/JS: actualiza automático cuando hay internet
    // (no-cache = revalida con el servidor, así nunca se queda una versión vieja)
    e.respondWith(
      fetch(req.mode === 'navigate' ? req.url : req, { cache: 'no-cache' }).then((res) => {
        if (res.ok) {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((c) => c.put(req, copy));
        }
        return res;
      }).catch(() => caches.match(req))
    );
  }
});
