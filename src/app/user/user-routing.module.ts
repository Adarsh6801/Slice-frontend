import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAuthGuardGuard } from '../guards/user-auth-guard.guard';
import { LoginComponent } from '../user-auth/login/login.component';
import { RegisterComponent } from '../user-auth/register/register.component';
import { UserAuthComponent } from '../user-auth/user-auth.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserIntroComponent } from './user-intro/user-intro.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {path:'home',component:HomePageComponent,canActivate:[UserAuthGuardGuard]},
  {path:'',component:UserIntroComponent},
  {path:'profile',component:UserProfileComponent},
  {path:'nav',component:NavbarComponent},
  {path:'user-auth',component:UserAuthComponent,children:[
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent}
  ]},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
