/* Slick slider */
$(document).ready(function () {
   $('.reviews__slider').slick({
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      arrows: false,
   })
})

/* Leaflet map */
const map = L.map('contacts__map').setView([59.941882, 30.305307], 13)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
   attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map)

const marker = L.marker([59.929683,30.3664639,15]);
 marker.addTo(map);

const marker2 = L.marker([59.9547477,30.2877583,17]);
 marker2.addTo(map);
