import {Component, OnDestroy, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {AuthService} from '../../auth/auth.service';
import {AuthTokenService} from '../../auth/auth-token.service';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit, OnDestroy {

  signInForm: FormGroup;
  beErrorMessage = null;
  subscription = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private authTokenService: AuthTokenService
  ) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    if (this.authService.isAuthorized()) {
      this.router.navigate(['gallery']);
    }

    this.subscription = this.signInForm.valueChanges.pipe(debounceTime(200)).subscribe(formValue => {
      if (this.beErrorMessage) {
        this.beErrorMessage = null;
      }
    });
  }

  get email(): AbstractControl {
    return this.signInForm.get('email');
  }

  get password(): AbstractControl {
    return this.signInForm.get('password');
  }

  onSubmit(): void {
    this.authService.signIn(this.signInForm.value)
      .subscribe(response => {
        console.log('user is logged in', response);
        this.authTokenService.setToken(response.accessToken);
        this.router.navigate(['gallery']);
      }, err => {
        console.error(err);
        if (err.status === 401) {
          this.beErrorMessage = 'Your email address or password is incorrect. \nPlease check your data and try again';
        }
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
