import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { NavbarComponent } from './template/navbar/navbar.component';
import { VehicleApplicationService } from './vehicleapplication/vehicle-application.service';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddPartsComponent } from './add-parts/add-parts.component';
import { ShowPartsComponent } from './show-parts/show-parts.component';


@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserRegisterComponent,
    NavbarComponent,
    CustomerDashboardComponent,
    AdminDashboardComponent,
    AddPartsComponent,
    ShowPartsComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ VehicleApplicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
