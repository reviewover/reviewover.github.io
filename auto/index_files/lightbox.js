/**
 * jQuery.browser.mobile (http://detectmobilebrowser.com/)
 * jQuery.browser.mobile will be true if the browser is a mobile device
 **/
(function(a){ (jQuery.browser=jQuery.browser||{}).mobile=/android.+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);


$(document).ready(function(){

	   					
	   					if(jQuery.browser.mobile)
								{
								   $('body').attr('using_mobile','yes');
								}
								else
								{
								   $('body').attr('using_mobile','no');
								}
	   					
	   					
	   					$('body').attr('popup_opened_this_session','no');
	   					
	   					
	   					// if you want to disable mobile check, uncomment this line below:
	   					// if (1 == 1) {
	   					
	   					// and comment this:
	   					if ( $('body').attr('using_mobile') == 'no' ) {
	   						
		
	   					var popup_name =  $(".images_lightbox").attr('load_popup');
	   					
	   					
	   					// I've added 'ppp_' to avoid cookie override (rare case, but possible)
	   					var check_cookie = $.cookie('ppp_' + popup_name);
	   					
	   					if (typeof check_cookie != 'undefined') { // in case of cookie exists
	   						
	   								// do nothing
	   						
	   					} else {  // such cookie doesn't exist
	   						
	   							
	   								var popup_opened_this_session = false;
	   						
									   $(".images_lightbox").colorbox( {
									   
											   //html: $('#lightbox_source').html(),
											   
											   href: 'popups/' + $(".images_lightbox").attr('load_popup'),
											   
											   
											   
											   width: $("#popup_size").attr('popup_width'),   // Size in pixels for popup window, you can adjust it if required.
											   height: $("#popup_size").attr('popup_height'),
											   opacity: 0.7, 
											   overlayClose: false,
											   onOpen:function(){
											   									   
											   if ($('body').attr('popup_opened_this_session') == 'yes') {  // This is check, if user already had popup during this session
											   	
													   $.colorbox.close();
													   return;
											   	}
											   },
											   
											   onLoad:function(){  
											   
											   
											   					
											   
											   					var popup_name =  $(".images_lightbox").attr('load_popup');
												   				var cookie_name = 'ppp_' + popup_name;
																	
																	$.cookie(cookie_name, 1 , { expires: 1 });  // In this   { expires: 1 } - you can change amount in days changing this value. Don't touch first '1'

											   					
											   					
											   					$('body').attr('popup_opened_this_session','yes');
											   
											   					window.open($(this).attr('href'),'_blank'); 
											   					

											   					
											   					},

											   title: function(){
											     return '<a href="#" style="font-size: 18px;" onclick="parent.jQuery.colorbox.close(); return false;">No Thanks</a>';
											   }

									});
									   												
	   						
	   					}
	   					
	  
	   					}




});