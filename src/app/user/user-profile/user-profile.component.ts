import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { UserServicesService } from 'src/app/services/user-services.service';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  id:String='';
  decoded:any
  token:any
  userDetails:any=[]
  url:any
  formData:any
  constructor(private userService : UserServicesService, private router:Router){}
  ngOnInit(): void {
    this.loginCheck()
this.token = localStorage.getItem('id_token');
this.decoded = jwt_decode(this.token)
this.id=this.decoded.userid;


this.getUserDetails(this.id)
  }

  getUserDetails(id:String){

  this.userService.userDetails(id).subscribe((response)=>{

    if(response){
      this.userDetails=response.user
    }
  })
  }
  onImagePicked(event:any){
if(event.target.files){
var reader= new FileReader();
 this.formData = new FormData();
  this.formData.append('file', event.target.files);
reader.readAsDataURL(event.target.files[0]);
reader.onload=(event:any)=>{
  this.url=event.target.result;
}
}
this.userService.uploadPhoto(this.formData).subscribe((response)=>{
console.log(response);

})
  }
  loginCheck(){
    let token=localStorage.getItem('id_token')
    if(!token){
      this.router.navigateByUrl('/')
    }

}

}