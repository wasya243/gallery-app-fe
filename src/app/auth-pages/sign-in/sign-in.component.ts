import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

import {AuthService} from '../../auth/auth.service';
import {AuthTokenService} from '../../auth/auth-token.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private authTokenService: AuthTokenService
  ) {
    this.signInForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  ngOnInit(): void {
    if (this.authService.isAuthorized()) {
      this.router.navigate(['gallery']);
    }
  }

  onSubmit(): void {
    this.authService.signIn(this.signInForm.value)
      .subscribe(response => {
        console.log('user is logged in', response);
        this.authTokenService.setToken(response.accessToken);
        this.router.navigate(['gallery']);
      }, err => {
        console.error(err);
      });
  }

}
