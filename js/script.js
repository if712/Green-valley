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

    for (var i=0, j=slides.length; i<j; i++) {

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

	$('.gallery__prev').on('click', function(){
		gallery.prev();
	});

	$('.gallery__next').on('click', function(){
		gallery.next();
	});

	$("#gallery-carousel img").on('click', function(e){
		var gallery_main_img = $(this).attr('src');
		$('#gallery__main-img').attr('src', gallery_main_img);
	});



	/* reviews-carousel */

	$("#reviews-carousel").owlCarousel({
		items : 2,
		itemsCustom : [[768, 1]],
		rewindNav : true,
		pagination : false,
	});

	var owl = $("#reviews-carousel").data('owlCarousel');
	var carousel = $("#reviews-carousel");

	$('.reviews__prev').on('click', function(){
	  owl.prev();
	});

	$('.reviews__next').on('click', function(){
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

		else if( ((windowResizeWidth < 768) || (windowResizeWidth >= 1200)) &&
							(roomsId != "") && (roomsId != undefined) ){

			$("#rooms-carousel").data('owlCarousel').destroy();

			$(".rooms__list").attr("id","");
		}

	});



	/* room-gallery-carousel - галерея на странице Single room */

	$("#room-gallery-carousel").owlCarousel({
		items : 1,
		itemsCustom : [[320, 1]],
		rewindNav : false,
		pagination : false,
	});

	var singleRoom = $("#room-gallery-carousel").data('owlCarousel');
	var carousel = $("#room-gallery-carousel");

	$('.single-room__description-prev').on('click', function(){

	  singleRoom.prev();
	});

	$('.single-room__description-next').on('click', function(){

	  singleRoom.next();
	});




	/* календарь на странице form */

	// $(function() {

 //    $("#arrival").datepicker();
 //  });

 //  $(function() {

 //    $("#departure").datepicker();
 //  });

	/* на странице form подсвека даты */


	$('.date').focusout(function(){

		var dates = $(this).children();
		var result;

		var check = function(i, boolean){

			var dateValue = dates[i].value;

			if( (dateValue > 0) && (i < 2) ){

				i++;

				check(i, true);
			}

			else if((dateValue > 0) && (i == 2)){

				return result = true;
			}

			else{

				return result = false;
			}
		};

		check(0,true);

		if(result){

			$(this).children().css('color', '#0ab89d');
		}
	});



	/* на странице form переключатель блока выбора номера и блока выбора типа коттеджа */

	$(".place-to-stay__hotel label").on('click', function(){

		$(".type-of-cottage").css("display","none");
		$(".type-of-room").css("display","flex");
	});

	$(".place-to-stay__cottage label").on('click', function(){

		$(".type-of-room").css("display","none");
		$(".type-of-cottage").css("display","flex");
	});



	/* на странице form переключатель описания типа номера и типа коттеджа */


	$(".type-of-cottage__item label").each(function(indx){

	  $(this).on('click', function(){

	  	var inputAttr = $(this).children().filter(':input').attr('id');

	  	$(".type-of-cottage__features>li").css("display","none");
	  	$("." + inputAttr).css("display","flex");
	  });
	});


	$(".type-of-room__item label").each(function(indx){

	  $(this).on('click', function(){

	  	var inputAttr = $(this).children().filter(':input').attr('id');

	  	$(".type-of-room__features>li").css("display","none");
	  	$("." + inputAttr).css("display","flex");
	  });
	});



	/* на странице form подсветка персональной информации */


	$('.personal-data__list input').blur(function(){

		var personalVal = $(this).val();
		console.log(personalVal);

		if(personalVal != ""){

			$(this).parent().children().css('display','block');
		}
		else{

			console.log('else');
		}

	});



	/* на странице form выбор блока "Сейчас" при клике на любое место блока */


	$('.payment__now').on('click', function(){

			$('#pay-now').attr('checked','checked');
	});



	/* на странице form проверка даты */


	$('.reservation-form-btn').on('click', function(){

		$('.date-of-rest__inputs input').each(function(indx){

			var inputVal = $(this).val();

			if(inputVal == ""){

				$(".payment__to-pay-warning").css('display','block');
			}
		});
	});


});


