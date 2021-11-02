import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserReportComponent } from './user-report/user-report.component';

const routes: Routes = [
    {
        path: 'user',children: [
            { path:"", component:UserDashboardComponent },
            { path:"report", component:UserReportComponent }
        ]
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
