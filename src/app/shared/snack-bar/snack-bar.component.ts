import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {MessageService} from '../../services/message.service';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.css']
})
export class SnackBarComponent implements OnInit {

  /**
   * @param {MatSnackBar} snackBar
   * @param {MessageService} messageService
   *
   * @see https://material.angular.io/components/snack-bar/examples
   */
  constructor(public snackBar: MatSnackBar, public messageService: MessageService) {
    messageService.flash.subscribe(message => {
        this.snackBar.open(message, 'Dismiss', {
          duration: 3000
        });
      }
    );
  }

  ngOnInit() {
  }
}
