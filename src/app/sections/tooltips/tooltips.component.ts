import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-tooltips',
  templateUrl: './tooltips.component.html',
  styleUrls: ['./tooltips.component.scss']
})
export class TooltipsComponent implements OnInit {
  public title = "Tooltips";

  constructor() { }

  ngOnInit() {

    $(document).ready(function() {
      // $('[data-toggle="tooltip"]').tooltip();
    })

  }



}

