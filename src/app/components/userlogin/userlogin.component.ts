import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { user } from 'src/app/model/user';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {

  usr:user=new user();
  constructor(private loginservice:LoginService, private router:Router){
  }
  userLogin(){
    this.loginservice.authUser(this.usr).then(res=>{
      if(res.authentication=="1"){
        this.router.navigateByUrl("userdashboard");
      }else if(res.authentication=="0"){
        alert('Username or Password incorrect!!');
        this.usr.email='';
        this.usr.userName='';
        this.usr.password='';
      }
    });
  }
}
