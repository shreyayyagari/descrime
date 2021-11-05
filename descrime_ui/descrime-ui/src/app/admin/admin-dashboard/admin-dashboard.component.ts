import { Component, OnInit, ViewChild } from '@angular/core';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  faAngleRight = faAngleRight;
  
  

  constructor() { }

  ngOnInit(): void {
  }
  
  

}
