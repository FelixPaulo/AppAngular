import { Component, OnInit } from '@angular/core';
import { RestaurantsServices } from '../restaurants/restaurants.service';
import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  restaurantTeste: Restaurant

  constructor(private restaurantsService : RestaurantsServices, private route: ActivatedRoute) { }

  ngOnInit() {

    //this.route.snapshot.params['id'] dessa forma consigo obter o valor do meu parametro definido com id 
    //como quero usar somente uma vez eu usso o snapshot. senao poderia usar o subscribe 
    this.restaurantsService.restaurantById(this.route.snapshot.params['id'])
      .subscribe(restaurant => this.restaurantTeste = restaurant)
  }
}
