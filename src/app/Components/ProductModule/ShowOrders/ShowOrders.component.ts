import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/Models/IOrder';
import { OrderService } from 'src/app/Services/order.service';
import { ShopingCartItems } from 'src/app/ViewModels/ShoppingCartItems';

@Component({
  selector: 'app-ShowOrders',
  templateUrl: './ShowOrders.component.html',
  styleUrls: ['./ShowOrders.component.scss']
})
export class ShowOrdersComponent implements OnInit {

  Orders:IOrder[]=[];
  Shopingcartitems:ShopingCartItems[]=[]
  constructor(private orderService:OrderService) { }

  ngOnInit() {
     this.orderService.GetAllOrders().subscribe(orders=>
      {
        this.Orders=orders;
        this.Orders=orders
        
      })
  }

}
