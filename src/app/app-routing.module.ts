import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Bookings } from './model/Bookings';
import { UserloginComponent } from './components/userlogin/userlogin.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { AddmovieComponent } from './components/addmovie/addmovie.component';
import { AdminpanelComponent } from './components/adminpanel/adminpanel.component';
import { BookingdetailsComponent } from './components/bookingdetails/bookingdetails.component';
import { BookingsmasterComponent } from './components/bookingsmaster/bookingsmaster.component';
import { ChangeuserpasswordComponent } from './components/changeuserpassword/changeuserpassword.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { DetailsComponent } from './components/details/details.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { LandingComponent } from './components/landing/landing.component';
import { MoviemasterComponent } from './components/moviemaster/moviemaster.component';
import { SignupComponent } from './components/signup/signup.component';
import { UpdateuserComponent } from './components/updateuser/updateuser.component';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { ViewuserbookingsComponent } from './components/viewuserbookings/viewuserbookings.component';

const routes: Routes = [

  {
    path:'',
    component:LandingComponent
  },
  {
    path:'adminlogin',
    component:AdminloginComponent
  },
  
  {
    path:'bookingdetails',
    component:BookingdetailsComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'checkout',
    component:CheckoutComponent
  },
  {
    path:'userlogin',
    component:UserloginComponent
  },
  {
    path:'adminpanel',
    component:AdminpanelComponent, children:[
  {
    path:'bookingsmaster',
    component:BookingsmasterComponent
  },
  {
    path:'addmovie',
    component:AddmovieComponent
  },
  {
    path:'details/:usrname',
    component:DetailsComponent
  },
  {path:'update/:usrname',
  component:UpdateuserComponent
  },
  {
    path:'moviemaster',
    component:MoviemasterComponent
  },
  {
    path:'userlist',
    component:UserlistComponent
  }
]},
{path:'forbidden',component:ForbiddenComponent},
  {path:'userdashboard',component:UserdashboardComponent, children:[
   {path:'changepassword',component:ChangeuserpasswordComponent},
   {path:'bookings',component:ViewuserbookingsComponent},
   {path:'update/:usrname',component:UpdateuserComponent}
  ]}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
