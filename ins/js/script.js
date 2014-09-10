// JavaScript Document for charity html template

$(document).ready(function() {
	
	
//open searchbar toggle code

"use strict";
		// Search field toggle in top bar
		$('li.search a').click(function(e) {
			$(this).parent().find('#top-search').toggle().focus();
			$('#top-links').toggleClass('search-open');
			e.preventDefault();
		});
		
		
		// Client logo corousel
		"use strict";
		$("#owl-demo").owlCarousel({
		 autoPlay: 3000, //Set AutoPlay to 3 seconds
	  	 items : 4,
      itemsDesktop : [1199,2],
      itemsDesktopSmall : [979,2]
 
  });
// Testiminail  corousel
	"use strict";
	$("#owl-demo-testimonial").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 1,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });	
		
});

