import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportComponent } from './report/report.component';
import { TncComponent } from './tnc/tnc.component';
import { TrackComponent } from './track/track.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes: Routes = [
  {path: 'user',children: [
    {path: '', component:UserDashboardComponent},
    {path: 'reports', component:ReportComponent},
    {path: 'track',component:TrackComponent},
    {path: 'terms-and-conditions',component:TncComponent}

  ]}

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
