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
		slideSpeed : 400
	});


	var windowWidth = window.innerWidth;

	function galleryOpacity(actualWidth){

		if(actualWidth >= '768'){


			$('.gallery__thumbnails .owl-wrapper').css('transform', 'translate3d(-4%, 0px, 0px)');

			$('.gallery__thumbnails .owl-wrapper-outer').css('opacity','0.6');

			$('.gallery__thumbnails .owl-wrapper-outer').hover(

				function(){
				$(this).css('opacity','1');
			},
				function(){
				$(this).css('opacity','0.6');
			});
		}

		else{

			$('.gallery__thumbnails .owl-wrapper').css('transform', 'translate3d(0px, 0px, 0px)');

			$('.gallery__thumbnails .owl-wrapper-outer').css('opacity','1');

			$('.gallery__thumbnails .owl-wrapper-outer').hover(

				function(){
				$(this).css('opacity','1');
			},
				function(){
				$(this).css('opacity','1');
			});
		}
	}

	galleryOpacity(windowWidth);


	$(window).resize(function(){

		var actualWidth = window.innerWidth;

		galleryOpacity(actualWidth);

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


	$(window).resize(function(){

		var actualWidth = window.innerWidth;

		if(actualWidth < 768){

			$('.reviews__blockquote').css('width',actualWidth);
		}
	});



	/* discount-carousel */

	$("#discount-carousel").owlCarousel({
		items : 1,
		itemsCustom : [[768, 1]],
		rewindNav : false,
		pagination : true,
	});



	/* room-gallery-carousel - галерея на странице Single room - фото номера */

	$("#room-gallery-carousel").owlCarousel({
		items : 1,
		itemsCustom : [[320, 1]],
		rewindNav : false,
		pagination : false,
		addClassActive: true
	});

	var singleRoom = $("#room-gallery-carousel").data('owlCarousel');
	var carousel = $("#room-gallery-carousel");

	$('.single-room__description-prev').on('click', function(){

	  singleRoom.prev();
	});

	$('.single-room__description-next').on('click', function(){

	  singleRoom.next();
	});




	/* Fullscreen на странице Single room */

	$(".single-room__description-zoom").on('click', function(){

		var activeImgSrc = $('#room-gallery-carousel .active .single-room__description-img').attr('src');
		var zoomWindowWidth = window.innerWidth;

		$('.img-fullscreen').css('display','block');
		$('.img-fullscreen img').css('width',zoomWindowWidth);
		$('.img-fullscreen img').attr('src',activeImgSrc);

		$('section').css('opacity','0.9');
		$('header').css('opacity','0.9');
		$('footer').css('opacity','0.9');
	});

	$(".img-fullscreen__close").on('click', function(){

		$('.img-fullscreen').css('display','none');

		$('section').css('opacity','1');
		$('header').css('opacity','1');
		$('footer').css('opacity','1');
	});

	$(document).keydown(function(key){

	  if (key.which == 27) {

	  	$('.img-fullscreen').css('display','none');

			$('section').css('opacity','1');
			$('header').css('opacity','1');
			$('footer').css('opacity','1');
	  }
	});



	/* rooms-carousel - карусель на странице Single room - выбор номера */


	/* добавление карусели при размере окна от 768px до 1200px */

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

		if(((windowResizeWidth >= 768) && (windowResizeWidth < 1200)) && ((roomsId == "") || (roomsId == undefined))){

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




	/* календарь на странице form */

	$(function() {

    $("#datepicker-arrival").datepicker( {minDate: 0} );

    $("#datepicker-departure").datepicker( {minDate: 0} );
  });


	var today = new Date();
	var todayAtMidn = new Date(today.getFullYear(), today.getMonth(), today.getDate());

	var arrivalDate = new Date();
	var dateOfDeparture = new Date();


	function divideDate(id, order){

		var inputDatepicker = document.querySelector('#' + id).value;
		console.log('inputDatepicker ' + inputDatepicker);

		if(inputDatepicker.length > 2){

			var dt = new Date(inputDatepicker);

			var month = dt.getMonth()+1;
			var day = dt.getDate();
			var year = dt.getFullYear();

			document.querySelector('#' + id).value = day;
			document.querySelector('#' + id).parentNode.children[1].value = month;
			document.querySelector('#' + id).parentNode.children[2].value = year;
			$('#' + id).parent().children().css('color', '#0ab89d');

			if(order == 1){

				arrivalDate = new Date(inputDatepicker);
				console.log('arrivalDate ' + arrivalDate);
			}
			else if(order == 2){

				dateOfDeparture = new Date(inputDatepicker);
				console.log('dateOfDeparture ' + dateOfDeparture);
			}
		}
	}


	$('#datepicker-arrival').change(function(){

		var arrivalId = $(this).attr('id');

	  divideDate(arrivalId, 1);
	});


	$('#datepicker-departure').change(function(){

	  var departureId = $(this).attr('id');

	  divideDate(departureId, 2);
	});



	/* на странице form - переключение на следующий input даты */


	$('.date input').focus(function(){

		var inputValue = $(this).val();
		console.log(inputValue + ' --- inputValue');

		if(inputValue == ""){

	  	this.addEventListener("keyup", function(keyNum) {

	  		if (keyNum.which > 47){

				  var inputValue = $(this).val();
				  var inputLength = inputValue.length;

				  if(inputLength == 2){

				  	$(this).next().focus();
				  }

				  else if(inputLength == 4){

				  	$(this).focusout();
				  }
				 }
			});
		}
	});



	/* на странице form - подсвека даты */


	$('.date').focusout(function(){

		var dates = $(this).children();
		var result;

		var check = function(i, boolean){

			var dateValue = dates[i].value;
			var dateLength = dateValue.length;

			if( (dateLength == 2) && (i < 2) ){

				i++;

				check(i, true);      //--рекурсия
			}

			else if((dateLength == 4) && (i == 2)){

				return result = true;
			}

			else{

				return result = false;
			}
		};

		check(0,true);

		if(result){

			$(this).children().css('color', '#0ab89d');
			changePrice();
		}
		else{

			$(this).children().css('color', '#979696');
		}
	});



	/* на странице form - переключатель блока выбора номера и блока выбора типа коттеджа */

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
		var inputType = $(this).attr('type');
		var emailPattern=/[0-9a-z_]+@[0-9a-z_]+\.[a-z]{2,5}/i;
		var telPattern=/[\(\)0-9\+\-]{5,11}/i;

		if((personalVal != "") && (inputType == "text")){

			$(this).parent().children('.check-mark').css('display','block');
		}

		else if((personalVal == "") && (inputType == "text")){

			$(this).parent().children('.check-mark').css('display','none');
		}

		else if((inputType == "email") && (emailPattern.test(personalVal))){

			$(this).parent().children('.error').css('display','none');
			$(this).parent().children('.check-mark').css('display','block');
		}

		else if((inputType == "email") && (emailPattern.test(personalVal) == false)){

			$(this).parent().children('.check-mark').css('display','none');
			$(this).parent().children('.error').css('display','block');
		}

		else if((inputType == "tel") && (telPattern.test(personalVal))){

			$(this).parent().children('.check-mark').css('display','block');
			$(this).parent().children('.error').css('display','none');
		}

		else if((inputType == "tel") && (telPattern.test(personalVal) == false)){

			$(this).parent().children('.check-mark').css('display','none');
			$(this).parent().children('.error').css('display','block');
		}
	});



	/* на странице form выбор блока "Сейчас" при клике на любое место блока */


	$('.payment__card').on('click', function(){

		$('#pay-now').trigger('click');
	});



	/* на странице form проверка даты и вывод предупреждения */


	$('.reservation-form-btn').on('click', function(){

		$('.date-of-rest__inputs input').each(function(indx){

			var inputVal = $(this).val();

			if(inputVal == ""){

				$(".payment__to-pay-warning").css('display','block');
			}
		});
	});





	/* на странице form - подсчет количества дней */


	function dateChange(elem){

		$(elem).change(function(){

		  var dayChangeValue = $(this).val();
		  var dayChangeLength = dayChangeValue.length;
		  var inputDateId = $(this).attr('id');

		  if((inputDateId == "datepicker-arrival") && (dayChangeLength == 2)){

				arrivalDate.setDate(dayChangeValue);
				console.log(arrivalDate + " !!!! arrivalDate -- setDate");
		  }

		  else if((inputDateId == "arrival-month") && (dayChangeLength == 2)){

				arrivalDate.setMonth(dayChangeValue - 1);
				console.log(arrivalDate + " !!!! arrivalDate -- setMonth");
		  }

		  else if((inputDateId == "arrival-year") && (dayChangeLength == 4)){

				arrivalDate.setFullYear(dayChangeValue);
				console.log(arrivalDate + " !!!! arrivalDate -- setFullYear");
		  }


		  else if((inputDateId == "datepicker-departure") && (dayChangeLength == 2)){

				dateOfDeparture.setDate(dayChangeValue);
				console.log(dateOfDeparture + " !!!! dateOfDeparture -- setDate");
		  }

		  else if((inputDateId == "departure-month") && (dayChangeLength == 2)){

				dateOfDeparture.setMonth(dayChangeValue - 1);
				console.log(dateOfDeparture + " !!!! dateOfDeparture -- setMonth");
		  }

		  else if((inputDateId == "departure-year") && (dayChangeLength == 4)){

				dateOfDeparture.setFullYear(dayChangeValue);
				console.log(dateOfDeparture + " !!!! dateOfDeparture -- setFullYear");
		  }
		})
	}

	var days = 0;

	function daysInterval(elem){

		$(elem).change(function(){

			console.log(arrivalDate + " arrivalDate daysInterval");
			console.log(dateOfDeparture + " dateOfDeparture daysInterval");
			console.log(todayAtMidn + " todayAtMidn daysInterval");

			var msecPerDay = 1000 * 60 * 60 * 24;

			var arrivalMsec = arrivalDate.getTime();
			var departureMsec = dateOfDeparture.getTime();
			var todayMsec = todayAtMidn.getTime();

			var todayInDays = Math.floor(todayMsec / msecPerDay);
			var arrivalInDays = Math.floor(arrivalMsec / msecPerDay);

			console.log(todayInDays + " todayAtMidn In Days");
			console.log(arrivalInDays + " arrival In Days");


			if((todayInDays <= arrivalInDays) && (arrivalMsec < departureMsec)){

				var interval = departureMsec - arrivalMsec;

				days = Math.floor(interval / msecPerDay);

				console.log(days + " +++++++++++++ days");
				changePrice();
			}
		});
	}


	$('.date input').focus(function(){

	  dateChange(this);
	  daysInterval(this);
	});

	$('#datepicker-arrival').change(function(){

		//var inputs = $('.date input');

	  dateChange(this);

	  var arrivalMonth = $('#arrival-month');
	  var arrivalYear = $('#arrival-year');

	  dateChange(arrivalMonth);
	  dateChange(arrivalYear);

	  daysInterval(this);
	  changePrice();
	});

	$('#datepicker-departure').change(function(){

	  dateChange(this);

	  var departureMonth = $('#departure-month');
	  var departureYear = $('#departure-year');

	  dateChange(departureMonth);
	  dateChange(departureYear);

	  daysInterval(this);
	  changePrice();
	});



	/* на странице form - стоимость выбранного номера или коттеджа */


	var selectPrice = 3400;

	var economyPrice = 3400;
	var standardPrice = 4000;
	var standardPlusPrice = 4500;
	var luxPrice = 5700;

	var flagshipPrice = 6800;
	var lacustrinePrice = 7500;
	var alderPrice = 8000;
	var portPrice = 9000;

	$('#hotel-input').on('click', function(){

		selectPrice = economyPrice;
		changePrice()
	});

	$('#cottage-input').on('click', function(){

		selectPrice = flagshipPrice;
		changePrice()
	});


	$('#type-of-room__features-economy').on('click', function(){

		selectPrice = economyPrice;
		changePrice()
	});

	$('#type-of-room__features-standard').on('click', function(){

		selectPrice = standardPrice;
		changePrice()
	});

	$('#type-of-room__features-standard-plus').on('click', function(){

		selectPrice = standardPlusPrice;
		changePrice()
	});

	$('#type-of-room__features-lux').on('click', function(){

		selectPrice = luxPrice;
		changePrice()
	});



	$('#type-of-cottage__features-flagship').on('click', function(){

		selectPrice = flagshipPrice;
		changePrice()
	});

	$('#type-of-cottage__features-lacustrine').on('click', function(){

		selectPrice = lacustrinePrice;
		changePrice()
	});

	$('#type-of-cottage__features-alder').on('click', function(){

		selectPrice = alderPrice;
		changePrice()
	});

	$('#type-of-cottage__features-port').on('click', function(){

		selectPrice = portPrice;
		changePrice()
	});



	function changePrice(){

		var actualPrice = days * selectPrice;

		$('.payment__to-pay-price').text(actualPrice + ' РУБ.');

		console.log('actualPrice == ' + actualPrice);
	};



});


