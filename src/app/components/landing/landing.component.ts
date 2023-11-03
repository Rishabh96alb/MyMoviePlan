import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart';
import { CartService } from 'src/app/service/cart.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit{

  cart:Cart;
  currentuser:string;
  constructor(private cartservice:CartService, private loginservice:LoginService){

    }
  ngOnInit(): void {
    
    this.cart=this.cartservice.getCart();
    this.currentuser= this.loginservice.getCurrentUser();
    if(this.currentuser=="0"){
      this.currentuser='Guest'
    }
    console.log(this.currentuser);
    }
  }

