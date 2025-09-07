// sw.js
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("zapsmart-cache-v1").then((cache) => {
      return cache.addAll([
        "/",
        "/index.html",
        "/manifest.webmanifest",
        "/icon-192x192.png",
        "/icon-512x512.png",
        "/favicon.ico",
        // Adicione aqui outros arquivos estáticos que você quer cachear
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
