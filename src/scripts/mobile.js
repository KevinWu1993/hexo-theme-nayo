//-----------
//slide-menu
//-----------

import Utils from './utils.js'

module.exports = {

	init: function(){
		if( !Utils.isPc() ){
			
			initSlideMenu();		
		}		
	}
}
	

function initSlideMenu(){

		const  $toggle = $(this);				
		const  $mask   = $('.mask');

		$('.mobile-toggle').click(function(){				

				showMenu($toggle,$mask);	

				$mask.click(function(){
				hideMenu($toggle,$mask);												
				});
		})

		$('.mobile-menu-search').click(function(){	
				hideMenu($toggle,$mask);	
		})

}	

function showMenu( $icon , $mask){

	$icon
	.removeClass('icon-menu')
	.addClass('icon-no-menu');
	
	$('.mobile-menu').show()
	.removeClass('menuSlideOut').addClass('menuSlideIn');

	$('.header')
	.removeClass('slide-left')
	.addClass('slide-right');

	$('.container')
	.removeClass('slide-left')
	.addClass('slide-right');

	$('#footer')
	.removeClass('slide-left')
	.addClass('slide-right');


	$mask.show();

}



function hideMenu( $icon , $mask){

	$icon
	.removeClass('icon-no-menu')
	.addClass('icon-menu');

	$('.mobile-menu')
	.removeClass('menuSlideIn')
	.addClass('menuSlideOut');
	

	$('.header')
	.removeClass('slide-right')
	.addClass('slide-left');
	$('.container')
	.removeClass('slide-right')
	.addClass('slide-left');

	$('#footer')
	.removeClass('slide-right')
	.addClass('slide-left');

	$mask.hide();	
}