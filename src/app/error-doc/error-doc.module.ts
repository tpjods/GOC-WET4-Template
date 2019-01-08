import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ErrorDocRoutingModule} from './error-doc-routing';
import {NotFoundComponent} from './not-found/not-found.component';
import {ForbiddenComponent} from './forbidden/forbidden.component';
import {UnauthorizedComponent} from './unauthorized/unauthorized.component';
import {BadRequestComponent} from './bad-request/bad-request.component';
import {ServerErrorComponent} from './server-error/server-error.component';

@NgModule({
  imports: [
    CommonModule,
    ErrorDocRoutingModule
  ],
  declarations: [NotFoundComponent, ForbiddenComponent, UnauthorizedComponent, BadRequestComponent, ServerErrorComponent]
})
export class ErrorDocModule {
}
