import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppMaterialModule} from '../app-material.module';
import {FlexLayoutModule} from '@angular/flex-layout';

import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {EmailVerificationComponent} from './email-verification/email-verification.component';

import {SecurityRoutingModule} from './security-routing';
import {SecurityService} from './security.service';
import {SignupVerificationComponent} from './signup-verification/signup-verification.component';


@NgModule({
  declarations: [
    EmailVerificationComponent,
    LoginComponent,
    SignupComponent,
    SignupVerificationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AppMaterialModule,

    SecurityRoutingModule
  ],
  providers: [
    SecurityService
  ],
})
export class SecurityModule {
}
