import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss']
})
export class TypographyComponent implements OnInit {
  public title = "Typography";

  constructor() { }

  ngOnInit() {
  }
}
