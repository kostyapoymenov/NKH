$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    nav: true
  });
});

$('.burger').on('click', function(){
  $('.menu').addClass('menu--visible');
  setTimeout(function(){
    $('.menu__content').addClass('menu__content--visible');
  }, 200);
})
$('.menu__btn-back').on('click', function(e){
  e.preventDefault();
  setTimeout(function(){
    $('.menu').removeClass('menu--visible');
  }, 200);
  $('.menu__content').removeClass('menu__content--visible');
})