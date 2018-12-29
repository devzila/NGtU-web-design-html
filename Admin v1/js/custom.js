$( document ).ready(function() {
    $('.submenu').hide();
	$('.sidebar li a').click(function(){		
		var $submenu = $(this).next('.submenu');
		$(".submenu").not($submenu).slideUp();
		if ($submenu.is(":visible")) {
			$submenu.slideUp();
		}  else {
		   $submenu.slideDown();
		  
		}		
		$('.sidebar').find('.active').removeClass('active');
        $(this).addClass('active');
	});
	
	
	$('.fa-bars').click(function(){
		$('body').toggleClass('mini-sidebar');		
	});
	
	$('.bg-overlay').click(function(){
		$('body').removeClass('mini-sidebar');		
	});
	
	
});