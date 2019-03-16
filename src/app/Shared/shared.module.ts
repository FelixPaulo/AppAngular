import { NgModule, ModuleWithProviders } from "@angular/core";

import { InputComponent } from "./input/input.component";
import { RadioComponent } from "./radio/radio.component";
import { RatingComponent } from "./rating/rating.component";

import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { RestaurantsServices } from "app/restaurants/restaurants.service";
import { OrderService } from "app/order/order.service";
import { SnackbarComponent } from './messages/snackbar/snackbar.component';
import { NotificationService } from "./messages/notification.service";
import {LoginService} from '../security/login/login.service';
import { LoggedInGuard } from "app/security/loggedin.guard";
import {LeaveOrderGuard} from '../order/leave-order.guard';

@NgModule({
    declarations:[InputComponent, RadioComponent, RatingComponent, SnackbarComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    //os modulos que importar este modulo nao irá precisar importar esses modulos exports
    exports: [InputComponent, RadioComponent, SnackbarComponent,
             RatingComponent, CommonModule, 
             FormsModule, ReactiveFormsModule]
})

export class SharedModule{
    static forRoot(): ModuleWithProviders{
        return {
            ngModule: SharedModule,
            providers:[ShoppingCartService, RestaurantsServices, OrderService, NotificationService, LoginService, LoggedInGuard, LeaveOrderGuard]
        }
    }
}