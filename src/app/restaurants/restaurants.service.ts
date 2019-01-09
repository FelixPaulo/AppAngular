import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Restaurant } from "./restaurant/restaurant.model";
import {MEAT_API} from '../app.api';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ErrorHandler } from "app/app.error-handler";
import { MenuItem } from "../restaurant-detail/menu-item/menu-item.model";

//No angular pra resolver a injecao de dependencia de uma interface no caso a do http precisa adicionar o injectable
@Injectable()
export class RestaurantsServices{
    
  constructor(private http: Http){}

  restaurants(): Observable<Restaurant[]>{
    //todos os tipos do metodo http retornam um observable da bibloteca rxjs
      return this.http.get(`${MEAT_API}/restaurants`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
  }

  restaurantById(id: string): Observable<Restaurant>{
    return this.http.get(`${MEAT_API}/restaurants/${id}`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError);
  }

  reviewOfRestaurant(id: string): Observable<any>{
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError);
  }

  menuOfRestaurant(id: string): Observable<MenuItem[]>{
    return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError);
  }
}