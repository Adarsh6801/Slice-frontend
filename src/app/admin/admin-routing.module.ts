import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthComponent } from '../admin-auth/admin-auth.component';
import { LoginComponent } from '../admin-auth/login/login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminIntroComponent } from './admin-intro/admin-intro.component';
import { AdminComponent } from './admin.component';
import { AllUserComponent } from './all-user/all-user.component';


const routes: Routes = [
  {path:'admin', component:AdminComponent,children:[
    {path:'home',component:AdminHomeComponent},
    {path:'all-users',component:AllUserComponent},
    {path:'admin-intro',component:AdminIntroComponent},

  ]},
  {path:'admin-auth',component:AdminAuthComponent,children:[
    {path:'login',component:LoginComponent}
  ]},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
