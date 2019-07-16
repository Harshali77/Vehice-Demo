import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserLoginComponent} from './user-login/user-login.component'
import {UserRegisterComponent} from './user-register/user-register.component'
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import {AddPartsComponent} from './add-parts/add-parts.component'
const routes: Routes = [
  { path: 'user-login', component: UserLoginComponent },
  {path: 'user-register', component: UserRegisterComponent},
  {path:'customer-dashboard',component:CustomerDashboardComponent},
 { path:'add-parts',component:AddPartsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
