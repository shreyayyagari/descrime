import { Component, OnInit,ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-registered-users',
  templateUrl: './registered-users.component.html',
  styleUrls: ['./registered-users.component.css']
})
export class RegisteredUsersComponent implements OnInit {
  faCommentDots = faCommentDots

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
  {position: 1, name: 'Hemakuta  Kannan', cases: 1, address: 'F 14/50, Part 2, Central Market, Model Town Delhi'},
  {position: 2, name: 'Vac  Verma', cases: 4, address: '245, 245 Tulsiani Chambers, Yogakshema (nariman Point) Mumbai'},
  {position: 3, name: 'Sahan  Boparai', cases: 3, address: '61/2, Karkhana Bagh, Mathura Road, Faridabad, Faridabad Delhi'},
  {position: 4, name: 'Jaganmata  Kade', cases: 2, address: 'Gf-25, Siddharth, Alkapuri Vadodara'},
  {position: 5, name: 'Indivar  Dev', cases: 1, address: '373, Sant Nagar Delhi'},
  {position: 6, name: 'Kiran  Majumdar', cases: 1, address: '78/49, Laxmi Bldg, Nagdevi Croxx Rd, Nagdevi Mumbai'},
  {position: 7, name: 'Shashida  Borah', cases: 1, address: 'Shreeji Palace, Inside Evershine City, Vasai (e) Mumbai'},
  {position: 8, name: 'Sany  Chawla', cases: 1, address: '35/34, Dabedar Street, Kattoor Coimbatore'},
  {position: 9, name: 'Lanka  Thomas', cases: 1, address: '47, 1047,avnrdblr-2, Rajashree Market, Avenue Road Bangalore'},
  {position: 10, name: 'Jaganmata  Kade', cases: 2, address: 'Maruthi Street Hyderabad'},
  {position: 11, name: 'Tulsi  Parikh', cases: 2, address: '413 M 3, Avg Bhawan Delhi'},
  {position: 12, name: 'Gadhi  Rai', cases: 1, address: 'C 7, New Subzi Mandi Delhi'},
  {position: 13, name: 'Mira  Kumar', cases: 1, address: '46-3-1089/b/a, Somajiguda Hyderabad'},
  {position: 14, name: 'Gadhi  Rai', cases: 1, address: 'Lady Willingdon Building, 1 Mahatma Gandhi Road, Opp. Metro Cinema, Dhobi Talao Mumbai'},
  {position: 15, name: 'Durvasas  Dasgupta', cases: 1, address: '221/1, D C Lane, Near Jain Temple,suraj Market, Chickpet Bangalore'},
  {position: 16, name: 'Usha  Upadhya', cases: 1, address: '43, Ambrai Apts, Behind IMC Bank, Opp Patil Plaza, Canada Corner Nashik'},
  {position: 17, name: 'Gatha  Ramachandran', cases: 1, address: '53, 1 Main, Vijayananda Nagara, Nandhini Layout Bangalore'},
  {position: 18, name: 'Dakini  Dayal', cases: 1, address: 'R.no.3, 177, 2nd Kumbharwada, Sant Sena Maharaj Marg, Near Round Temple., Khetwadi Mumbai'},
  {position: 19, name: 'Tamanna  Buch', cases: 3, address: '17 Gadi Adda Bldg., H.b Road, Sewree Mumbai'},
  {position: 20, name: 'Anala  Goel', cases: 4, address: '40, Ramakrishna St, T Nagar Chennai'},
];
