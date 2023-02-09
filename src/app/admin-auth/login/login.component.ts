import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminAuthService } from 'src/app/services/admin-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  pmessage:String=''
  emessage:String=''
  message:String=''
  constructor(private adminService : AdminAuthService, private router: Router){}
  onSubmit(data: NgForm){
    console.log(data.value);
    this.adminService.adminLoginCheck(data.value).subscribe((data)=>{
      console.log(data,'data');
      if(data.password){
        console.log(this.pmessage,'asdfasdfasdfads');
        
       this.pmessage=data.pmessage; 
      }
      if(data.email){
        this.emessage=data.emessage;
      }
      if(data.adminVerify){
        this.router.navigateByUrl('/admin/home')
      }
    })
  }
}
