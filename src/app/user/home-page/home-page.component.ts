import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{
name:String='';
 decoded:any
 token:any 
 constructor(private router : Router){
 }
ngOnInit(): void {
  // this.loginCheck()
this.token = localStorage.getItem('id_token');
this.decoded = jwt_decode(this.token)
console.log(this.decoded,'adsfasdfasdf');
this.name=this.decoded.name;
}
loginCheck(){
  let token=localStorage.getItem('id_token')
  if(!token){
    this.router.navigateByUrl('/')
  }
}



}
