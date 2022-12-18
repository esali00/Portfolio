import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  constructor(public router: Router, private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  public onClick(id: string) {
    this.viewportScroller.setOffset([0,0]);
    this.viewportScroller.scrollToAnchor(id)
  }

}
