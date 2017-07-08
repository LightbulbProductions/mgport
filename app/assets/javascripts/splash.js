$(document).ready(function() {
  $('.landing-scroll').on('click',function() {
    $('html, body').animate({
      scrollTop: $("#landing-profile").offset().top
    }, 1000);
  });
})