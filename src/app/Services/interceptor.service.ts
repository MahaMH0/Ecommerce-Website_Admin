import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserAuthenticatingService } from './user-authenticating.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{
  constructor(private UserAuthenticationservice:UserAuthenticatingService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.UserAuthenticationservice.getToken()}`,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":"DELETE, POST, GET, OPTIONS"

      }
    });

    return next.handle(request);
  }
}
