const CACHE_NAME = 'my-cache';
const urlsToCache = [
  './',
  './index.html',
  './restaurant.html',
  './data/restaurants.json',
  './css/styles.css',
  './js/dbhelper.js',
  './js/main.js',
  './js/restaurant_info.js',
  './img/1.jpg',
  './img/2.jpg',
  './img/3.jpg',
  './img/4.jpg',
  './img/5.jpg',
  './img/6.jpg',
  './img/7.jpg',
  './img/8.jpg',
  './img/9.jpg',
  './img/10.jpg',

]

self.addEventListener('install', function (event) {
  console.log('Installing service worker')
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opening cache');
        return cache.addAll(urlsToCache);
      })
      .catch((err) => {console.log(err);
      })
  )
})

self.addEventListener('activate', event => {
  console.log('Now ready to handle fetches!');
});


self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
      .catch((err) => console.log(err))
  )
});
