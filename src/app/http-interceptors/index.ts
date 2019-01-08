import {HTTP_INTERCEPTORS} from '@angular/common/http';

import {AuthInterceptor} from './auth-interceptor';
import {LoadingInterceptor} from './loading-interceptor';
import {LoggingInterceptor} from './logging-interceptor';
import {PhpLoggingInterceptor} from './php-logging-interceptor';

export const httpInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: LoadingInterceptor,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: LoggingInterceptor,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: PhpLoggingInterceptor,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }
];
