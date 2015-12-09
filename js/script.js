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




	/* rooms-carousel - карусель на странице Single room */


	/* добавление карусели при размере окна от 768px до 1200px */

	var windowWidth = window.innerWidth;

	function roomsCarousel (){

		if((windowWidth >= 768) && (windowWidth < 1200)){

			$(".rooms__list").attr("id","rooms-carousel");

			$("#rooms-carousel").owlCarousel({
				items : 2,
				itemsCustom : [[768, 2]],
				rewindNav : false,
				pagination : true,
			});
		}
	}

	roomsCarousel();


/* добавление и удаление карусели при изменении размера окна */

	$(window).resize(function(){

		var windowResizeWidth = $(window).width();
		var roomsId = $(".rooms__list").attr("id");

		if(((windowResizeWidth >= 768) && (windowResizeWidth < 1200)) && (roomsId == "")){

			$(".rooms__list").attr("id","rooms-carousel");

			$("#rooms-carousel").owlCarousel({
				items : 2,
				itemsCustom : [[768, 2]],
				rewindNav : false,
				pagination : true,
			});
		}

		else if(((windowResizeWidth < 768) || (windowResizeWidth >= 1200)) && (roomsId != "")){

			$("#rooms-carousel").data('owlCarousel').destroy();

			$(".rooms__list").attr("id","");
		}

	});



	/* room-gallery-carousel - галерея на странице Single room */

	$("#room-gallery-carousel").owlCarousel({
		items : 1,
		itemsCustom : [[768, 1]],
		rewindNav : false,
		pagination : false,
	});

	var singleRoom = $("#room-gallery-carousel").data('owlCarousel');
	var carousel = $("#room-gallery-carousel");

	$('.single-room__description-prev').click(function(){
	  singleRoom.prev();
	});

	$('.single-room__description-next').click(function(){
	  singleRoom.next();
	});

});


