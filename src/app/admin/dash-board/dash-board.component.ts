import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent {
@Input() name:string=''
constructor(private router:Router){}

adminLogout(){
  localStorage.removeItem('admin_token');
    this.router.navigateByUrl('')
  
}

}
