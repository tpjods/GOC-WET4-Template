import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable, of} from 'rxjs/index';
import {catchError, map} from 'rxjs/internal/operators';

import {environment} from '../../environments/environment';

import {AuthUser} from '../models/AuthUser';
import {ApiResponse} from '../models/ApiResponse';
import {LoggerService} from './logger.service';


import * as url from 'url-parse';
import {NavigationExtras} from '@angular/router';

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
});

@Injectable()
export class AuthService {

  public isAuthenticated = true;    //Switch to true from false for drop debug by TIMJ 

  public user: AuthUser;

  public expires: string;

  private redirectUrl = url('/home');

  public readonly loginRoute = ['/login'];

  private _hasRoleReviewer = false;

  constructor(private http: HttpClient, private logger: LoggerService) {

    if (this.verifyAuthentication()) {
// Place your trigger for a form here
    }
  }

  public getRedirectPathName() {
    return this.redirectUrl.pathname;
  }

  public getRedirectQuery(): NavigationExtras {
    return {
      queryParams: this.redirectUrl.query
    };
  }

  // use for navigation so we dont call has roles
  get hasRoleReviewer() {
    return this._hasRoleReviewer;
  }

  public hasRole(role) {
    return this.user.roles.indexOf(role) >= 0;
  }

  public hasRoles(roles) {
    if (this.user !== undefined) {
      return this.user.roles.some(e => {
        return roles.has(e);
      });
    }

    return false;
  }

  /**
   * Checks Expiration
   *
   * Calls this.invalidate
   */
  public verifyAuthentication() {

    let isValid = false;

    const lsAuthData = localStorage.getItem('angular-6-NRCAN.auth.data');

    if (lsAuthData) {

      const authData = JSON.parse(lsAuthData);

      if (this.user !== authData.user) {
        this.user = authData.user;
      }

      if (this.expires !== authData.expires) {
        this.expires = authData.expires;
      }

      this._hasRoleReviewer = this.hasRole('reviewer');

      const expiresDate = new Date(Date.parse(this.expires));

      this.logger.debug(`this.expires: ${this.expires}, expiresDate.getTime(): ${expiresDate.getTime()}`);

      this.logger.debug(`now: ${(new Date()).toISOString()}, now.getTime(): ${(new Date()).getTime()}`);

      const now = (new Date()).getTime();

      this.logger.debug(`diff: ${expiresDate.getTime() - now}`);

      if (expiresDate.getTime() > now) { // todo is this ready for primetime
        isValid = true;
      }
    }

    if (!isValid) {
      this.invalidate();
      return false;
    }

    if (this.isAuthenticated !== true) {
      this.isAuthenticated = true;
    }

    return true;
  }


  public invalidate(redirectUrl?) {

    this.logger.debug(`Invalidating, redirectUrl: ${redirectUrl}`);

    if (redirectUrl !== undefined) {
      this.redirectUrl = url(redirectUrl, true);
    }

    this.isAuthenticated = false;
    this.user = undefined;
    this.expires = undefined;

 

    localStorage.removeItem('angular-6-NRCAN');
  }


  /**
   * @param body
   */
  public login(body): Observable<any> {  // The below was commented out by Tim J for debug and development
      return ;   // added to force auth true
      
/*
    return this.http.post<any>(`${environment.apiUrl}/api/auth/login`, body, {headers: headers}).pipe(
      map((response: ApiResponse) => {

        if (response.status === 'success') {

          this.isAuthenticated = true;

          this.user = response.data.user;

          this.expires = response.data.expires; // cookie expiration (keep session cookie httpOnly)

          localStorage.setItem('angular-6-NRCAN.auth.data', JSON.stringify(response.data));

          this.observationStatementNotificationService.start();

          this._hasRoleReviewer = this.hasRole('reviewer');

          this.logger.debug(this.user);

          return true;
        }

        return false;
      }),
      catchError(err => {

        console.log(err);

        return of(undefined);
      })
    );
    */
  }

  /**
   *
   */
  public logout() { // The below was commented out by Tim J for debug and development
            return true;   // added to force auth true
      /*
    return this.http.post<any>(`${environment.apiUrl}/api/auth/logout`, {}, {headers: headers}).pipe(
      map((response: ApiResponse) => {

        if (response.status === 'success') {

          this.invalidate();

          return true;
        }

        return false;
      }),
      // catchError(err => of(undefined))
      catchError(err => {
        return of(undefined);
      }));
      */
  }
}
