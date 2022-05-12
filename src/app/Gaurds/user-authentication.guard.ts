import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserAuthenticatingService } from '../Services/user-authenticating.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationGuard implements CanActivate {
  LoginStatus:boolean=((localStorage.getItem('token') !=undefined) &&
   (this.jwtHelper.isTokenExpired(localStorage.getItem('tokendata')!) != true))
    ? true : false;
  constructor(private UserAuthenticationService:UserAuthenticatingService
              ,private router:Router 
              ,private jwtHelper:JwtHelperService     
             ){
              this.UserAuthenticationService.getStatusLoging().subscribe(status=>{
                console.log("status",status);
                this.LoginStatus= status;
             });
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

  if(this.LoginStatus)
    { 
      console.log("Hi From Guard.......");
      return true;
    }
    else
    {
      this.router.navigate(['/Loging/Login']);
      return false;
    }
  }
  
}
