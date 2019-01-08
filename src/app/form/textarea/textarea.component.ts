import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: '-textarea',
  templateUrl: './-textarea.component.html',
  styleUrls: ['./-textarea.component.css']
})
export class TextareaComponent implements OnInit {

  @Input() public Required = true;
  @Input() public Label = '';
  @Input() public Hint = '';
  @Input() public FormControl;

  constructor() {
  }

  public ngOnInit() {
  }
}
