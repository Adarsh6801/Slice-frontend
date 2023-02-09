import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {

  constructor(private http : HttpClient) { }
  adminLoginCheck(data:any){
    return this.http.post<any>('http://localhost:4111/admin/adminLogin',data)
  }

}
