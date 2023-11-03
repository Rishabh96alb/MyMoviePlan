import { Injectable } from '@angular/core';
import { Cart } from '../model/cart';
import { cartitem } from '../model/cartitem';
import { movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart:Cart = new Cart();
  constructor() { }

  addToCart(movie: movie):void{
    let cartItem = this.cart.items.find(item => item.movie.movieId === movie.movieId);
    if(cartItem){
      this.changeQuantity(movie.movieId, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new cartitem(movie));
  }
  
  removeFromCart(movieId:number): void{
    this.cart.items =
    this.cart.items.filter(item => item.movie.movieId != movieId);
  }

  changeQuantity(movieId:number, quantity:number){
    let cartItem = this.cart.items.find(item => item.movie.movieId === movieId);
    if(!cartItem) return;
    cartItem.quantity = quantity;
  }

  getCart():Cart{
    return this.cart;
  }
  resetCart(){
    this.cart=new Cart();
  }
}
