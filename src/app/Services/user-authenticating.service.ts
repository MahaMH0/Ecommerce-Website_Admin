import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../Models/IUser';
import { Login } from '../ViewModels/Login';
import {JwtHelperService} from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class UserAuthenticatingService{
  private HttpOptions;
  private ISLoggedSubject:BehaviorSubject<boolean>;
  private UserLogin:Login;
  UserToken: any;
  tokendata:any;
  role:any;
  constructor(private HttpClientService: HttpClient
    ,private jwtHelper: JwtHelperService) { 
    this.HttpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
       //, 'Authorization': `${localStorage.getItem("tokendata")}`
      })
    }

    this.ISLoggedSubject=new BehaviorSubject<boolean>(((localStorage.getItem('token') !=undefined) &&
    (this.jwtHelper.isTokenExpired(localStorage.getItem('tokendata')!) != true))
     ? true : false);
    this.UserLogin={ userName:"",password:""};
    if (this.jwtHelper.isTokenExpired(this.UserToken)) {
      console.log("Token Expired",this.jwtHelper.isTokenExpired(localStorage.getItem('tokendata')!));
      console.log("subject",((localStorage.getItem('token') != undefined) &&
      (this.jwtHelper.isTokenExpired(this.UserToken) != true)));
      // token expired 
    } else {
      console.log("Token is Not Expired");
      // token valid
    }
    //console.log("Token is Expired",this.tokenExpired(this.UserToken));
  }

  public getToken(): string {
    return localStorage.getItem('tokendata')!;
  }

   Register(newUser:IUser): Observable<IUser>
   {
    return this.HttpClientService.post<IUser>(`${environment.APIBaseURL}/api/Account/Register/Admin`, JSON.stringify(newUser),this.HttpOptions);
   }
   Login(UserName:string, Password:string): Observable<Login>
   {
      this.UserLogin.userName=UserName;
      this.UserLogin.password=Password;

  return this.HttpClientService.post<Login>(`${environment.APIBaseURL}/api/Account/Login`,
   JSON.stringify(this.UserLogin),this.HttpOptions).pipe(map(
     usertoken=>{
       this.UserToken=usertoken;
       this.tokendata=this.UserToken.token;
       this.role=this.UserToken.role;
       console.log("Token",this.UserToken);
       console.log("Tokendata",this.tokendata);
       console.log("Role",this.role);
       if(this.role == "Admin")
       {
       localStorage.setItem("token",this.UserToken);
       localStorage.setItem("tokendata",this.tokendata);
       }
       localStorage.setItem("role",this.role);
       this.ISLoggedSubject.next(true);
       return usertoken;
     }
   ));
      //`Username:${UserName},Password:${Password}Key:SecretKey2022`
     
   }
   Logout()
   {
      localStorage.removeItem("token");
      console.log("IsLogged",this.ISloggedin);
      this.ISLoggedSubject.next(false);
   }
   get ISloggedin(): boolean
   {
      return localStorage.getItem("token") ? true:false;
   }


   getCurrentUser() :Observable<IUser>
   {
      return this.HttpClientService.get<IUser>(`${environment.APIBaseURL}/api/Account`,this.HttpOptions);
   }

   updateUser(newUser: IUser) :Observable<IUser>
   {
     return this.HttpClientService.put<IUser>(`${environment.APIBaseURL}/api/Account/Edit`,JSON.stringify(newUser),this.HttpOptions);
   }

   getStatusLoging() :Observable<boolean>
   {
     console.log(this.ISLoggedSubject);
     return this.ISLoggedSubject.asObservable();
   }

   getUserPage() :Observable<void>
   {
    return this.HttpClientService.get<void>(`${environment.UserURL}/Home`,this.HttpOptions);
   }
}
