import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IOrder } from '../Models/IOrder';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private HttpOptions;

  constructor(private HttpClientService: HttpClient) { 
    this.HttpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
       //, 'Authorization': 'Token'
      })
    }
  }
  GetAllOrders(): Observable<IOrder[]>
  {
    return this.HttpClientService.get<IOrder[]>(`${environment.APIBaseURL}/api/Order`);
  }
 
  GetAllUserOrder():Observable<IOrder[]>
  {
    return this.HttpClientService.get<IOrder[]>(`${environment.APIBaseURL}/api/Order/UserOrders`);
  }

  getOrderByID(OrderID: number): Observable<IOrder>
  {
    return this.HttpClientService.get<IOrder>(`${environment.APIBaseURL}/api/Order/${OrderID}`);
  }

  AddNewOrder(totalprice:number): Observable<IOrder>
  {
    return this.HttpClientService.post<IOrder>(`${environment.APIBaseURL}/api/Order/CreateOrder?TotalPrice=${totalprice}`,this.HttpOptions);
  }

  updateOrder(OrderID: number, newOrder: IOrder) :Observable<IOrder>
  {
    return this.HttpClientService.put<IOrder>(`${environment.APIBaseURL}/api/Order/${OrderID}`,JSON.stringify(newOrder),this.HttpOptions);
  }

  deleteOrder(OrderID:number) :Observable<IOrder>
  {
    return this.HttpClientService.delete<IOrder>(`${environment.APIBaseURL}/api/Order/${OrderID}`);
  }
}
