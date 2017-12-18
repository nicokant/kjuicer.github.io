import './globals';
import Raven from 'raven-js';
import 'bootstrap';
import 'slick-carousel';
import Headroom from 'headroom.js';

if (Raven) {
  Raven.config('https://fb5b596ad7d24f78ad1708125218cccd@sentry.io/207916').install();
}

/* close the menu if user clicks elsewhere */
function dismissMenu(e) {
  var $btnMenu = $('[data-target="#navbarMenu"]');
  if (!$btnMenu.is(e.target) && $btnMenu.has(e.target).length === 0 && $('#navbarMenu').has(e.target).length === 0 && $('#navbarMenu').hasClass('show')) {
    $('#navbarMenu').collapse('hide');
  }
}

function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

$(document).ready(function() {

  // configure headroom
  var headroom  = new Headroom(document.getElementById('top-navigation'), {
    offset: 75,
    onUnpin: function () {
      $('#navbarMenu').collapse('hide');
    }
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

  var debouncedDismiss = debounce(dismissMenu, 250);

  $(document).click(debouncedDismiss);
});

