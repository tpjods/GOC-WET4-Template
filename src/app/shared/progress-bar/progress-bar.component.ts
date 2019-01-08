import {AfterViewInit, Component} from '@angular/core';
import {delay, startWith, tap} from 'rxjs/operators';

import {LoaderService} from '../../services/loader.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements AfterViewInit {

  public isProgressVisible = false;

  constructor(public loadingService: LoaderService) {
  }

  public ngAfterViewInit() {
    // https://blog.angular-university.io/angular-debugging/
    this.loadingService.pendingRequestsStatus$
      .pipe(
        startWith(false),
        delay(0),
        tap(visible => this.isProgressVisible = visible)
      ).subscribe();
  }
}
