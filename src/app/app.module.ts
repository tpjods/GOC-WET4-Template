import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from '@angular/cdk/layout';
import {FlexLayoutModule} from '@angular/flex-layout';

import {OWL_DATE_TIME_LOCALE} from 'ng-pick-datetime';

import {AppComponent} from './app.component';

import {AppMaterialModule} from './app-material.module';
import {AppRoutingModule} from './app-routing.module';
import {ErrorDocModule} from './error-doc/error-doc.module';
import {SecurityModule} from './security/security.module';

import {HeaderComponent} from './shared/header/header.component';
import {BannerComponent} from './shared/banner/banner.component';
import {HomeComponent} from './shared/home/home.component';
import {FooterComponent} from './shared/footer/footer.component';
import {SnackBarComponent} from './shared/snack-bar/snack-bar.component';
import {NavigationComponent} from './shared/navigation/navigation.component';
import {ProgressBarComponent} from './shared/progress-bar/progress-bar.component';

import {AuthService} from './services/auth.service';
import {LoaderService} from './services/loader.service';
import {LoggerService} from './services/logger.service';
import {MessageService} from './services/message.service';
import {ScrollerService} from './services/scroller.service';

import {AuthGuard} from './guards/auth-guard.service';
import {httpInterceptorProviders} from './http-interceptors';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SnackBarComponent,
    ProgressBarComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    BannerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AppMaterialModule,
    SecurityModule, // Order Matters for routing
    AppRoutingModule,
    ErrorDocModule,
  ],
  providers: [

    {provide: OWL_DATE_TIME_LOCALE, useValue: 'en-CA'},

    AuthService,
    AuthGuard,
    LoaderService,
    LoggerService,
    ScrollerService,
    MessageService,
    httpInterceptorProviders,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
