import { Component, OnInit,ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
import { faChevronRight,faVirus,faShieldAlt } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-self-defence',
  templateUrl: './self-defence.component.html',
  styleUrls: ['./self-defence.component.css']
})
export class SelfDefenceComponent implements OnInit {

  faChevronRight = faChevronRight
  faVirus = faVirus
  faShieldAlt = faShieldAlt

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver) { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
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