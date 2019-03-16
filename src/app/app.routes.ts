import {Routes} from '@angular/router'
import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './security/login/login.component';
import { LoggedInGuard } from './security/loggedin.guard';

export const ROUTES: Routes = [
    //quando nao epceficar nada ou vazia quero que meu componente direcione para pagina home
    {path: '', component: HomeComponent},
    {path: 'login/:to', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    //Quando o modulo de roteamento encontrar o conteudo about quero que mostre o meu conteudo da pasta about
    {path: 'about', loadChildren: './about/about.module#AboutModule'},
    {path: 'order', loadChildren: './order/order.module#OrderModule', canLoad: [LoggedInGuard], canActivate: [LoggedInGuard]},
    {path: 'order-summary', component: OrderSummaryComponent},
    {path: 'home', component: HomeComponent},
    {path: 'restaurants', component: RestaurantsComponent},
    {path: 'restaurants/:id', component: RestaurantDetailComponent,
    //so sera acionado se eu por restaurants/id/menu ou restaurants/id/reviews; 
    children:[
        //se eu não passar nenhum caminho, por padrao quero que redirecione para o menu exatamento '' se colocar qualquer coisa eue ja nao vai redirecionar 'full'
        {path: '', redirectTo: 'menu', pathMatch: 'full'},
        {path: 'menu', component: MenuComponent},
        {path: 'reviews', component: ReviewsComponent}  
    ]
    },
    {path: '**', component: NotFoundComponent},
]