import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-all-queries',
  templateUrl: './all-queries.component.html',
  styleUrls: ['./all-queries.component.css']
})
export class AllQueriesComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'date', 'status'];
  dataSource = new MatTableDataSource<AllCases>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
export interface AllCases {
  name: string;
  position: number;
  date: string; 
  status: string;
}
    

const ELEMENT_DATA: AllCases[] = [
  {position: 1, name: 'Hemakuta  Kannan', date: "16-01-2021", status: 'resolved'},
  {position: 2, name: 'Anala  Goel', date: "04-01-2021", status: 'Pending'},
  {position: 3, name: 'Vac  Verma', date: "26-01-2021", status: 'Pending'},
  {position: 4, name: 'Sahan  Boparai', date: "16-04-2021", status: 'Under review'},
  {position: 5, name: 'Tamanna  Buch', date: "10-01-2021", status: 'Under review'},
  {position: 6, name: 'Dakini  Dayal', date: "12-03-2021", status: 'Pending'},
  {position: 7, name: 'Gatha  Ramachandran', date: "30-01-2021", status: 'Under review'},
  {position: 8, name: 'Usha  Upadhya', date: "15-04-2021", status: 'Under review'},
  {position: 9, name: 'Durvasas  Dasgupta', date: "18-04-2021", status: 'Under review'},
  {position: 10, name: 'Gadhi  Rai', date: "20-01-2021", status: 'Pending'},
  {position: 11, name: 'Mira  Kumar', date: "22-01-2021", status: 'resolved'},
  {position: 12, name: 'Lanka  Thomas', date: "24-03-2021", status: 'resolved'},
  {position: 13, name: 'Tulsi  Parikh', date: "26-04-2021", status: 'resolved'},
  {position: 14, name: 'Jaganmata  Kade', date: "18-05-2021", status: 'resolved'},
  {position: 15, name: 'Indivar  Dev', date: "30-05-2021", status: 'Pending'},
  {position: 16, name: 'Kiran  Majumdar', date: "09-06-2021", status: 'Under review'},
  {position: 17, name: 'Shashida  Borah', date:" 11-01-2021", status: 'resolved'},
  {position: 18, name: 'Sany  Chawla', date: "16-10-2021", status: 'Under review'},
  {position: 19, name: 'Savitari  Sing', date: "13-09-2021", status: 'resolved'},
  {position: 20, name: 'Sunila  Prabhu', date: "6-08-2021", status: 'resolved'},
];
