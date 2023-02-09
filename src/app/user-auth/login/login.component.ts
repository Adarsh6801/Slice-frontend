import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserAuthServiceService } from 'src/app/services/user-auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private userService : UserAuthServiceService){}
  onSubmit(data:NgForm){
    console.log(data.value);
    
    this.userService.userLogin(data.value)
  }
}
