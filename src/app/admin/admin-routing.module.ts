import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminComponent } from './admin.component';
import { AllUserComponent } from './all-user/all-user.component';

const routes: Routes = [
  {path:'admin', component:AdminComponent,children:[
    {path:'home',component:AdminHomeComponent},
    {path:'all-users',component:AllUserComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
