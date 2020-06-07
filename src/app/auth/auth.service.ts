import {Injectable} from '@angular/core';

import {AuthTokenService} from './auth-token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private authTokenService: AuthTokenService) {
  }

  isAuthorized(): boolean {
    return this.authTokenService.hasAccessToken();
  }
}
