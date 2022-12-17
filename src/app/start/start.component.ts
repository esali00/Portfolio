import { Component, OnInit } from '@angular/core';
import { OpenMenuService } from '../open-menu.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  openedMenu: any;

  constructor(private openMenuService: OpenMenuService) { }

  ngOnInit(): void {
    
  }

}
