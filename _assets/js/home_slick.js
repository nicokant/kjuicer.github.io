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
