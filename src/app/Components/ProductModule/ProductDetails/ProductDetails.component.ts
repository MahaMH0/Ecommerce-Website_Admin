import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/ViewModels/IProduct';
import { Location } from '@angular/common';
import { ProductAPIService } from 'src/app/Services/product-api.service';
import { environment } from 'src/environments/environment';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-ProductDetails',
  templateUrl: './ProductDetails.component.html',
  styleUrls: ['./ProductDetails.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  EnvironmentLink=environment.APIBaseURL;
  ProductID:number=0;
  CurrentProduct:IProduct |undefined=undefined;
  ProductIDSList:number[]=[];
  ProductList:IProduct[]=[];
  constructor(private ProductAPIService:ProductAPIService
            , private activatedRoute:ActivatedRoute
            , private router: Router
            , private location: Location 
            ,@Inject(MAT_DIALOG_DATA) public Pdoductidinput:number
    ) { 
      this.ProductID=Pdoductidinput;
      this.ProductAPIService.GetAllProducts().subscribe(productlist=>
        {
          this.ProductList=productlist;
          this.ProductIDSList=this.ProductAPIService.GetProductIDsList(this.ProductList);
        })
     
  }

  ngOnInit() {
    this.ProductAPIService.GetAllProducts().subscribe(productlist=>
      {
        this.ProductList=productlist;
        this.ProductIDSList=this.ProductAPIService.GetProductIDsList(this.ProductList);
      })
    this.activatedRoute.paramMap.subscribe(paramMap=>{
   // this.ProductID=Number(paramMap.get("pid"));
   // this.CurrentProduct=this.ProductService.getProductByID(this.ProductID);
   this.ProductAPIService.getProductByID(this.ProductID).subscribe(product=>{
     this.CurrentProduct=product;
   });
  });
}
// async goBack()
// {
//   this.location.back();
// }
  async GetPrevProduct()
{
   let index=this.ProductIDSList.findIndex((productID)=>productID==this.ProductID);
   if(index !=0)
   {
    this.ProductID=this.ProductIDSList[index-1];
    this.ProductAPIService.getProductByID(this.ProductID).subscribe(product=>{
      this.CurrentProduct=product;
    });
    // await this.router.navigate(['/Product/Details',this.ProductID]);
   }
   
}
  async GetNextProduct()
{
  let index=this.ProductIDSList.findIndex((productID)=>productID==this.ProductID);
  if(index !=0)
  {
   this.ProductID=this.ProductIDSList[index+1];
   this.ProductAPIService.getProductByID(this.ProductID).subscribe(product=>{
    this.CurrentProduct=product;
  });
  //  await this.router.navigate(['/Product/Details',this.ProductID]);
  }
}
IsFirstItem()
{
   if(this.ProductID==this.ProductIDSList[0])
   {
     return true;
   }
   return false;
}
IsLastItem()
{
  if(this.ProductID==this.ProductIDSList[this.ProductIDSList.length-1])
  {
    return true;
  }
  return false;
}
}
