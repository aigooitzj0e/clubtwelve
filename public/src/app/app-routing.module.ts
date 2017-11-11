import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JerseyComponent } from './jersey/jersey.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { EditjerseyComponent } from './editjersey/editjersey.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'jerseys',
        component: JerseyComponent
    },
    {
        path: 'cart',
        component: CartComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
		{
				path: 'admin',
				component: AdminComponent
		},
		{
				path: 'task/:id',
				component: EditjerseyComponent
		}
    {
        path: '**', redirectTo: 'home'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
