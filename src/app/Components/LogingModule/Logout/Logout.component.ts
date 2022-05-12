import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthenticatingService } from 'src/app/Services/user-authenticating.service';

@Component({
  selector: 'app-Logout',
  templateUrl: './Logout.component.html',
  styleUrls: ['./Logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private UserAuthorizationnService:UserAuthenticatingService
    ,private router:Router) { }

  ngOnInit() {
    this.UserAuthorizationnService.Logout();
    this.router.navigate(['/Loging/Login']);
  }

}
