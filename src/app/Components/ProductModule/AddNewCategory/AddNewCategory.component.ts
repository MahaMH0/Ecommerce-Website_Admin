import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/Services/category.service';
import { ICategory } from 'src/app/ViewModels/ICategory';

@Component({
  selector: 'app-AddNewCategory',
  templateUrl: './AddNewCategory.component.html',
  styleUrls: ['./AddNewCategory.component.scss']
})
export class AddNewCategoryComponent implements OnInit {

  Category:ICategory={} as ICategory;
  CategoryID:number;
  
  constructor(private CategoryAPIService:CategoryService,
              private activatedRoute:ActivatedRoute,
              private router: Router   
           ) { 
             this.CategoryID=0;
  }

  saveCategory()
  {
    if(this.CategoryID)
    {
      this.CategoryAPIService.updateCategory(this.CategoryID,this.Category).subscribe(category=>{
        this.router.navigate(['/Product/Products']);
      });
    }
    else{
      this.CategoryAPIService.AddNewCategory(this.Category).subscribe(category=>{
        this.router.navigate(['/Product/Products']);
      });
    }

  }

  ngOnInit() {
      this.activatedRoute.paramMap.subscribe(paramMap=>{
      this.CategoryID=Number(paramMap.get("Cid"));
      if(this.CategoryID)
      {
        this.CategoryAPIService.getCategoryByID(this.CategoryID).subscribe(category=>{
          this.Category=category;
        });
      }

  });  
  }

}
