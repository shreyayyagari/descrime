import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-victim-details',
  templateUrl: './victim-details.component.html',
  styleUrls: ['./victim-details.component.css']
})
export class VictimDetailsComponent implements OnInit {

  constructor() { }
  category= "Theft"
  selected = '';

  ngOnInit(): void {
  }


}
