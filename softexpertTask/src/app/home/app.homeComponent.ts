import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'content',
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent implements OnInit {
	ngOnInit() { 
		//sponser carousel
		$('.sponser .carousel').slick({
		  dots: false,
		  infinite: false,
		  speed: 300,
		  slidesToShow: 5,
		  slidesToScroll: 5,
	      prevArrow:"<i class='fa fa-chevron-left prev'></i>",
	      nextArrow:"<i class='fa fa-chevron-right next'></i>",
			  responsive: [
			    {
			      breakpoint: 1024,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 3,
			        infinite: true
			      }
			    },
			    {
			      breakpoint: 600,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2,
			        infinite: true
			      }
			    },
			    {
			      breakpoint: 480,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1,
			        infinite: true
			      }
			    }
		  	]
		});

		//menu carousel
			$('.menu .mobile-view .carousel').slick({
				dots: false,
				infinite: true,
				speed: 300,
				slidesToShow: 1,
				slidesToScroll: 1,
					prevArrow:"<i class='fa fa-chevron-left prev'></i>",
					nextArrow:"<i class='fa fa-chevron-right next'></i>",
			});
	}
}

