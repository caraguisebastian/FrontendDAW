import { Component, OnInit, ViewChild } from '@angular/core';
import { CartComponent } from './cart/cart.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('cartModal') detailModal?: CartComponent;

  constructor() { }

  ngOnInit(): void {
  }

  openCart() {
    this.detailModal?.show();
   }
}
