import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  // public activeItem = "introduction";

  public sidebarStyles = {
    top: "0",
  }

  @Input() public activeItem:string;

  constructor() { }

  ngOnInit() {
    // set offset top
    let navbarHeight = (<HTMLElement>document.querySelectorAll('.navbar')[0]).offsetHeight;
    this.sidebarStyles.top = navbarHeight+"px";
  }
}
