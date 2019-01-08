import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: '-checkbox',
  templateUrl: './-checkbox.component.html',
  styleUrls: ['./-checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

  @Input() public Required = true;
  @Input() public Label = '';
  @Input() public FormControl;

  constructor() {
  }

  public ngOnInit() {
  }

  public displayFieldCss() {

    const valid = () => {
      return !this.FormControl.valid && this.FormControl.touched;
    };

    return {
      'mat-error': valid(), // mat-error ?
      '-required': this.Required
    };
  }
}
