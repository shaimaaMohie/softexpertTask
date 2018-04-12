import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'nav',
  templateUrl: './nav.html',
  styleUrls: ['./nav.scss']
})
export class NavComponent implements OnInit {
	ngOnInit() {

		// slide toggle mobile menu
			if ( $(window).width() < 992 ) {
				$('.menu-btn').on('click', function() {
					$('.navbar-nav').slideToggle();
					});
				}


		// fixed nav in scroll if screen larger than 767
		$(window).scroll(function() {
				var height = $(window).scrollTop();
				if(height  > 20) {
						$('.nav .desktop-view').addClass('fixed');
						$('.nav .mobile-view').addClass('fixed');
				} else {
						$('.nav .desktop-view').removeClass('fixed');
						$('.nav .mobile-view').removeClass('fixed');
				}
		});

    // toggle cart-block
      $('.icon').on('click', function () {
          $('.cart-block').slideToggle();
      });
		

	}
}
