import { NgModule } from "@angular/core";
import { OrderComponent } from "./order.component";
import { OrderItemsComponent } from "./order-items/order-items.component";
import { DeliveryCostsComponent } from "./delivery-costs/delivery-costs.component";
import { SharedModule } from "app/Shared/shared.module";

import {RouterModule, Routes} from '@angular/router';
import { LeaveOrderGuard } from "./leave-order.guard";

const ROUTES: Routes = [
    {path:'', component: OrderComponent, canDeactivate: [LeaveOrderGuard]}
]


@NgModule({
    declarations: [OrderComponent, OrderItemsComponent, DeliveryCostsComponent],
    //Lembrando que nao usamos o forroot porque não estamos no modulo raiz que seria o app.module.ts
    imports: [SharedModule, RouterModule.forChild(ROUTES)]
})

export class OrderModule{

}