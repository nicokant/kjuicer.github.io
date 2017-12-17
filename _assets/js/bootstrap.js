import './globals';
import Raven from 'raven-js';
import 'bootstrap';
import 'slick-carousel';
import 'jquery-sticky';

if (Raven) {
  Raven.config('https://fb5b596ad7d24f78ad1708125218cccd@sentry.io/207916').install();
}

$(document).ready(function() {
  $('#top-navigation').sticky({ zIndex: 999999 });
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

