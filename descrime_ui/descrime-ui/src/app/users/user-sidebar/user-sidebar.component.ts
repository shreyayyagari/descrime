import { Component, OnInit } from '@angular/core';
import { faTachometerAlt,faPeopleCarry,faFileContract,faChevronRight,faBell,faVirus,faPowerOff,faUser,faAlignLeft } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent implements OnInit {

  faTachometerAlt = faTachometerAlt;
  faPeopleCarry = faPeopleCarry
  faFileContract = faFileContract
  faChevronRight = faChevronRight
  faBell = faBell
  faVirus = faVirus
  faPowerOff = faPowerOff
  faUser = faUser
  faAlignLeft = faAlignLeft

  isDisplay = true

  toggleButton() {
    this.isDisplay = !this.isDisplay
  }

  constructor() { }

  ngOnInit(): void {
  }

}
