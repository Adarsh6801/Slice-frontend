import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthComponent } from './admin-auth.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'admin-auth',component:AdminAuthComponent,children:[
    {path:'login',component:LoginComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminAuthRoutingModule { }
