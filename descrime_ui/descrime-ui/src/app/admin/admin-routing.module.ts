import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RegisteredUsersComponent } from './registered-users/registered-users.component';
import { ReportsComponent } from './reports/reports.component';
import { UserFeedbackComponent } from './user-feedback/user-feedback.component';
import { VictimDetailsComponent } from './victim-details/victim-details.component';

const routes: Routes = [
  {path: 'admin',children: [
    {path: '', component:AdminDashboardComponent},
    {path: 'register-users', component:RegisteredUsersComponent},
    {path: 'reports', component:ReportsComponent},
    {path: 'details',component:VictimDetailsComponent},
    {path: 'feedback',component:UserFeedbackComponent},
    {path:'victim',component:VictimDetailsComponent},
    {path:'**',component:PageNotFoundComponent}


  ]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
