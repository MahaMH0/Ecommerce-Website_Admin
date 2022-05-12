import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './Login/Login.component';
import { RegisterComponent } from './Register/Register.component';
import { LogoutComponent } from './Logout/Logout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'', redirectTo:'/Loging/Login', pathMatch:'full'},
  {path: 'Login', component:LoginComponent},
  {path: 'Logout', component:LogoutComponent},
  {path:'Register', component:RegisterComponent}
]


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LogoutComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class LogingModule { }
