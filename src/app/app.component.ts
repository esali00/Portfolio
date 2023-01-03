import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import * as AOS from 'aos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,AfterViewInit {
  title = 'portfolio';
  fragment: any;
  subscription: any;

  constructor(public router: Router, public route: ActivatedRoute, public viewportScroller: ViewportScroller) {  }
 
  ngOnInit() {
    AOS.init();
  }

  ngAfterViewInit() {
    this.route.fragment.subscribe(fragment => {
      this.fragment = fragment;
      setTimeout(() => this.scrollToAnchor(), 10);
    });
  }

  @HostListener("window:scroll")
  removeMenu() {
  //  console.log(event)
   let triangle_background_position = document.querySelector<HTMLDivElement>(".triangle-background").getBoundingClientRect().top
  //  console.log(triangle_background_position)

   if (triangle_background_position < 75) {
      document.querySelector<HTMLDivElement>(".navbar").style.display = "none"
   } else {
    document.querySelector<HTMLDivElement>(".navbar").style.display = "flex"
   }
  }

  scrollToAnchor(): void {
    try {
      if (this.fragment) {
        // document.querySelector('#' + this.fragment).scrollIntoView({behavior: "smooth"});
        if (window.innerWidth >= 1440) {
          this.viewportScroller.setOffset([0,150])
        } else {
          this.viewportScroller.setOffset([0,80])
        }
        this.viewportScroller.scrollToAnchor(this.fragment)
      }
    } catch (e) { }
  }

}
