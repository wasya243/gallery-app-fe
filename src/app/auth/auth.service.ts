import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {AuthTokenService} from './auth-token.service';
import {Observable} from 'rxjs';
import {User, UserCredentials, UserSignUpInfo, UserSignUpResponse} from '../../types/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private authTokenService: AuthTokenService,
    private http: HttpClient
  ) {
  }

  isAuthorized(): boolean {
    return this.authTokenService.hasAccessToken();
  }

  signIn(userCredentials: UserCredentials): Observable<User> {
    return this.http.post<User>('/auth/sign-in', userCredentials);
  }

  signUp(userSignUpInfo: UserSignUpInfo): Observable<UserSignUpResponse> {
    return this.http.post<UserSignUpResponse>('/auth/sign-up', userSignUpInfo);
  }
}
