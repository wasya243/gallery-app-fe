import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';

import {StorageService} from './core/storage.service';
import {AuthTokenService} from './auth/auth-token.service';

// TODO: move to the environments
const apiBaseURL = 'http://localhost:3000/api';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor(
    private storageService: StorageService,
    private authTokenService: AuthTokenService,
    private router: Router
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const modifiedRequest = req.url.startsWith('assets') ? req : req.clone({url: `${apiBaseURL}${req.url}`});

    return next.handle(modifiedRequest)
      .pipe(
        tap(
          (event: HttpEvent<any>) => {
          },
          (err: any) => {
            if (err instanceof HttpErrorResponse) {
              switch (err.status) {
                case 401:
                  this.authTokenService.removeToken();
                  this.storageService.removeUserData();
                  this.router.navigate(['auth/sign-in']);
                  break;
              }
            }
          })
      );
  }
}
