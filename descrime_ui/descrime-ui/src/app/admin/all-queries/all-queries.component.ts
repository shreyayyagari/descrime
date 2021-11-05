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
  date: number;
  status: string;
}
    

const ELEMENT_DATA: AllCases[] = [
  {position: 1, name: 'Lorem', date: 1.0079, status: 'H'},
  {position: 2, name: 'ipsum', date: 4.0026, status: 'He'},
  {position: 3, name: 'dolor', date: 6.941, status: 'Li'},
  {position: 4, name: 'sit', date: 9.0122, status: 'Be'},
  {position: 5, name: 'amet', date: 10.811, status: 'B'},
  {position: 6, name: 'consectetur', date: 12.0107, status: 'C'},
  {position: 7, name: 'adipiscing', date: 14.0067, status: 'N'},
  {position: 8, name: 'elit', date: 15.9994, status: 'O'},
  {position: 9, name: 'Praesent', date: 18.9984, status: 'F'},
  {position: 10, name: 'tincidunt', date: 20.1797, status: 'Ne'},
  {position: 11, name: 'odio', date: 22.9897, status: 'Na'},
  {position: 12, name: 'maximus', date: 24.305, status: 'Mg'},
  {position: 13, name: 'nisl', date: 26.9815, status: 'Al'},
  {position: 14, name: 'varius', date: 28.0855, status: 'Si'},
  {position: 15, name: 'facilisis', date: 30.9738, status: 'P'},
  {position: 16, name: 'Pellentesque', date: 32.065, status: 'S'},
  {position: 17, name: 'quis', date: 35.453, status: 'Cl'},
  {position: 18, name: 'magna', date: 39.948, status: 'Ar'},
  {position: 19, name: 'fermentum', date: 39.0983, status: 'K'},
  {position: 20, name: 'massa', date: 40.078, status: 'Ca'},
];
