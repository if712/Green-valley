$(document).ready(function(){

	$(".promo-slider__paginator-item1").click(function(){
		var paginatorId = $(this).attr("id");
		$(".promo-slider__paginator-item2").attr("id", "");
		$(this).attr("id", "paginator-item-shown");
		$("#promo-slider__corporate").css("display", "none");
		$("#promo-slider__family").css("display", "block");
	});

	$(".promo-slider__paginator-item2").click(function(){
		var paginatorId = $(this).attr("id");
		$(".promo-slider__paginator-item1").attr("id", "");
		$(this).attr("id", "paginator-item-shown");
		$("#promo-slider__family").css("display", "none");
		$("#promo-slider__corporate").css("display", "block");
	});



	/* gallery-carousel */

	$("#gallery-carousel").owlCarousel({
		items : 6,
		itemsCustom : [[300, 1], [768, 6]],
		rewindNav : true,
		scrollPerPage : false,
		pagination : false,
	});


	var gallery = $('#gallery-carousel').data('owlCarousel');

	$('.gallery__prev').click(function(){
		gallery.prev();
	});

	$('.gallery__next').click(function(){
		gallery.next();
	});


	$("#gallery-carousel img").click(function(){
		var gallery_main_img = $(this).attr('src');
		$('#gallery__main-img').attr('src', gallery_main_img);
	});


	/* reviews-carousel */

	$("#reviews-carousel").owlCarousel({
		items : 1,
		itemsCustom : [[768, 1]],
		rewindNav : true,
		scrollPerPage : false,
		pagination : false,
	});

	var owl = $("#reviews-carousel").data('owlCarousel');

	$('.reviews__prev').click(function(){
	  owl.prev();
	});

	$('.reviews__next').click(function(){
	  owl.next();
	});


	/* discount-carousel */

	$("#discount-carousel").owlCarousel({
		items : 1,
		itemsCustom : [[768, 1]],
		rewindNav : false,
		scrollPerPage : false,
		pagination : true,
	});




/*
	$$(window).resize(function(){
		var windowWidth = $(window).width();
		if(windowWidth < 500) {
			gallery.destroy();
		}
		else {
			gallery.reinit({
				items : 6,
				rewindNav : true,
				scrollPerPage : false,
				pagination : false,
			});
		}
	});
*/
});
/*

	$('#burger').on('click', function(e){
		e.preventDefault();
		$('main-menu').slideToggle();
	});


*/

