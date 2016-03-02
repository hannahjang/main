$(document).ready(function(){


	var wheight = $(window).height(); // get height of the window
	
	$('.fullheight').css('height', wheight); //make the size fit to the window 
	
	//when window size is different, resize the height
	$(window).resize(function() {
		var wheight = $(window).height();
		$('.fullheight').css('height', wheight);
	})
	
	//smoothScroll
	//css-tricks smooth page scroll
	var topoffset = 150;
  	$('a[href*=#]:not([href=#])').click(function() {
  
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topoffset
        }, 1000); 
        
        return false;
      	} 
    	} 
  	}); //smoothScroll end
  	
  	
  	
  		//paragraph typing, border color changing, indicating location on bottom border, showing icons
	
	$(window).scroll(function() {
		var windowpos = $(window).scrollTop() + topoffset +10;
		
		
		if (windowpos > $('#one').offset().top) {
			$('.menu').removeClass('on');
			$('#home').addClass('on');		
		}
		
		if (windowpos > $('#two').offset().top) {
			$('.menu').removeClass('on');
			$('#about').addClass('on');	
		}
		
		if (windowpos > $('#three').offset().top) {
			$('.menu').removeClass('on');
			$('#portfolio').addClass('on');	
			
		}

		if (windowpos > $('#four').offset().top) {
			$('.menu').removeClass('on');
			$('#trip').addClass('on');	
		}

		if (windowpos > $('#five').offset().top) {
			$('.menu').removeClass('on');
			$('#contact').addClass('on');	
			
		}
		
	}); 




  
  }); //document ready function end
  




