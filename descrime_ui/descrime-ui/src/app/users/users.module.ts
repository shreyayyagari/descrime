import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserReportComponent } from './user-report/user-report.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserSidebarComponent } from './user-sidebar/user-sidebar.component';


@NgModule({
  declarations: [
    UserReportComponent,
    UserDashboardComponent,
    UserSidebarComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    UserSidebarComponent
  ]
})
export class UsersModule { }
