import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { RestaurantsServices } from '../../restaurants/restaurants.service';

import {MenuItem} from "../menu-item/menu-item.model";

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>

  constructor(private restaurantsService: RestaurantsServices, private route: ActivatedRoute) { }

  ngOnInit() {
    this.menu = this.restaurantsService.menuOfRestaurant(this.route.parent.snapshot.params['id']);
  }

  addMenuItem(item: MenuItem){
    //não ta funcionando 
    console.log(item);
  }
}
