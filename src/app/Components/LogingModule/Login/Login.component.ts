import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthenticatingService } from 'src/app/Services/user-authenticating.service';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.scss']
})
export class LoginComponent implements OnInit {
  Usertoken:any;
  LoginForm:FormGroup;
  constructor(private UserAuthorizationService:UserAuthenticatingService
    ,private FormBuilderTool:FormBuilder
    ,private router:Router) 
  {
    this.LoginForm=
    this.FormBuilderTool.group({
      UserName: ['',Validators.required],
      Password: ['',[Validators.required]]
    });
  }

  ngOnInit() {  
  }
  get UserName()
  {
    return this.LoginForm.controls['UserName'];
  }
  get Password()
  {
    return this.LoginForm.controls['Password'];
  }
  Login()
  { 
    try{
    this.UserAuthorizationService.Login(this.UserName.value, this.Password.value).subscribe(
      user=>{
        if(localStorage.getItem("role")=="Admin")
        {
          //this.UserAuthorizationService.getUserPage().subscribe();
            this.router.navigate(['/Home']);
        }
        else
        {
         // this.UserAuthorizationService.getUserPage().subscribe();
            this.router.navigate(['/NotAuthorized']);
        }
      }
    );
    }
    catch(error)
    {
      confirm("make sure from your username or password")
    }
  }
}
