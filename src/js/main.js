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

// $('.slider__wrap').on('click','.owl-next', function(){
//   var items = $('.slider__wrap').find('.owl-item');
//   var three = items.eq(2);
//   var four = items.eq(3);

//   // three.addClass('dop');
//     if(three.hasClass('active')){

//       console.log('FN1');
//       four.addClass('dop');

//       setTimeout(function() {
//         four.removeClass('dop');
//         console.log('ST1');
//       }, 800);

//     } else {
//       three.addClass('dop');
//       console.log('FN2');
      
//       setTimeout(function() {
//         three.removeClass('dop');
//         console.log('ST2');
//       }, 800);
//     }
// });

function slider(){
	var elWrap = $('.carousel_wrap');
	var	visual = $('.visual_block');
	var	carousel = visual.children('ul');
	var	visible = 1;
		itemWidth = carousel.children().outerWidth(),
		itemsTotal = carousel.children().length,
		// autoChange = 5000,
		btnNext = $('.next span'),
		btnPrev = $('.prev');

	visual.css({'width': visible * itemWidth + 'px'});
	
	carousel.css({'width': itemsTotal * itemWidth,	'left': 0});
	
	function chengeLeft () {
    var item = carousel.children().eq(0);

    btnNext.off('click', chengeLeft);
    
		carousel.animate({left: -itemWidth}, 500, function() {
			item.appendTo(carousel);
			carousel.css({"left": 0 });
      carousel.children().eq(0).addClass('active');
			btnNext.on('click', chengeLeft);
		});
	}
	
	// function chengeRigth () {
	// 	var item = $(carousel).children().eq(-1);
	// 	item.prependTo(carousel);
	// 	carousel.css({"left": -itemWidth});		
	// 	btnPrev.off('click', chengeRigth);		
	// 	carousel.animate({left: 0}, 500, function() {
	// 		btnPrev.on('click', chengeRigth);
	// 	});
	// }	
	
	// var interval = setInterval(chengeLeft, autoChange);

	btnNext.on('click', chengeLeft);	
	btnPrev.on('click', chengeRigth);	
	
	elWrap.mouseover(function() {
		clearInterval(interval);
	});
	
	// elWrap.mouseout(function() {
	// 	interval = setInterval(chengeLeft, autoChange);
	// });	
};
slider();
