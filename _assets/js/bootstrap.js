import './globals';
import Raven from 'raven-js';
import 'bootstrap';
import 'slick-carousel';

if (Raven) {
  Raven.config('https://fb5b596ad7d24f78ad1708125218cccd@sentry.io/207916').install();
}

$(document).ready(function() {
  if ($('#carousel')[0]) {
    $('#carousel').slick({
      autoplay: true,
      fade: true,
      dots: true,
      //appendDots: '#carousel-dots',
      //dotsClass: 'dots',
    });
  }
});

