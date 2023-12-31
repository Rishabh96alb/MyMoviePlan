import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../model/user';
import { status } from '../model/status';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL:string = 'http://localhost:8080/user';

  constructor(private http:HttpClient) { }

  getAllUsers():Observable<user[]>{
    return this.http.get<user[]>(this.baseURL+'/all')
  }
  getUserByName(name:string):Observable<user>{
    return this.http.get<user>(this.baseURL+'/finduser?name='+name);
  }
  addUser(usr:user):Observable<status>{
    console.log(usr);
    let usrarr:user[] = new Array;
    usrarr.push(usr);
    return this.http.post<status>(this.baseURL+'/adduser',usrarr);
  }
  deleteUser(id:number):Observable<status>{
    return this.http.delete<status>(this.baseURL+'/remove/'+id);
  }
  updateUser(usr:user):Observable<status>{
    return this.http.patch<status>(this.baseURL+'/updateuser/'+usr.uid,usr);
  }
}
