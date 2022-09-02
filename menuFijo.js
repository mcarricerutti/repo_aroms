$(document).ready(function(){
	let altura = $('.menuFijo').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.menuFijo').addClass('menu-fixed');
		} else {
			$('.menuFijo').removeClass('menu-fixed');
		}
	});
});