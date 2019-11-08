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
  }, 350);
})
$('.menu__btn-back').on('click', function(e){
  e.preventDefault();
  setTimeout(function(){
    $('.menu').removeClass('menu--visible');
  }, 300);
  $('.menu__content').removeClass('menu__content--visible');
})
$('.acord__block--one').on('click', function(){
  // $('.acord__block--two').slideToggle(500);
  $('.acord').toggleClass('acord--active');
});