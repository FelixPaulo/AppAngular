import { Injectable } from "@angular/core";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { CartItem } from "app/restaurant-detail/shopping-cart/cart-item.model";
import { Order, OrderItem } from "./order.model";
import { Observable } from "rxjs/Observable";
import { HttpClient} from '@angular/common/http';
import { MEAT_API } from '../app.api';

@Injectable()
export class OrderService{
  
    constructor(private cartService: ShoppingCartService, private http: HttpClient){

    }

    cartItems(): CartItem[]{
        return this.cartService.items;
    }

    increaseQty(item: CartItem){
        this.cartService.increaseQty(item);
    }

    decreaseQty(item: CartItem){
        this.cartService.decreaseQty(item);
    }

    remove(item: CartItem): any {
        this.cartService.removeItem(item);
      }  
      
      itemsValue(): number {
        return this.cartService.total();
      }

      checkOrder(order: Order): Observable<string> {
        let teste = this.http.post<Order>(`${MEAT_API}/orders`, order)
                             .map(order => order.id);
        return teste;
      }

      clear(): any {
        this.cartService.clear();
      }
}