import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit() {

    //scroll top
      $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
          $(".scrollup").css("opacity", "1");
  
        } else {
          $(".scrollup").css("opacity", "0");
        } 
      });
      $(".scrollup").on('click', function(e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: "0px" });
      });


  }
}