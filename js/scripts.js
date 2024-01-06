(function($){
	$(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});


		// switch button
		$('.pricebtn').click(function(){
			$('.pricebtn').removeClass('activebtn');
			$(this).addClass('activebtn');
			});

		// nav button active
		$('.menu-area ul li a').click(function(){
			$('.menu-area ul li a').removeClass('navbtn');
			$(this).addClass('navbtn');
			})	
		
		// menu bar
		jQuery('.bg').click(function(){
			jQuery('.menu-area').slideToggle();
		});

		

				
		
		
		
		
		
		
		
		
	});
})(jQuery);