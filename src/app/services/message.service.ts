import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/index';

@Injectable()
export class MessageService {

  flash: Subject<any> = new Subject();

  sendToFlash(message) {
    this.flash.next(message);
  }
}
