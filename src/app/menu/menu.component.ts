import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OpenMenuService } from '../open-menu.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(public router: Router, private openMenuService: OpenMenuService) {}

  closeMenu() {
    this.openMenuService.openedMenu = false
  }

  ngOnInit(): void {

  }

}
