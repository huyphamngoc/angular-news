import { Component, OnInit } from '@angular/core';
import {routes} from '../../app-routing.module';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {
  routes = Object.values(routes);
  constructor() { }

  ngOnInit() {
  }

}
