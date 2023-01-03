import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from "aos"



@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss'],
  animations: [] 
})
export class MyProjectsComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
    AOS.init()
    this.hoverProjectImg()
    this.noHoverProjectImg()
  }

  hoverProjectImg() {
    for (let i = 1; i <= 5; i++) {
      if (i % 2 == 0) {
        document.querySelector<HTMLDivElement>(`.project-reverse-${i}`).addEventListener("mouseover", () => {
          document.querySelector<HTMLDivElement>(`.prasentation-project-btn-container-${i}`).style.display = "block"
          document.querySelector<HTMLDivElement>(`.border-img-${i}`).style.border = "5px solid black"
          document.querySelector<HTMLDivElement>(`.project-arrow-circle-${i}`).style.backgroundColor = "black";
          document.querySelector<HTMLDivElement>(`.project-arrow-${i}`).style.opacity = "1";
          document.querySelector<HTMLDivElement>(`.project-arrow-${i}`).style.animation = "swingArrowUpRight 225ms ease-in-out";
          document.querySelector<HTMLDivElement>(`.project-info-${i}`).style.display = "block"
        }) 
      } else {
        document.querySelector<HTMLDivElement>(`.project-${i}`).addEventListener("mouseover", () => {
          document.querySelector<HTMLDivElement>(`.prasentation-project-btn-container-${i}`).style.display = "block"
          document.querySelector<HTMLDivElement>(`.border-img-${i}`).style.border = "5px solid black"
          document.querySelector<HTMLDivElement>(`.project-arrow-circle-${i}`).style.backgroundColor = "black";
          document.querySelector<HTMLDivElement>(`.project-arrow-${i}`).style.opacity = "1";
          document.querySelector<HTMLDivElement>(`.project-arrow-${i}`).style.animation = "swingArrowUpRight 225ms ease-in-out";
          document.querySelector<HTMLDivElement>(`.project-info-${i}`).style.display = "block"
        })
      }
      
    }
   
  }

  noHoverProjectImg() {
    for (let i = 1; i <= 5; i++) {
      if (i % 2 == 0) {
        document.querySelector<HTMLDivElement>(`.project-reverse-${i}`).addEventListener("mouseout", () => {
          document.querySelector<HTMLDivElement>(`.prasentation-project-btn-container-${i}`).style.display = "none"
          document.querySelector<HTMLDivElement>(`.border-img-${i}`).style.border = "5px solid transparent"
          document.querySelector<HTMLDivElement>(`.project-arrow-circle-${i}`).style.backgroundColor = "transparent";
          document.querySelector<HTMLDivElement>(`.project-arrow-${i}`).style.opacity = "0";
          document.querySelector<HTMLDivElement>(`.project-arrow-${i}`).style.animation = "";
          document.querySelector<HTMLDivElement>(`.project-info-${i}`).style.display = "none"
        })
      } else {
        document.querySelector<HTMLDivElement>(`.project-${i}`).addEventListener("mouseout", () => {
          document.querySelector<HTMLDivElement>(`.prasentation-project-btn-container-${i}`).style.display = "none"
          document.querySelector<HTMLDivElement>(`.border-img-${i}`).style.border = "5px solid transparent"
          document.querySelector<HTMLDivElement>(`.project-arrow-circle-${i}`).style.backgroundColor = "transparent";
          document.querySelector<HTMLDivElement>(`.project-arrow-${i}`).style.opacity = "0";
          document.querySelector<HTMLDivElement>(`.project-arrow-${i}`).style.animation = "";
          document.querySelector<HTMLDivElement>(`.project-info-${i}`).style.display = "none"
        })
      }
    }
  }

}

