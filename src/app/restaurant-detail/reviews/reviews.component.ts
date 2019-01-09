import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { RestaurantsServices } from '../../restaurants/restaurants.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>

  constructor(private restaurantsService: RestaurantsServices, private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.restaurantsService.reviewOfRestaurant(this.route.parent.snapshot.params['id']);
  }

}
