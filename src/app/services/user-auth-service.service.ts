import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserAuthServiceService {

  constructor(private http : HttpClient) { }

  regUser(data:any){
    return this.http.post<any>('http://localhost:4111/userRegister',data)
  }
  userLogin(data:any){
    return this.http.post<any>('http://localhost:4111/userLogin',data)
  }
}