import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/Header/Header.component';
import { FooterComponent } from './Components/Footer/Footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EgyptionIDParsePipe } from './Components/Pipes/egyption-idparse.pipe';
import { CreditCardFormatPipe } from './Components/Pipes/credit-card-format.pipe';
import { HomeComponent } from './Components/Home/Home.component';
import { ContactUsComponent } from './Components/ContactUs/ContactUs.component';
import { AboutUsComponent } from './Components/AboutUs/AboutUs.component';
import { MainLayoutComponent } from './Components/MainLayout/MainLayout.component';
import { PathNotExistComponent } from './Components/PathNotExist/PathNotExist.component';
import { InterceptorService } from './Services/interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SideBarComponent } from './Components/SideBar/SideBar.component';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EgyptionIDParsePipe,
    CreditCardFormatPipe,
    HomeComponent,
    ContactUsComponent,
    AboutUsComponent,
    MainLayoutComponent,
    PathNotExistComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : InterceptorService,
      multi: true
    },
    { 
      provide: MAT_DIALOG_DATA,
      useValue: {} 
    },
    { provide:  MatDialogRef ,
      useValue: {} 
    },
    { 
      provide: JWT_OPTIONS,
       useValue: JWT_OPTIONS },
        JwtHelperService
        
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
