https://wordpress.org/plugins/easy-twitter-feed-widget/installation/
https://codepen.io/mythicalpizza/pen/NqjbEe
https://dev.twitter.com/web/embedded-timelines#customization
https://github.com/kevinburke/customize-twitter-1.1
http://stackoverflow.com/questions/14303710/how-to-customize-twitter-widget-style


<script>
				//This allows us to get the iframes elements!
				!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");


				// Customize twitter feed
				var counter_twitter_attemps = 0 ;
				function style_twitter_timeline() {
				    setTimeout( function() {
					    style = '<style>' +
						    'img.u-photo.avatar{display:none !important;}' + 
						    'li.h-entry.tweet{padding: 9px 21px 10px 25px;}' +
						    'p.e-entry-title{font-size: 13px;}' + 
						   // '.load-more.customisable{display: none; margin-right: 7px;}' +
						    '</style>' ;
						script = '<script>' + 
							//"$('.load-more').html('See more news')" +
							//"console.log ($('.load-more').html());" +
						//	"$( document ).ready(function() { console.log ($('.load-more').html());  });" +
							//'var element=document.getElementById("header");' +
							//'element.innerHTML="New Header";'
							 	'<' + '/' + 'script>' ;
				    	$("#twitter-timeline-link-for-index-page").contents().find('head').append(style);   
				    	//$("#twitter-timeline-link-for-index-page").contents().find('body').append(script);   
				    	//$("#twitter-timeline-link-for-index-page").contents().find('.load-more').click() ;   	    	
						counter_twitter_attemps ++;
						 if ( counter_twitter_attemps < 9 ) {
							 style_twitter_timeline();
					        }
					   }, 500);
				}
				style_twitter_timeline();	
				
				function load_more_tweets(){
					$("#twitter-timeline-link-for-index-page").contents().find('.load-more').click() ;	
				}		
</script>
