import { NgModule } from "@angular/core";

import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { RestaurantsServices } from "app/restaurants/restaurants.service";
import { OrderService } from "app/order/order.service";

@NgModule({
    providers:[ShoppingCartService, RestaurantsServices, OrderService]
})

export class CoreModule{

}