import {Routes} from '@angular/router'
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';

export const ROUTES: Routes = [
    //quando nao epceficar nada ou vazia quero que meu componente direcione para pagina home
    {path: '', component: HomeComponent},
    //Quando o modulo de roteamento encontrar o conteudo about quero que mostre o meu conteudo da pasta about
    {path: 'about', component: AboutComponent},
    {path: 'home', component: HomeComponent},
    {path: 'restaurants', component: RestaurantsComponent},
    {path: 'restaurants/:id', component: RestaurantDetailComponent}
]