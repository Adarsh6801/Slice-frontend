import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminAuthRoutingModule } from './admin-auth-routing.module';
import { LoginComponent } from './login/login.component';
import { AdminAuthComponent } from './admin-auth.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    AdminAuthComponent
  ],
  imports: [
    CommonModule,
    AdminAuthRoutingModule,
    FormsModule
  ]
})
export class AdminAuthModule { }
