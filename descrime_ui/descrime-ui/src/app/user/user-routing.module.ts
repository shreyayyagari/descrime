import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportComponent } from './report/report.component';
import { TncComponent } from './tnc/tnc.component';
import { TrackComponent } from './track/track.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: 'user',children: [
    {path: '', component:UserComponent},
    {path: 'dashboard', component:UserDashboardComponent},
    {path: 'reports', component:ReportComponent},
    {path: 'track',component:TrackComponent},
    {path: 'terms-and-conditions',component:TncComponent}

  ]},
  {path: 'dashboard',children: [
    {path: '', component:UserDashboardComponent},
    {path: 'reports', component:ReportComponent},
    {path: 'track',component:TrackComponent},
    {path: 'terms-and-conditions',component:TncComponent}

  ]},
  {path: 'report',children: [
    {path: 'dashboard', component:UserDashboardComponent},
    {path: '', component:ReportComponent},
    {path: 'track',component:TrackComponent},
    {path: 'terms-and-conditions',component:TncComponent}

  ]},
  {path: 'track',children: [
    {path: 'dashboard', component:UserDashboardComponent},
    {path: 'report', component:ReportComponent},
    {path: '',component:TrackComponent},
    {path: 'terms-and-conditions',component:TncComponent}

  ]},
  {path: 'terms-and-conditions',children: [
    {path: 'dashboard', component:UserDashboardComponent},
    {path: 'report', component:ReportComponent},
    {path: 'track',component:TrackComponent},
    {path: '',component:TncComponent}

  ]},
  {path: 'user/dashboard/dashboard',children: [
    {path: '', component:UserDashboardComponent},
    {path: 'reports', component:ReportComponent},
    {path: 'track',component:TrackComponent},
    {path: 'terms-and-conditions',component:TncComponent}

  ]},
  {path: 'user/dashboard/report',children: [
    {path: '', component:UserDashboardComponent},
    {path: 'reports', component:ReportComponent},
    {path: 'track',component:TrackComponent},
    {path: 'terms-and-conditions',component:TncComponent}

  ]},
  
  

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
