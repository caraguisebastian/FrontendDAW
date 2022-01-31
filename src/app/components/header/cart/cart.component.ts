import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Product } from 'src/app/data/interfaces/product';
import { Cart } from './cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @ViewChild('cartModal') modal?: ModalDirective;
  productss: Product[] = [];
  sum = 0;

  constructor(private cart: Cart) { }

  ngOnInit(): void {
  }

  show() {
    this.sum = 0;
    this.modal?.show();
    this.productss = this.cart.get();
    for (let i = 0; i < this.productss.length; i++) {
      this.sum += this.productss[i].price;
    }
  }


  delete(id: number, price: number) {
    this.sum = this.sum - price;
    this.productss.splice(id, 1);
  }
}
