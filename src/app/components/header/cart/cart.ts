import {Injectable} from '@angular/core';
import { Product } from 'src/app/data/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class Cart {
  products: Product[] =[];
  quantity?: number;


  constructor() {

  }

  add(product: Product){
    this.products.push(product);

  }

  get() {
    return this.products;
  }


}
