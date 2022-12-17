import { Component, ContentChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OpenMenuService } from '../open-menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public router: Router, private openMenuService: OpenMenuService) { }

  ngOnInit(): void {

  }

}
