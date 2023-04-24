import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-intro',
  templateUrl: './user-intro.component.html',
  styleUrls: ['./user-intro.component.css']
})
export class UserIntroComponent implements OnInit{
  constructor(private router : Router){}
  ngOnInit(): void {
    this.loginCheck()
  }
  loginCheck(){
    let token=localStorage.getItem('id_token')
    if(token){
      this.router.navigateByUrl('/home')
    }
  }
}
