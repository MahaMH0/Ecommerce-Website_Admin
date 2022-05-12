import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICategory } from '../ViewModels/ICategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private HttpOptions;

  constructor(private HttpClientService: HttpClient) { 
    this.HttpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
       //, 'Authorization': 'Token'
      })
    }
  }
  GetAllCategories(): Observable<ICategory[]>
  {
    return this.HttpClientService.get<ICategory[]>(`${environment.APIBaseURL}/api/Category`);
  }

  getCategoryByID(categoryID: number): Observable<ICategory>
  {
    return this.HttpClientService.get<ICategory>(`${environment.APIBaseURL}/api/Category/${categoryID}`);
  }

  AddNewCategory(newCategory: ICategory): Observable<ICategory>
  {
    return this.HttpClientService.post<ICategory>(`${environment.APIBaseURL}/api/Category`, JSON.stringify(newCategory),this.HttpOptions);
  }

  updateCategory(categoryID: number, newCategory: ICategory) :Observable<ICategory>
  {
    return this.HttpClientService.patch<ICategory>(`${environment.APIBaseURL}/api/Category/${categoryID}`,JSON.stringify(newCategory),this.HttpOptions);
  }

  deleteCAtegory(categoryID:number) :Observable<ICategory>
  {
    return this.HttpClientService.delete<ICategory>(`${environment.APIBaseURL}/api/Category/${categoryID}`);
  }
}

