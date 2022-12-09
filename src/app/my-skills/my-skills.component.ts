import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from "aos"


@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent implements OnInit {

  icons: string[] = ["Angular_icon","Typescript_icon","JavaScript_icon","HTML_icon","CSS_icon","Firebase_icon","Git_icon","Scrum_icon","Rest-Api_icon","Material Design_icon"]

  constructor(public router: Router) { }

  ngOnInit(): void {
    AOS.init()
  }

}
