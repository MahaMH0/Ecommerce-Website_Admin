import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { IProduct } from 'src/app/ViewModels/IProduct';
import { Store } from 'src/app/ViewModels/Store';
import { DiscountOffers } from 'src/app/ViewModels/DiscountOffers';
import { ProductAPIService } from 'src/app/Services/product-api.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/ViewModels/ICategory';
import { CategoryService } from 'src/app/Services/category.service';
import { environment } from 'src/environments/environment';
import { Location } from '@angular/common';
import { ProductDetailsComponent } from '../ProductDetails/ProductDetails.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-Products',
  templateUrl: './Products.component.html',
  styleUrls: ['./Products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy, OnChanges {

  Discount:DiscountOffers;
  store:Store;
  ProductListForCategory: IProduct[]=[];
  private subscriptionList: Subscription[]=[];
  CategoryList:ICategory[]=[];
  categoryid:number=0;
  constructor(
    private ProductAPIService: ProductAPIService,
    private CategoryAPIService:CategoryService,
    private router:Router
    ,private location:Location
    ,private matDialog: MatDialog
    ) { 
    this.Discount=DiscountOffers.Dicount10;
    this.store=new Store("Food Mart",
     [
     {id:1,name:""} 
    ,{id:2, name:""}
    ,{id:3, name: ""}]
    ,"https://mpng.subpng.com/20180422/diw/kisspng-computer-icons-shopping-cart-encapsulated-postscri-5add18ef692f50.1824256415244392794309.jpg");
    this.CategoryAPIService.GetAllCategories().subscribe(categorylist=>
      {
        this.CategoryList=categorylist;
      })
    this.ProductAPIService.
    GetAllProducts().subscribe(productList=>{
      this.ProductListForCategory= productList })
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.ProductAPIService.
    GetAllProducts().subscribe(productList=>{
      this.ProductListForCategory= productList });
  }
  ngOnDestroy(): void 
  {
    for (let subscription of this.subscriptionList)
    {
      subscription.unsubscribe();
    } 
   
  }
  ngOnInit() {
    this.ProductAPIService.
    GetAllProducts().subscribe(productList=>{
      this.ProductListForCategory= productList });
  }
  ShowProduct(value:any)
  {
    this.categoryid=value;
    this.ProductAPIService.
    GetAllProductsByCategoryID(Number(value)).subscribe(ProductList=>
     {
       this.ProductListForCategory=ProductList;
       console.log(value);
     });  
  }
  DeleteProduct(id:number)
  {
    if(confirm("Are you sure to delete This Product")) {
      this.ProductAPIService.deleteProduct(id).subscribe(product=>{
        this.ProductAPIService.GetAllProductsByCategoryID(this.categoryid).subscribe(productlist=>
          {
            this.ProductListForCategory=productlist
          });
        //this.router.navigate(['/Product/Products']);
        //window.location.reload();
      });
    }
  }

  openDetailsModal(Productid:number) {
    this.matDialog.open(ProductDetailsComponent, {
      "width": '50%',
      "maxHeight": 'auto',
      "data": Productid,
      "autoFocus": true
    });
  }
}
