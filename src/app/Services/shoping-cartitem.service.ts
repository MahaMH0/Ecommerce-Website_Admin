import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ShopingCartItems } from '../ViewModels/ShoppingCartItems';

@Injectable({
  providedIn: 'root'
})
export class ShopingCartitemService {

  private HttpOptions;

  constructor(private HttpClientService: HttpClient) { 
    this.HttpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
       //, 'Authorization': 'Token'
      })
    }
  }
  GetAllCartItems(): Observable<ShopingCartItems[]>
  {
    return this.HttpClientService.get<ShopingCartItems[]>(`${environment.APIBaseURL}/api/ShopingCartItem`);
  }
  GetAllCartItemsByOrderID(orderID:number) :Observable<ShopingCartItems[]>
  {
     return this.HttpClientService.get<ShopingCartItems[]>(`${environment.APIBaseURL}/api/ShopingCartItem?orderID=${orderID}`);
  }
  getCartItemByID(CartItemID: number): Observable<ShopingCartItems>
  {
    return this.HttpClientService.get<ShopingCartItems>(`${environment.APIBaseURL}/api/ShopingCartItem/${CartItemID}`);
  }

  AddNewCartItem(newCartItem: ShopingCartItems): Observable<ShopingCartItems>
  {
    return this.HttpClientService.post<ShopingCartItems>(`${environment.APIBaseURL}/api/ShopingCartItem`, JSON.stringify(newCartItem),this.HttpOptions);
  }

  updateCartItem(CartItemID: number, newCartItem: ShopingCartItems) :Observable<ShopingCartItems>
  {
    return this.HttpClientService.put<ShopingCartItems>(`${environment.APIBaseURL}/api/ShopingCartItem/${CartItemID}`,JSON.stringify(newCartItem),this.HttpOptions);
  }

  InsertCart(newCart:ShopingCartItems[])
  {
    return this.HttpClientService.post<ShopingCartItems>(`${environment.APIBaseURL}/api/ShopingCartItem/InsertCart`, JSON.stringify(newCart),this.HttpOptions);
  }

  deleteCartItem(CartItemID:number) :Observable<ShopingCartItems>
  {
    return this.HttpClientService.delete<ShopingCartItems>(`${environment.APIBaseURL}/api/ShopingCartItem/${CartItemID}`);
  }
}
