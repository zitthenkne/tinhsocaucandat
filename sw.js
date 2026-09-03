/**
 * Service worker: cho phép mở app khi không có mạng.
 * - Trang chính: ưu tiên mạng (luôn lấy bản mới), rớt mạng thì lấy bản đã lưu.
 * - Tài nguyên khác (logo, font, icon CDN): ưu tiên cache cho nhanh.
 */
const CACHE = 'gpa-v2';
const CORE = ['./', './index.html', './logo_clb.png', './manifest.webmanifest'];

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE)
            .then(c => c.addAll(CORE))
            .catch(() => { })
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys()
            .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
            .then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (e) => {
    const req = e.request;
    if (req.method !== 'GET') return;

    if (req.mode === 'navigate') {
        e.respondWith(
            fetch(req)
                .then(res => {
                    const copy = res.clone();
                    caches.open(CACHE).then(c => c.put('./index.html', copy)).catch(() => { });
                    return res;
                })
                .catch(() => caches.match('./index.html').then(hit => hit || caches.match('./')))
        );
        return;
    }

    e.respondWith(
        caches.match(req).then(hit => hit || fetch(req).then(res => {
            const copy = res.clone();
            caches.open(CACHE).then(c => c.put(req, copy)).catch(() => { });
            return res;
        }))
    );
});
