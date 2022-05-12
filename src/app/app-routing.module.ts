import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Components/AboutUs/AboutUs.component';
import { ContactUsComponent } from './Components/ContactUs/ContactUs.component';
import { HomeComponent } from './Components/Home/Home.component';
import { MainLayoutComponent } from './Components/MainLayout/MainLayout.component';
import { PathNotExistComponent } from './Components/PathNotExist/PathNotExist.component';
import { RegisterComponent } from './Components/LogingModule/Register/Register.component';
import { UserAuthenticationGuard } from './Gaurds/user-authentication.guard';

const routes: Routes = [
  {path: '', component:MainLayoutComponent, children: [
    {path:'', redirectTo:'/Home', pathMatch:'full'},
    {path:'Home', component:HomeComponent},
    {
      path: 'Product',
      loadChildren: () => import('./Components/ProductModule/product.module').then(m => m.ProductModule),
      canActivate:[UserAuthenticationGuard]
    },
    {
      path: 'User',
      loadChildren: () => import('./Components/UserModule/user.module').then(m => m.UserModule),
      canActivate:[UserAuthenticationGuard]
    },


    {path:'ContactUs',component:ContactUsComponent},
    {path:'AboutUs',component:AboutUsComponent},
  ]},
    
  {
    path: 'Loging',
    loadChildren: () => import('./Components/LogingModule/loging.module').then(m => m.LogingModule)
  },

    {path:'**',component:PathNotExistComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
