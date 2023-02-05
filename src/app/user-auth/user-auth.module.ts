import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAuthRoutingModule } from './user-auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserAuthComponent } from './user-auth.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    UserAuthComponent,
  ],
  imports: [
    CommonModule,
    UserAuthRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class UserAuthModule { }
