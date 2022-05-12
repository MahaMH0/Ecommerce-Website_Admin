import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/Models/IUser';
import { Location } from '@angular/common';
import { UserAuthenticatingService } from 'src/app/Services/user-authenticating.service';


@Component({
  selector: 'app-EditProfile',
  templateUrl: './EditProfile.component.html',
  styleUrls: ['./EditProfile.component.scss']
})
export class EditProfileComponent implements OnInit {

  CurrentUser:IUser={} as IUser;
  newUser:IUser={} as IUser;
  constructor(private UserAuthenticationService:UserAuthenticatingService
    ,private router:Router
    ,location:Location) 
  { }

  ngOnInit() {
    this.UserAuthenticationService.getCurrentUser().subscribe(user=>
      {
        this.CurrentUser=user;
      });

  }
  UpdateUserDate()
  {
    this.newUser.phone=this.CurrentUser.phoneNumber;
    this.newUser.id=this.CurrentUser.id;
    this.newUser.address=this.CurrentUser.address;
    this.newUser.deliveryOptions=this.CurrentUser.deliveryOptions;
    this.newUser.password=this.CurrentUser.passwordHash;
    this.newUser.fullName=this.CurrentUser.fullName;
    this.newUser.userName=this.CurrentUser.userName;
    this.newUser.email=this.CurrentUser.email; 
    console.log(this.newUser);
    try
    {
     this.UserAuthenticationService.updateUser(this.newUser).subscribe(user=>
      {
        this.router.navigate(['/Home']);
      });
    }
    catch(error)
    {
      console.log("Not Valid Data");
    }
    
  }
}
