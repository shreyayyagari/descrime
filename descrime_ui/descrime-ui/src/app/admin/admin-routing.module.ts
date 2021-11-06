import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { RegisteredUsersComponent } from './registered-users/registered-users.component';
import { ReportsComponent } from './reports/reports.component';
import { VictimDetailsComponent } from './victim-details/victim-details.component';

const routes: Routes = [
  {path: 'admin',children: [
    {path: '', component:AdminComponent},
    {path: 'dashboard', component:AdminDashboardComponent},
    {path: 'register-users', component:RegisteredUsersComponent},
    {path: 'reports', component:ReportsComponent},
    {path: 'details',component:VictimDetailsComponent}
  ]},
  {path: 'admin/dashboard',children: [
    {path: '', component:AdminDashboardComponent},
    {path: 'register-users', component:RegisteredUsersComponent},
    {path: 'reports', component:ReportsComponent},
    {path: 'details',component:VictimDetailsComponent}
  ]},
  {path: 'admin/register-users',children: [
    {path: '', component:RegisteredUsersComponent},
    {path: 'dashboard', component:AdminDashboardComponent},
    {path: 'reports', component:ReportsComponent},
    {path: 'details',component:VictimDetailsComponent}
  ]},
  {path: 'admin/reports',children: [
    {path: '', component:ReportsComponent},
    {path: 'dashboard', component:AdminDashboardComponent},
    {path: 'register-users', component:RegisteredUsersComponent},
    {path: 'details',component:VictimDetailsComponent}
  ]}
  // {path: 'admin/dashboard/dashboard',children: [
  //   {path: '', component:ReportsComponent},
  //   {path: 'dashboard', component:AdminDashboardComponent},
  //   {path: 'register-users', component:RegisteredUsersComponent},
  //   {path: 'details',component:VictimDetailsComponent}
  // ]}

  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
