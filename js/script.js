$(document).ready(function(){


	$('#burger').on('click', function(e){
		e.preventDefault();
		$('.page-header__nav').slideToggle();
	});


	/* promo-slider */

	var links = document.querySelectorAll(".promo-slider__paginator-item a");
	var slides = document.querySelectorAll(".promo-slider__item");

	function changeTab(e){

	  e.preventDefault();

	  for (var i=0, j=links.length; i<j; i++) {

	    links[i].parentNode.classList.remove("promo-slider__paginator-item--active");
		}

	  this.parentNode.classList.add("promo-slider__paginator-item--active");
	  var link = this.getAttribute("href");
	  var linkSlide = document.querySelector(link);

    for (i=0, j=slides.length; i<j; i++) {

		  slides[i].classList.remove("promo-slider__item--active");
		}

	  linkSlide.classList.add("promo-slider__item--active");
	}


	for (var i=0, j=links.length; i<j; i++) {

	  links[i].addEventListener("click", changeTab);
	}


	/* gallery-carousel */

	$("#gallery-carousel").owlCarousel({
		items : 6,
		itemsCustom : [[300, 1], [768, 6]],
		rewindNav : false,
		scrollPerPage : true,
		pagination : false,
	});

	var gallery = $('#gallery-carousel').data('owlCarousel');

	$('.gallery__prev').click(function(){
		gallery.prev();
	});

	$('.gallery__next').click(function(){
		gallery.next();
	});

	$("#gallery-carousel img").click(function(e){
		var gallery_main_img = $(this).attr('src');
		$('#gallery__main-img').attr('src', gallery_main_img);
	});


	/* reviews-carousel */

	$("#reviews-carousel").owlCarousel({
		items : 2,
		itemsCustom : [[768, 1]],
		rewindNav : false,
		pagination : false,
	});

	var owl = $("#reviews-carousel").data('owlCarousel');
	var carousel = $("#reviews-carousel");

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

