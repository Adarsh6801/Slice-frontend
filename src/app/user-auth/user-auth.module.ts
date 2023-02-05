import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAuthRoutingModule } from './user-auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserAuthComponent } from './user-auth.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    UserAuthComponent
  ],
  imports: [
    CommonModule,
    UserAuthRoutingModule
  ]
})
export class UserAuthModule { }
