import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { UserAuthenticatingService } from 'src/app/Services/user-authenticating.service';

@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges{
  IsUserLogged:boolean;
  constructor(private UserAuthenticationService:UserAuthenticatingService
    ) {
    this.IsUserLogged=localStorage.getItem('token') ? true : false;
    this.UserAuthenticationService.getStatusLoging().subscribe(status=>{
      this.IsUserLogged=status;
    });
   }
  ngOnChanges(changes: SimpleChanges): void {
    this.UserAuthenticationService.getStatusLoging().subscribe(status=>{
      this.IsUserLogged=status;
    });   
  }
  ngOnInit() {
    this.UserAuthenticationService.getStatusLoging().subscribe(status=>{
      this.IsUserLogged=status;
    });    
  }

  ngAfterViewInit(): void {

 }

}
