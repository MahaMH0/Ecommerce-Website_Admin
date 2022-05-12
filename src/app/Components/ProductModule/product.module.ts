import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AddNewProductComponent } from './AddNewProduct/AddNewProduct.component';
import { ProductDetailsComponent } from './ProductDetails/ProductDetails.component';
import { ProductsComponent } from './Products/Products.component';
import { ProductCardDirective } from 'src/app/Directives/product-card.directive';
import { AddNewCategoryComponent } from './AddNewCategory/AddNewCategory.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ShowOrdersComponent } from './ShowOrders/ShowOrders.component';
const routes:Routes=[
  {path:'', redirectTo:'/Product/Order', pathMatch:'full'},
  {path: 'AddProduct', component:AddNewProductComponent},
  {path:'Details/:pid', component:ProductDetailsComponent},
  {path:'AddProduct',component:AddNewProductComponent},
  {path:'EditProduct/:pid',component:AddNewProductComponent},
  {path:'Products',component:ProductsComponent},
  {path:'AddCategory',component:AddNewCategoryComponent},
  {path:'EditCategory/:Cid',component:AddNewCategoryComponent},
  {path:'ShowOrders',component:ShowOrdersComponent}
]

@NgModule({
  declarations: [
    ProductsComponent,
    AddNewProductComponent,
    ProductDetailsComponent,
    ProductCardDirective,
    AddNewCategoryComponent,
    ShowOrdersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductModule { }
