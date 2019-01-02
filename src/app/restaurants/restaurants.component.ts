import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantsServices } from './restaurants.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[];

  //injecao de dependencia
  constructor(private restauransService: RestaurantsServices) { }

  ngOnInit() {
    this.restauransService.restaurants()
    //o que eu receber no caso restaurants vou passar para minha variavel this.restaurants isso acontece assincrono
    .subscribe(restaurants => this.restaurants = restaurants);
  }

}
