import { Component } from '@angular/core';
import { Cart } from 'src/app/model/cart';
import { cartitem } from 'src/app/model/cartitem';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cart:Cart = new Cart();
  constructor(private cartservice:CartService){}
  ngOnInit(){
    this.cart = this.cartservice.getCart();
  }
  removefromcart(itm:cartitem){
    this.cartservice.removeFromCart(itm.movie.movieId);
  }
}
