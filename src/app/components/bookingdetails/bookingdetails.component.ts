import { Component } from '@angular/core';
import { timestamp } from 'rxjs';
import { Bookings } from 'src/app/model/Bookings';
import { Cart } from 'src/app/model/cart';
import { BookingService } from 'src/app/service/booking.service';
import { CartService } from 'src/app/service/cart.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-bookingdetails',
  templateUrl: './bookingdetails.component.html',
  styleUrls: ['./bookingdetails.component.css']
})
export class BookingdetailsComponent {

  cart: Cart;
  bkng: Bookings = {
    bookingId: 0,
    userId: 0,
    bookingDetails: [],
    bookingAmount: 0,
    bookingStamp: new Date()
  }
  bookingID: string='0';
  constructor(
    private cartservice: CartService,
    private loginservice: LoginService,
    private bookingservice: BookingService) { }
  ngOnInit() {
    this.cart = this.cartservice.getCart();
    console.log(this.loginservice.getCurrentUsr());
    this.bkng.userId = this.loginservice.getCurrentUsr().uid;
    this.bkng.bookingAmount = this.cart.totalprice;
    this.bkng.bookingStamp = new Date();
    this.cart.items.forEach(x => {
      this.bkng.bookingDetails.push(x.movie.title +'--'+ x.quantity.toString()+' Nos.');
    });
    if(this.bkng.userId !== -1){
    this.bookingservice.saveBooking(this.bkng).subscribe(res => {
      console.log(res);
      this.bookingID = res.status
    });
  }
  }
}
