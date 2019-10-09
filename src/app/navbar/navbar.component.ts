import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    let navbarHeight = (<HTMLElement>document.querySelectorAll('.navbar')[0]).offsetHeight;
    (<HTMLElement>document.querySelectorAll('.fixed-navbar-offset')[0]).style.height = navbarHeight + "px";

  }

}
