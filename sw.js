const CACHE_NAME = "map-cache-v1";
const urlsToCache = [
  "/index.html",
  "/street.jpg",
  "/tiles/0/0/0.png",
  "/tiles/0/0/1.png",
  // Agrega aquí todos los tiles precargados de tu ciudad
];

self.addEventListener("install", e=>{
  e.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(urlsToCache)));
});

self.addEventListener("fetch", e=>{
  e.respondWith(caches.match(e.request).then(res=>res||fetch(e.request)));
});
