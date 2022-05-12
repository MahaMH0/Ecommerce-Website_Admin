import { ShopingCartItems } from "../ViewModels/ShoppingCartItems";

export interface IOrder
{
    id:number,
    cusomerId:string,
    createdDate:Date,
    totalPrice:number,
    shopingCartItems:ShopingCartItems[]
}