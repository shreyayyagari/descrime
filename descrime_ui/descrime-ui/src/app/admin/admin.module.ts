import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select'
import { MatPaginatorModule } from '@angular/material/paginator';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AllQueriesComponent } from './all-queries/all-queries.component';
import { RegisteredUsersComponent } from './registered-users/registered-users.component';
import { ReportsComponent } from './reports/reports.component';
import { VictimDetailsComponent } from './victim-details/victim-details.component';
import { UserFeedbackComponent } from './user-feedback/user-feedback.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    AllQueriesComponent,
    RegisteredUsersComponent,
    ReportsComponent,
    VictimDetailsComponent,
    UserFeedbackComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    FontAwesomeModule
  ]
})
export class AdminModule { }
