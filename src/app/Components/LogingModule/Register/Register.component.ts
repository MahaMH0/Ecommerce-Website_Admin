import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordMatchValidation } from 'src/app/CustomValidators/PasswordMatchValidator';
import { IUser } from 'src/app/Models/IUser';
import { UserAuthenticatingService } from 'src/app/Services/user-authenticating.service';

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.scss']
})
export class RegisterComponent implements OnInit {
  RegistrationForm:FormGroup;
  NewUser:IUser ={} as IUser;
  constructor(private FormBuilderTool:FormBuilder
    ,private UserAuthenticationService:UserAuthenticatingService
    ,private router:Router
    ) {
    this.RegistrationForm=this.FormBuilderTool.group({
      userName: ['',[Validators.required,Validators.minLength(4),Validators.maxLength(10)]],
      fullName: ['',[Validators.required,Validators.minLength(10)]],
      email: ['',[Validators.required,Validators.email]],
      phone: ['',[Validators.required,Validators.pattern("^(011|012|010|015)[0-9]{8}$")]],
      address: ['',[Validators.required]],
      password: ['',[Validators.required,Validators.minLength(6),
      Validators.pattern(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/)]],
      ConfirmPassword:['',[Validators.required,Validators.minLength(6)]],
      deliveryOptions:[''],
      specificDays:[''],
    },{ validators: PasswordMatchValidation })
   }


  get userName()
  {
      return this.RegistrationForm.controls['userName']; 
  }
  get FullName()
  {
      return this.RegistrationForm.controls['fullName']; 
  }
  get Mobile()
  {
    return this.RegistrationForm.controls['phone']; 
  }
  get Address()
  {
    return this.RegistrationForm.controls['address']; 
  }
  get Email()
  {
      return this.RegistrationForm.controls['email']; 
  }
  get Password()
  {
      return this.RegistrationForm.controls['password']; 
  }
  get ConfirmPassword()
  {
      return this.RegistrationForm.controls['ConfirmPassword']; 
  }
  get DeliveryOptions()
  {
      return this.RegistrationForm.controls['deliveryOptions']; 
  }
  get SpecificDays()
  {
      return this.RegistrationForm.controls['specificDays']; 
  }
  ngOnInit() {
  }
  updateSpecificDaysDeliveryValidaiton() {
    if (this.DeliveryOptions.value == "SpecificDays")
      this.RegistrationForm.controls['specificDays'].setValidators([Validators.required]);
    else
      this.RegistrationForm.controls['specificDays'].clearValidators();

    this.RegistrationForm.controls['specificDays'].updateValueAndValidity();
  }
  Register()
  {
    console.log(this.RegistrationForm.value);
    this.NewUser.address=this.RegistrationForm.value.address;
    if(this.RegistrationForm.value.specificDays)
    {
      this.NewUser.deliveryOptions=this.RegistrationForm.value.specificDays;
    }
    else
    {
      this.NewUser.deliveryOptions=this.RegistrationForm.value.deliveryOptions;
    }
    this.NewUser.fullName=this.RegistrationForm.value.fullName;
    this.NewUser.userName=this.RegistrationForm.value.userName;
    this.NewUser.email=this.RegistrationForm.value.email;
    this.NewUser.phone=this.RegistrationForm.value.phone;
    this.NewUser.password=this.RegistrationForm.value.password;
    this.UserAuthenticationService.Register(this.NewUser)
    .subscribe(user=>{
      this.router.navigate(['/Loging/Login']);
    });
  }

}
