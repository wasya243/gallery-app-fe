import {Injectable} from '@angular/core';
import {
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  CanActivate
} from '@angular/router';

import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class MasterGuard implements CanActivate {
  constructor(
    private authService: AuthService
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.authService.isAuthorized();
  }
}
