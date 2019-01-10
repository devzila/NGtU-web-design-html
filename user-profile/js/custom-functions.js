$(document).ready(function() {
    $(window).scroll(function() {
        if ($(document).scrollTop() > 100) {
            $('.fixed-top').addClass('scroll-nav');
			 $('.scrollup').fadeIn();
        }
        else {
            $('.fixed-top').removeClass('scroll-nav');
			 $('.scrollup').fadeOut();
        }
    });
	
	
	$('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
	
  $('#case-slider').owlCarousel({
            loop:true,
            margin:40,
            nav:false,
            autoplay:true,
            responsive:{
               0:{
                  items:1
               },
               600:{
                  items:1
               },
               1000:{
                  items:4
               }
            }
         });
		 
		
		
	$( function() {
    $( "#slider-range-min" ).slider({
      range: "min",
      value: 10,
      min: 1,
      max: 100,
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.value + " miles"  ) ;
      }
    });
    $( "#amount" ).val(  $( "#slider-range-min" ).slider( "value" ) + " miles" );
  } );	
      
    $(".scrollbar-scroll").tinyscrollbar({ thumbSize: 50 }); 
		$( ".datepicker" ).datepicker();
});