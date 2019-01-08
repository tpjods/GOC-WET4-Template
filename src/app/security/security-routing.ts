import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {EmailVerificationComponent} from './email-verification/email-verification.component';
import {SignupVerificationComponent} from './signup-verification/signup-verification.component';

const securityRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'signup-verification', component: SignupVerificationComponent},
  {path: 'email-verification/:token', component: EmailVerificationComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(securityRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SecurityRoutingModule {
}

