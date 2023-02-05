import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { UserIntroComponent } from './user-intro/user-intro.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {path:'home',component:HomePageComponent},
  {path:'',component:UserIntroComponent},
  {path:'profile',component:UserProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
