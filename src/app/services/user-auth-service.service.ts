import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserAuthServiceService {
  isAuthenticated:boolean=false;
  constructor(private http : HttpClient, private router: Router) { }

  regUser(data:any){
    return this.http.post<any>('http://localhost:4111/userRegister',data)
  }
  userLogin(data:any){
    return this.http.post<any>('http://localhost:4111/user-login',data).subscribe((response)=>{
      console.log(response);
      localStorage.setItem('id_token',response.token);
      if(response.token){
        console.log('hiiii');
        
        this.isAuthenticated=true; 
        // this.isAuthListener.next(true); 
        this.router.navigateByUrl('/home');
      }
      
    })
  }
}