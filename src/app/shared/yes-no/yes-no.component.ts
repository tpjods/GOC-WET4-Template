import {Component, Input, OnInit} from '@angular/core';

@Component({
  preserveWhitespaces: true, // make sure there is white space in front of the first element
  selector: 'app-yes-no',
  templateUrl: './yes-no.component.html',
  styleUrls: ['./yes-no.component.css']
})
export class YesNoComponent implements OnInit {

  @Input('value') value: boolean;

  constructor() {
  }

  ngOnInit() {
  }
}
