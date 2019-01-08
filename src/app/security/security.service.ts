import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {catchError, map} from 'rxjs/internal/operators';
import {Observable, of} from 'rxjs/index';

import {environment} from '../../environments/environment';

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
});

@Injectable()
export class SecurityService {

  constructor(private http: HttpClient) {
  }


  public verifyRegistration(token: string): Observable<any> {

    return this.http.post<any>(`${environment.apiUrl}/security/verify_registration`, {'token': token}, {headers: headers}).pipe(
      map((response: any) => {

        return response.status === 'success';
      }),
      catchError(err => of(undefined))
    );
  }


  public signup(email: string, password: string): Observable<any> {

    const body = {'email': email, 'password': password, 'redirectUrl': `${location.origin}/email-verification`};

    return this.http.post<any>(`${environment.apiUrl}/portal/register`, body, {headers: headers}).pipe(
      map((response: any) => {

        return true;
      }),
      catchError(err => of(undefined))
    );
  }
}
