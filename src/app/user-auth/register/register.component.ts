import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserAuthServiceService } from 'src/app/services/user-auth-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
   passw1=""
   passw2=""
  public disabled:boolean=true;
  message=""
  ngOnInit(): void {
    
  }
  constructor(private userService: UserAuthServiceService, private router:Router){}
  
  onSubmit(data:NgForm){
    console.log(data.value,"this is data");
    if(data.invalid){
      return;
    }else{
      this.userService.regUser(data.value).subscribe((response)=>{
        console.log(response);
        
        if(response.status){
          console.log("Hii");
this.router.navigateByUrl('home')
        }else{
          console.log("hello");
        }
        if(response.emailExists){
          this.message="Email is already in use"
        }
      })
    }
  }
  
}
