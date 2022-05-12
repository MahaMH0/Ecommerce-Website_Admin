import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './UserProfile/UserProfile.component';
import { EditProfileComponent } from './EditProfile/EditProfile.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes:Routes=[
  {path:'', redirectTo:'/User/Profile', pathMatch:'full'},
  {path: 'Profile', component:UserProfileComponent},
  {path: 'EditProfile', component:EditProfileComponent}
]

@NgModule({
  declarations: [
    EditProfileComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
