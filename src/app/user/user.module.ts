import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserIntroComponent } from './user-intro/user-intro.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserComponent } from './user.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserIntroComponent,
    HomePageComponent,
    UserProfileComponent,
    NavbarComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }
