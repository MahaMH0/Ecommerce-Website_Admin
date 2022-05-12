import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/Services/category.service';
import { ICategory } from 'src/app/ViewModels/ICategory';
import { IProduct } from 'src/app/ViewModels/IProduct';
import { ProductAPIService } from 'src/app/Services/product-api.service';

@Component({
  selector: 'app-AddNewProduct',
  templateUrl: './AddNewProduct.component.html',
  styleUrls: ['./AddNewProduct.component.scss']
})
export class AddNewProductComponent implements OnInit {

  Product:IProduct={} as IProduct;
  ProductID:number;
  CategoryList:ICategory[]=[];
  
  constructor(private CategoryAPIService:CategoryService,
              private ProductAPIService:ProductAPIService,
              private activatedRoute:ActivatedRoute,
              private router: Router   
           ) { 
             this.ProductID=0;
      this.CategoryAPIService.GetAllCategories().subscribe(categorylist=>
        {
          this.CategoryList=categorylist;
        })
  }

  onFileChange(event:any) {
    const reader = new FileReader();
    console.log(reader);
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.Product.img = reader.result as string;
      };
    }
  }

  saveProduct()
  {
    if(this.ProductID)
    {
      this.ProductAPIService.updateProduct(this.ProductID,this.Product).subscribe(product=>{
        this.router.navigate(['/Product/Products']);
      });
    }
    else{
      this.ProductAPIService.AddNewProduct(this.Product).subscribe(product=>{
        this.router.navigate(['/Product/Products']);
      });
    }

  }

  ngOnInit() {
      this.activatedRoute.paramMap.subscribe(paramMap=>{
      this.ProductID=Number(paramMap.get("pid"));
      if(this.ProductID)
      {
        this.ProductAPIService.getProductByID(this.ProductID).subscribe(product=>{
          this.Product=product;
        });
      }

  });  
  }
}
