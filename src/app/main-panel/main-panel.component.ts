import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.scss']
})
export class MainPanelComponent implements OnInit {

  public title = "";

  public isHome:boolean;
  
  @Output() public setActive = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onActivate(e:any) {
    this.title = e.title;
    this.isHome = this.title == "Home" ? true : false
    this.setActive.emit(this.title);
    console.log(this.title);
  }


}
