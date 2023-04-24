import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor(private http: HttpClient) { }

  userDetails(id:String){
    return this.http.get<any>(`http://localhost:4111/viewUserProfile?id=${id}`)
  };
  uploadPhoto(url:any){
    return this.http.post<any>('http://localhost:4111/upload-photo',url)
  }
}
