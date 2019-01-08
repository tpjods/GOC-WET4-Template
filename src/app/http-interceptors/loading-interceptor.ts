import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

import {Observable} from 'rxjs';
import {finalize} from 'rxjs/internal/operators';

import {LoaderService} from '../services/loader.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  private _filteredHeaders: string[] = ['bypass-loader'];

  constructor(private loader: LoaderService) {
  }

  private shouldBypassHeader(req: HttpRequest<any>): boolean {
    return this._filteredHeaders.some(e => {
      return req.headers.has(e);
    });
  }

  /**
   * @param {HttpRequest<any>} request
   * @param {HttpHandler} next
   * @returns {Observable<HttpEvent<any>>}
   */
  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.shouldBypassHeader(request)) {
      return next.handle(request);
    }

    this.loader.increase();

    return next.handle(request)
      .pipe(
        finalize(() => {
          this.loader.decrease();
        })
      );
  }
}
