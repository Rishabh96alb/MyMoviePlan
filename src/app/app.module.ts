import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserloginComponent } from './components/userlogin/userlogin.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { AddmovieComponent } from './components/addmovie/addmovie.component';
import { AdminpanelComponent } from './components/adminpanel/adminpanel.component';
import { BookingdetailsComponent } from './components/bookingdetails/bookingdetails.component';
import { BookingsmasterComponent } from './components/bookingsmaster/bookingsmaster.component';
import { CartComponent } from './components/cart/cart.component';
import { ChangeuserpasswordComponent } from './components/changeuserpassword/changeuserpassword.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { DetailsComponent } from './components/details/details.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { LandingComponent } from './components/landing/landing.component';
import { MovielistComponent } from './components/movielist/movielist.component';
import { MoviemasterComponent } from './components/moviemaster/moviemaster.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './components/signup/signup.component';
import { UpdateuserComponent } from './components/updateuser/updateuser.component';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { ViewuserbookingsComponent } from './components/viewuserbookings/viewuserbookings.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserloginComponent,
    AdminloginComponent,
    AddmovieComponent,
    AdminpanelComponent,
    BookingdetailsComponent,
    BookingsmasterComponent,
    CartComponent,
    ChangeuserpasswordComponent,
    CheckoutComponent,
    DetailsComponent,
    ForbiddenComponent,
    LandingComponent,
    MovielistComponent,
    MoviemasterComponent,
    NavbarComponent,
    SignupComponent,
    UpdateuserComponent,
    UserdashboardComponent,
    UserlistComponent,
    ViewuserbookingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
