import { ViewportScroller } from '@angular/common';
import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import * as Aos from 'aos';

  


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  fragment: any;
  subscription: any;

  constructor(public router: Router, public route: ActivatedRoute, public viewportScroller: ViewportScroller) {  }
 
  ngOnInit() {
    Aos.init()
  }

  ngAfterViewInit() {
    this.route.fragment.subscribe(fragment => {
      this.fragment = fragment;
      setTimeout(() => this.scrollToAnchor(), 10);
    });
  }

  ngAfterViewChecked() {
   let triangle_background_postion = document.querySelector<HTMLDivElement>(".triangle-background").getBoundingClientRect().top

   if (triangle_background_postion < 75) {
      document.querySelector<HTMLDivElement>(".navbar").style.display = "none"
   } else {
    document.querySelector<HTMLDivElement>(".navbar").style.display = "flex"
   }
  }

  scrollToAnchor(): void {
    try {
      if (this.fragment) {
        // document.querySelector('#' + this.fragment).scrollIntoView({behavior: "smooth"});
        this.viewportScroller.setOffset([0,80])
        this.viewportScroller.scrollToAnchor(this.fragment)
      }
    } catch (e) { }
  }

}
