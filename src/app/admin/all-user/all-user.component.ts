import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit {
  allUsers:any=[];
  constructor(private adminService:AdminServiceService, private router: Router){}
  ngOnInit(): void {
    this.userData();
  }
  userData(){
    this.adminService.adminviewUsers().subscribe((response)=>{
      console.log(response);
      
      this.allUsers=response.allUsers;
      
    })
  }
  block(status:String){
    this.adminService.blockUser(status).subscribe((response)=>{
      if(response){
        this.router.navigateByUrl('/admin/all-users')
      }
      
    
    })
  }
  unblock(status:String){
    this.adminService.unblockUser(status).subscribe((response)=>{
    
    })
  }
  delete(status:String){
    this.adminService.deleteUser(status).subscribe((response)=>{

    })
  }
}
