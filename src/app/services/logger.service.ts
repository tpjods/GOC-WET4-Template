import {Injectable} from '@angular/core';

import {environment} from '../../environments/environment';


@Injectable()
export class LoggerService {

  public error(message: any) {
    console.error('ERROR', message);
  }

  public debug(message: any) {
    if (!environment.production) {
      console.log('DEBUG', message);
    }
  }

  public log(message: any) {
    if (!environment.production) {
      console.log('LOG', message);
    }
  }
}
