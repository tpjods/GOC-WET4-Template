import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

import {Observable, throwError} from 'rxjs';
import {catchError, finalize} from 'rxjs/internal/operators';

import {LoggerService} from '../services/logger.service';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {

  constructor(private logger: LoggerService) {
  }

  /**
   *
   * @param {HttpRequest<any>} request
   * @param {HttpHandler} next
   * @returns {Observable<HttpEvent<any>>}
   */
  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const started = Date.now();

    let ok = 'succeeded';

    this.logger.debug(`${request.method} '${request.urlWithParams}' started.`);

    // extend server response observable with logging
    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse | any) => {

          ok = 'failed';

          this.logger.error(`HTTP Error Message: ${error.message}`);

          if (error.error.message) {
            this.logger.error(`API Error Message: ${error.error.message}`);
          }

          return throwError(error);
        }),

        finalize(() => {
          const elapsed = Date.now() - started;
          this.logger.debug(`${request.method} '${request.urlWithParams}' ${ok} in ${elapsed} ms.`);
        })
      );
  }
}
