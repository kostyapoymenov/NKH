$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    nav: true
  });
});

$('.burger').on('click', function(){
  $('.menu').toggleClass('menu--visible');
})