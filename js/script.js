$(document).ready(function() {


	/* reviews-carousel */

	$("#reviews-carousel").owlCarousel({
		items : 1,
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




	/* gallery-carousel */

	$("#gallery-carousel").owlCarousel({
		items : 6,
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


	$("#gallery-carousel a").click(function(e){
		e.preventDefault();
		var gallery_main_img = $(this).children().attr('src');
		$('#gallery__main-img').attr('src', gallery_main_img);
	});



	/*$("#gallery-carousel a").click(function(e){
		e.preventDefault();
		var gallery_main_img = $(this).attr('href');
		$('#gallery-main-img').attr('src', gallery_main_img);
	});*/


/*

	$('window').on('resize' function() {
		var windowWidth = $(window).width();
		if(windowWidth < 768) {
			gallery.destroy();
		}
		else {
			gallery.reinit({
				items: 3;
			});
		}
	});
*/
/*

	$('#burger').on('click', function(e){
		e.preventDefault();
		$('main-menu').slideToggle();
	});
*/

});