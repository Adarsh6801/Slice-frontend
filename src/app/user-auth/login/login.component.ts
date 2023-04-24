import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserAuthServiceService } from 'src/app/services/user-auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
  constructor(private userService : UserAuthServiceService, private router : Router){}
  ngOnInit(): void {
  this.loginCheck()
  }
  onSubmit(data:NgForm){
    console.log(data.value);
    
    this.userService.userLogin(data.value)
  }
  loginCheck(){
    let token=localStorage.getItem('id_token')
    if(token){
      this.router.navigateByUrl('/home')
    }
  }
}
