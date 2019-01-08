import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BadRequestComponent} from './bad-request/bad-request.component';
import {ForbiddenComponent} from './forbidden/forbidden.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {ServerErrorComponent} from './server-error/server-error.component';
import {UnauthorizedComponent} from './unauthorized/unauthorized.component';


const errorDocRoutes: Routes = [
  {path: 'bad-request', component: BadRequestComponent},
  {path: 'forbidden', component: ForbiddenComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: 'server-error', component: ServerErrorComponent},
  {path: 'unauthorized', component: UnauthorizedComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(errorDocRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ErrorDocRoutingModule {
}

