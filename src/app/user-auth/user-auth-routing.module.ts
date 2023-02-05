import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../user/home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserAuthComponent } from './user-auth.component';

const routes: Routes = [
  {path:'user-auth',component:UserAuthComponent,children:[
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent}
  ]},
  {path:'home',component:HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAuthRoutingModule { }
