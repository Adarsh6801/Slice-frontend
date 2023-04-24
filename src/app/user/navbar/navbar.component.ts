import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  constructor(private router: Router){}
  name:String='';
 decoded:any
 token:any 
  ngOnInit(): void {
    this.token = localStorage.getItem('id_token');
this.decoded = jwt_decode(this.token)
console.log(this.decoded,'adsfasdfasdf');
this.name=this.decoded.name;
  }
  logout(){
    console.log("jojpjpsjf");
    
    localStorage.removeItem('id_token');
    this.router.navigateByUrl('')
  }
}
