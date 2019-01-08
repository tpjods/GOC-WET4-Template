import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ErrorStateMatcher} from '@angular/material';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';

import {CustomValidators} from 'ngx-custom-validators';

import {SecurityService} from '../security.service';


/** Error when invalid control is dirty, touched, or submitted. */
export class AppErrorStateMatcher implements ErrorStateMatcher {
  public isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public email;
  public password;
  public password2;

  public hidePassword = true;
  public hidePassword2 = true;

  public signupSuccessful = undefined;

  public sendingSignup = false;

  public matcher = new AppErrorStateMatcher();

  private passwordFromControl = new FormControl(this.password, [
    Validators.required,
    Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&].{8,}'),
  ]);

  public signupForm = new FormGroup({
    'email': new FormControl('', [
      Validators.required,
      Validators.email,
    ]),

    'password': this.passwordFromControl,

    'password2': new FormControl(this.password2, [
      Validators.required,
      CustomValidators.equalTo(this.passwordFromControl)
    ]),
  });

  constructor(private securityService: SecurityService, private router: Router) {
  }

  public ngOnInit() {
  }

  public signup() {

    this.sendingSignup = true;

    this.securityService.signup(this.email, this.password).subscribe(
      (success) => {
        if (true === success) {
          this.router.navigate(['signup-verification']);
        }

        this.sendingSignup = false;
      }
    );
  }
}
