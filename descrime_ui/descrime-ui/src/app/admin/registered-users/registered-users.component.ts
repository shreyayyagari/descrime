import { Component, OnInit,ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-registered-users',
  templateUrl: './registered-users.component.html',
  styleUrls: ['./registered-users.component.css']
})
export class RegisteredUsersComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'cases', 'address'];
  dataSource = new MatTableDataSource<AllUsers>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  
  
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver) { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
    }
      

}

export interface AllUsers {
  name: string;
  position: number;
  cases: number;
  address: string;
}
    

const ELEMENT_DATA: AllUsers[] = [
  {position: 1, name: 'Lorem', cases: 1, address: 'H'},
  {position: 2, name: 'ipsum', cases: 4, address: 'He'},
  {position: 3, name: 'dolor', cases: 3, address: 'Li'},
  {position: 4, name: 'sit', cases: 2, address: 'Be'},
  {position: 5, name: 'amet', cases: 1, address: 'B'},
  {position: 6, name: 'consectetur', cases: 1, address: 'C'},
  {position: 7, name: 'adipiscing', cases: 1, address: 'N'},
  {position: 8, name: 'elit', cases: 1, address: 'O'},
  {position: 9, name: 'Praesent', cases: 1, address: 'F'},
  {position: 10, name: 'tincidunt', cases: 2, address: 'Ne'},
  {position: 11, name: 'odio', cases: 2, address: 'Na'},
  {position: 12, name: 'maximus', cases: 1, address: 'Mg'},
  {position: 13, name: 'nisl', cases: 1, address: 'Al'},
  {position: 14, name: 'varius', cases: 1, address: 'Si'},
  {position: 15, name: 'facilisis', cases: 1, address: 'P'},
  {position: 16, name: 'Pellentesque', cases: 1, address: 'S'},
  {position: 17, name: 'quis', cases: 1, address: 'Cl'},
  {position: 18, name: 'magna', cases: 1, address: 'Ar'},
  {position: 19, name: 'fermentum', cases: 3, address: 'K'},
  {position: 20, name: 'massa', cases: 4, address: 'Ca'},
];
