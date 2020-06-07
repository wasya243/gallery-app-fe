import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

// TODO: move to the environments
const apiBaseURL = 'http://localhost:3000/api';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const modifiedRequest = req.url.startsWith('assets') ? req : req.clone({url: `${apiBaseURL}${req.url}`});

    return next.handle(modifiedRequest);
  }
}
