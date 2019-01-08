import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/internal/operators';

import {LoggerService} from '../services/logger.service';


/**
 * https://github.com/barbushin/php-console
 * example {"version":"4.0","columns":["label","log","backtrace","type"],"rows":[["app",
 * {"message":"A circular reference has been detected when serializing the object of class \"App\\Entity\\Product\" (configured limit: 1)",
 * "context":{"route_name":"api_comics"}},"unknown","error"]],"request_uri":"\/index.php\/api\/comics\/"}
 */
@Injectable()
export class PhpLoggingInterceptor implements HttpInterceptor {

  constructor(private logger: LoggerService) {
  }

  /**
   *
   * @param {HttpRequest<any>} request
   * @param {HttpHandler} next
   * @returns {Observable<HttpEvent<any>>}
   */
  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse | any) => {

          if (error.headers.has('X-ChromeLogger-Data')) {

            const data = JSON.parse(atob(error.headers.get('X-ChromeLogger-Data')));

            const message = data.rows[0][1].message;

            this.logger.debug(`ChromeLogger Message: ${message}`);
          }

          return throwError(error);
        })
      );
  }
}
