import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JerseyComponent } from './jersey/jersey.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
    {
        path: 'home', pathmatch: 'full',
        component: HomeComponent
    },
    {
        path: '', redirectTo: 'home'
    },
    {
        path: 'jerseys', pathmatch: 'full',
        component: JerseyComponent
    },
    {
        path: 'cart', pathmatch: 'full',
        component: CartComponent
    },
    {
        path: 'login', pathmatch: 'full',
        component: LoginComponent
    },
    {
        path: '**', redirectTo: 'home'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
