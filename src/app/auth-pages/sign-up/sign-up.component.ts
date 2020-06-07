import {Component, OnDestroy, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {AuthService} from '../../auth/auth.service';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, OnDestroy {

  signUpForm: FormGroup;
  beErrorMessage = null;
  subscription = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    if (this.authService.isAuthorized()) {
      this.router.navigate(['gallery']);
    }

    this.subscription = this.signUpForm.valueChanges.pipe(debounceTime(200)).subscribe(formValue => {
      if (this.beErrorMessage) {
        this.beErrorMessage = null;
      }
    });
  }

  get email(): AbstractControl {
    return this.signUpForm.get('email');
  }

  get password(): AbstractControl {
    return this.signUpForm.get('password');
  }

  get firstName(): AbstractControl {
    return this.signUpForm.get('firstName');
  }

  get lastName(): AbstractControl {
    return this.signUpForm.get('lastName');
  }

  onSubmit(): void {
    this.authService.signUp(this.signUpForm.value)
      .subscribe(response => {
        console.log('user is signed up', response);
        this.router.navigate(['auth/sign-in']);
      }, err => {
        console.error(err);
        if (err.status === 400) {
          this.beErrorMessage = 'User with given email already exists';
        }
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
