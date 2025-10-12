const CACHE_NAME = "agit-web-cache-v2"; // bisa lo ubah versinya kalau update
const ASSETS = [
    "/", // halaman utama
    "index.html",
    "gallery.html",
    "css/style.css",
    "js/script.js",
    
    "img/pict1.jpg",
    "img/pict2.jpg",
    "img/pict3.jpg",
    "img/pict4.jpg",

    "pdp/villa-1/villa-1.html",
    "pdp/villa-2/villa-2.html"
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
