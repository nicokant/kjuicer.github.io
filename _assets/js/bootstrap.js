import './globals';
import Raven from 'raven-js';
import 'bootstrap';
import 'slick-carousel';
import Headroom from 'headroom.js';

if (Raven) {
  Raven.config('https://fb5b596ad7d24f78ad1708125218cccd@sentry.io/207916').install();
}

$(document).ready(function() {

  // configure headroom
  var headroom  = new Headroom(document.getElementById('top-navigation'), {
    offset: 75,
  });
  headroom.init();

  if ($('#carousel')[0]) {
    $('#carousel').slick({
      autoplay: true,
      fade: true,
      dots: true,
      arrows: false,
      //appendDots: '#carousel-dots',
      //dotsClass: 'dots',
    });
  }
});

