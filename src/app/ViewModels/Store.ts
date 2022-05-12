import { ICategory } from "./ICategory";

export class Store
{
  constructor(public Name:string, public Categories:ICategory[], public Logo:string)
  {

  }
}