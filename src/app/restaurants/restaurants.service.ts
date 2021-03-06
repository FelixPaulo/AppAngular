import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Restaurant } from "./restaurant/restaurant.model";
import {MEAT_API} from '../app.api';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { MenuItem } from "../restaurant-detail/menu-item/menu-item.model";

//No angular pra resolver a injecao de dependencia de uma interface no caso a do http precisa adicionar o injectable
@Injectable()
export class RestaurantsServices{
    
  constructor(private http: HttpClient){}

  restaurants(search?: string): Observable<Restaurant[]>{
    //todos os tipos do metodo http retornam um observable da bibloteca rxjs

    let params: HttpParams = undefined;

    if(search){
      params = new HttpParams().append('q', search);
    }

      return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`, {params: params});
  }

  restaurantById(id: string): Observable<Restaurant>{
    return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`);
  }

  reviewOfRestaurant(id: string): Observable<any>{
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`);
  }

  menuOfRestaurant(id: string): Observable<MenuItem[]>{
    return this.http.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`);
  }
}