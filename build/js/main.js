$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    nav: true
  });
});

// открытие меню
$('.burger').on('click', function(){
  $('.menu').addClass('menu--visible');
  $('.menu__btn-back').addClass('menu__btn-back--visible');
  setTimeout(function(){
    $('.menu__content').addClass('menu__content--visible');
  }, 470);
})

// закрытие меню
$('.menu__btn-back').on('click', function(e){
  e.preventDefault();
  setTimeout(function(){
    $('.menu').removeClass('menu--visible');
  }, 350);
  $('.menu__content').removeClass('menu__content--visible');
  setTimeout(function(){
    $('.menu__btn-back').removeClass('menu__btn-back--visible'); 
  }, 400);
})

// открытие aside
$('.acord__block--one').on('click', function(){
  $('.acord').toggleClass('acord--active');
});