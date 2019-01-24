import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
// importar routes para as rotas
import{ROUTES} from './app.routes';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component'
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component'
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { SharedModule } from './Shared/shared.module';
// import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import { ShoppingCartService } from './restaurant-detail/shopping-cart/shopping-cart.service';
// import { OrderComponent } from './order/order.component';
// import { InputComponent } from './Shared/input/input.component';
// import { RadioComponent } from './Shared/radio/radio.component';
// import { OrderItemsComponent } from './order/order-items/order-items.component';
// import { OrderService } from './order/order.service';
// import { DeliveryCostsComponent } from './order/delivery-costs/delivery-costs.component';
// import { RestaurantsServices } from './restaurants/restaurants.service';
// import { AboutComponent } from './about/about.component';
// import { RatingComponent } from './Shared/rating/rating.component';
// import {CoreModule} from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    // AboutComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    // OrderComponent,
    // InputComponent,
    // RadioComponent,
    // OrderItemsComponent,
    // DeliveryCostsComponent,
    OrderSummaryComponent,
    // RatingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    //Esses dois ja estao sendo importados no shared.module.ts
    // FormsModule,
    // ReactiveFormsModule,
    SharedModule.forRoot(),
    // CoreModule,
    //Devo importar minhas rotas definidas no caso o ROUTES
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules})
  ],

  //sempre que alguem pedir esse LOCALE_ID esse cara ira retornar o valor pt-BR
  // providers: [RestaurantsServices, ShoppingCartService, OrderService, {provide: LOCALE_ID, useValue: 'pt-BR'}],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
