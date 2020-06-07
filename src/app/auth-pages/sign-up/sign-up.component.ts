import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.signUpForm = this.fb.group({
      email: [''],
      firstName: [''],
      lastName: [''],
      password: ['']
    });
  }

  ngOnInit(): void {
    if (this.authService.isAuthorized()) {
      this.router.navigate(['gallery']);
    }
  }

  onSubmit(): void {
    this.authService.signUp(this.signUpForm.value)
      .subscribe(response => {
        console.log('user is signed up', response);
        this.router.navigate(['auth/sign-in']);
      }, err => {
        console.error(err);
      });
  }

}
