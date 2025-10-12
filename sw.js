const CACHE_NAME = "agit-web-cache-v2"; // bisa lo ubah versinya kalau update
const ASSETS = [
    "/Website-RAMA/",
    "/Website-RAMA/index.html",
    "/Website-RAMA/gallery.html",
    "/Website-RAMA/css/style.css",
    "/Website-RAMA/js/script.js",
    "/Website-RAMA/img/pict1.jpg",
    "/Website-RAMA/img/pict2.jpg",
    "/Website-RAMA/img/pict3.jpg",
    "/Website-RAMA/img/pict4.jpg",
    "/Website-RAMA/pdp/villa-1/villa-1.html",
    "/Website-RAMA/pdp/villa-2/villa-2.html"
];

// pas pertama kali service worker di-install
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log("Caching assets...");
            return cache.addAll(ASSETS);
        })
    );
    self.skipWaiting(); // biar langsung aktif
});

// hapus cache lama kalau ada versi baru
self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
            );
        })
    );
    self.clients.claim();
});

// ambil file dari cache dulu, kalau ga ada baru ambil dari network
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return (
                response ||
                fetch(event.request).then((fetchRes) => {
                    return caches.open(CACHE_NAME).then((cache) => {
                        // optional: simpen hasil fetch ke cache biar ke-refresh
                        cache.put(event.request, fetchRes.clone());
                        return fetchRes;
                    });
                })
            );
        })
    );
});
