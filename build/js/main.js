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

//слайдер
function slider(){
	var elWrap = $('.carousel_wrap');
	var	visual = $('.visual_block');
	var	carousel = visual.children('ul');
	var	visible = 1;
		itemWidth = carousel.children().outerWidth(),
		itemsTotal = carousel.children().length,
		btnNext = $('.next span'),
		btnPrev = $('.prev');

	visual.css({'width': visible * itemWidth + 'px'});
	
	carousel.css({'width': itemsTotal * itemWidth,	'left': 0});
	
	function chengeLeft () {
    var item = carousel.children().eq(0);
    var item2 = carousel.children().eq(1);

    btnNext.off('click', chengeLeft);
    item.addClass('dop');
    
    carousel.children().addClass('active');
		carousel.animate({left: -itemWidth}, 650, function() {
      item.appendTo(carousel).removeClass('active');
      // setTimeout(function(){
      item.removeClass('dop');
      btnNext.css('pointer-events', 'auto');
      // }, 650);
      carousel.css({"left": 0 });
      
    });
    btnNext.css('pointer-events', 'none');
    btnNext.on('click', chengeLeft);
	}

	btnNext.on('click', chengeLeft);	 
};
slider();
