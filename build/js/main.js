$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    touchDrag: false,
    smartSpeed: 1000
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

$('.slider__wrap').on('click','.owl-next', function(){
  var items = $('.slider__wrap').find('.owl-item');
  var three = items.eq(2);
  var four = items.eq(3);

  // three.addClass('dop');
    if(three.hasClass('active')){

      console.log('FN1');
      four.addClass('dop');

      setTimeout(function() {
        four.removeClass('dop');
        console.log('ST1');
      }, 800);

    } else {
      three.addClass('dop');
      console.log('FN2');
      
      setTimeout(function() {
        three.removeClass('dop');
        console.log('ST2');
      }, 800);
    }
});
