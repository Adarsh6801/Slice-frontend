import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from '../admin/admin-home/admin-home.component';
import { AdminComponent } from '../admin/admin.component';
import { AdminAuthComponent } from './admin-auth.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'admin-auth',component:AdminAuthComponent,children:[
    {path:'login',component:LoginComponent}
  ]},
  {path:'admin', component:AdminComponent,children:[
    {path:'home',component:AdminHomeComponent},

  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminAuthRoutingModule { }
