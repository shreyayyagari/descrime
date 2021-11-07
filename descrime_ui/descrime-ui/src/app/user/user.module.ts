import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ReportComponent } from './report/report.component';
import { TrackComponent } from './track/track.component';
import { TncComponent } from './tnc/tnc.component';

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
<<<<<<< HEAD
=======
import { SelfdefenceComponent } from './selfdefence/selfdefence.component';
import { TabswitchComponent } from './tabswitch/tabswitch.component';
import { MatTabsModule } from '@angular/material/tabs';
>>>>>>> c3ab294f8cff7b147918d1515fa62d13ab6cfede


@NgModule({
  declarations: [
    UserDashboardComponent,
    ReportComponent,
    TrackComponent,
    TncComponent,
<<<<<<< HEAD
=======
    SelfdefenceComponent,
    TabswitchComponent
>>>>>>> c3ab294f8cff7b147918d1515fa62d13ab6cfede
  ],
  imports: [
    FormsModule,
    CommonModule,
    UserRoutingModule,
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
    FontAwesomeModule,
    MatTabsModule
  ]
})
export class UserModule { }
