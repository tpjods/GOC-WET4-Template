import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: '-yes-no',
  templateUrl: './-yes-no.component.html',
  styleUrls: ['./-yes-no.component.css']
})
export class YesNoComponent implements OnInit {

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
