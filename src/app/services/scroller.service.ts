import {Injectable} from '@angular/core';

@Injectable()
export class ScrollerService {

  public scrollToTop(elementId) {

    const mainContent = document.getElementById('main-content');

    if (mainContent.scrollTo) {
      try {
        mainContent.scrollTo({left: 0, top: 0, behavior: 'smooth'});
      } catch (e) {
        mainContent.scrollTo(0, 0);
      }
    }
    else {
      mainContent.scrollTop = 0;
    }
  }
}
