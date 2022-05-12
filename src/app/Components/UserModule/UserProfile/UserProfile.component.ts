import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/Models/IUser';
import { UserAuthenticatingService } from 'src/app/Services/user-authenticating.service';

@Component({
  selector: 'app-UserProfile',
  templateUrl: './UserProfile.component.html',
  styleUrls: ['./UserProfile.component.scss']
})
export class UserProfileComponent implements OnInit {

  CurrentUser:IUser={} as IUser;
  constructor(private UserAuthenticationService:UserAuthenticatingService
    ,private router:Router
    ,location:Location) 
  { }

  ngOnInit() {
    this.UserAuthenticationService.getCurrentUser().subscribe(user=>
      {
        this.CurrentUser=user;
        this.CurrentUser.deliveryOptions=user.deliveryOptions;
        this.CurrentUser.phone=user.phoneNumber
        this.CurrentUser.password=user.passwordHash;

      });
  }

}
