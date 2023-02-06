import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { AllUserComponent } from './all-user/all-user.component';
import { AdminComponent } from './admin.component';
import { AdminIntroComponent } from './admin-intro/admin-intro.component';


@NgModule({
  declarations: [
    AdminHomeComponent,
    DashBoardComponent,
    AllUserComponent,
    AdminComponent,
    AdminIntroComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatSidenavModule
  ]
})
export class AdminModule { }
