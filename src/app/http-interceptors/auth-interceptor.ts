import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Router} from '@angular/router';

import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/internal/operators';

import {AuthService} from '../services/auth.service';
import {MatDialog} from '@angular/material';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService,
              public dialog: MatDialog,
              private router: Router) {
  }

  /**
   *
   * @param {HttpRequest<any>} request
   * @param {HttpHandler} next
   * @returns {Observable<HttpEvent<any>>}
   */
  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const authReq = request.clone({withCredentials: true});

    return next.handle(authReq)
      .pipe(
        catchError((error: HttpErrorResponse | any) => {

          // session timeout
          if (error.status === 401) {

            this.dialog.closeAll();

            this.authService.invalidate(this.router.url !== '/login' ? this.router.url : '/home');

            this.router.navigate(['/login']);

          } else if (error.status === 403) {
            if (this.router.url !== '/login') {
              this.router.navigate(['/forbidden']);
            }
          }

          return throwError(error);
        })
      );
  }
}
