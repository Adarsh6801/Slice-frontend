import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit{
  constructor(private router : Router){}
   ngOnInit(): void {
    this.loginCheck()
   }
   loginCheck(){
    let token=localStorage.getItem('admin_token')
    if(!token){
      this.router.navigateByUrl('/')
    }
  

}
}
