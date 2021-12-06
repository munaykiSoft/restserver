importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');
workbox.loadModule('workbox-background-sync');
workbox.precaching.precacheAndRoute([{"revision":"94c9df24c8df1608bfc2326de71592c6","url":"asset-manifest.json"},{"revision":"1b8d91edef6418fc79dbf701b29250bb","url":"favicon.ico"},{"revision":"a788388bec4261b650e51d5633b3e4fe","url":"index.html"},{"revision":"ef92a362e40bef5b3f47d3c6f0971a33","url":"logo192.png"},{"revision":"2af1806f20fd6d351cb8750903ed03fa","url":"logo512.png"},{"revision":"74b09233ded637d78eb1a8982f375fd0","url":"manifest.json"},{"revision":"fa1ded1ed7c11438a9b0385b1e112850","url":"robots.txt"},{"revision":"b87714e4bdceee903fe929c150067eba","url":"static/css/2.598ea7c3.chunk.css"},{"revision":"cea3d3bb15f98a65578f0b7bffa937a3","url":"static/icons/ic_flag_de.svg"},{"revision":"b751b213de4b2f6a976235b1a4b40af5","url":"static/icons/ic_flag_en.svg"},{"revision":"88d3d5b3229841eb37a3a640e4ea0f83","url":"static/icons/ic_flag_fr.svg"},{"revision":"95d36e17155b1028ed515d57e9d7b406","url":"static/icons/ic_notification_chat.svg"},{"revision":"f88a439e659011ddf3addf97ec71d4f6","url":"static/icons/ic_notification_mail.svg"},{"revision":"dcb2ce24429d2e5995d93c6a4a0b8198","url":"static/icons/ic_notification_package.svg"},{"revision":"bf67e823b312ef6ac3ae02ddc3c23ec4","url":"static/icons/ic_notification_shipping.svg"},{"revision":"cbcb83705b33795e97b0b6e7d00a1aee","url":"static/icons/shape-avatar.svg"},{"revision":"72da5edd39a3cf41379c4c1682409694","url":"static/illustrations/illustration_404.svg"},{"revision":"d5c8fba6fc944ee1836188424755fc6b","url":"static/illustrations/illustration_avatar.png"},{"revision":"65ed1ceef03f604786810b77a41d59a9","url":"static/illustrations/illustration_register.png"},{"revision":"391a4be3ea6a0d16ca8f8ce78e389963","url":"static/js/2.771ce7ca.chunk.js"},{"revision":"978600599bae73898143514d3e5da8a2","url":"static/js/2.771ce7ca.chunk.js.LICENSE.txt"},{"revision":"da93bcbb3872b01456de8e373adccb4a","url":"static/js/main.fd5b6fc9.chunk.js"},{"revision":"cc8444305e9d73769d99e968cdf39e72","url":"static/js/runtime-main.33e2af99.js"},{"revision":"f7e7b1f63e60a0a4bdbe3c12bfbb73f0","url":"static/logo.png"},{"revision":"21057ea2112f7c1a11712bdab78b3890","url":"static/mock-images/avatars/avatar_1.jpg"},{"revision":"d5f38709254d4389c7b9eeed6d261715","url":"static/mock-images/courses/course_1.jpg"},{"revision":"31aba6c825e6a34c605bd051dd32f889","url":"static/mock-images/covers/cover_1.jpg"},{"revision":"b381471d8765139f64870161704327bf","url":"static/preview.png"}]);

const { registerRoute } = workbox.routing;
// const { PrecacheFallbackPlugin } = workbox.precaching;
const { NetworkFirst } = workbox.strategies;
// const { BackgroundSyncPlugin } = workbox.backgroundSync;


registerRoute(
    ({ event }) => event.request.mode === 'navigate',
    async () => {
        const defaultBase = '/index.html';
        return caches
            .match(workbox.precaching.getCacheKeyForURL(defaultBase))
            .then(response => {
                return response || fetch(defaultBase);
            })
            .catch(err => {
                return fetch(defaultBase);
            });
    }
);


const cacheNetworkFirst = [
    '/api/login/renew',
    '/api/users'
]

registerRoute(
    ({ request, url }) => {
        if (cacheNetworkFirst.includes(url.pathname)) return true
        return false;
    },
    new NetworkFirst()
)


// const cacheFirstNetwork = [
//     'http://localhost:3000/dashboard/app',
//     'http://localhost:3000/dashboard/user'
// ]

// registerRoute(
//     ({ request, url }) => {
//         if (cacheFirstNetwork.includes(url.href)) return true
//         return false;
//     },
//     new CacheFirst()
// )