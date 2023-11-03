import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent {

  constructor(private loginservice:LoginService, private router:Router){}
  ngOnInit(){
    if(this.loginservice.adminauthstatus){

    }else{
    //  this.router.navigateByUrl('forbidden');
    }
  }
}
