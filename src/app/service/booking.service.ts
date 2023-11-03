import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bookings } from '../model/Bookings';
import { user } from '../model/user';
import { status } from '../model/status';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  baseUrl:string='http://localhost:8080/bookings';
  constructor(private http:HttpClient) { }

  getAllBookings():Observable<Bookings[]> {
    return this.http.get<Bookings[]>(this.baseUrl+"/all");
  }

  getBookingsForUser(Usr:user):Observable<Bookings[]>{
    return this.http.post<Bookings[]>(this.baseUrl+"/user",Usr);
  }
  saveBooking(bk:Bookings):Observable<status>{
    return this.http.post<status>(this.baseUrl+"/saveBooking",bk);
  }
}
