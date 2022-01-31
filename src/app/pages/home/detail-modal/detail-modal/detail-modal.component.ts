import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { CategoryService } from 'src/app/core/services/CategoryServices/category.service';
import { ProductService } from 'src/app/core/services/ProductServices/product.service';
import { Category } from 'src/app/data/interfaces/category';
import { Product } from 'src/app/data/interfaces/product';
import { Cart } from 'src/app/components/header/cart/cart';

@Component({
  selector: 'app-detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.css']
})
export class DetailModalComponent implements OnInit {
  @ViewChild('detailModal') modal?: ModalDirective;
  product?: Product;
  studio?: string;
  isLoggedIn?: string;
  categoryName?: string;

  constructor(private productService: ProductService, private categoryService: CategoryService, private cart: Cart) { }

  ngOnInit() {}

  show(id: string): void {
    this.getProduct(id);
    this.modal?.show();
  }

  getProduct(id: string) {
    this.productService.getById(id)
      .subscribe((data: Product) => {
        this.product = data;
        this.product.id = id;
        this.getCategoryName(this.product.categoryId);
        // Too lazy to modify the DB to also have an image field so the image of the products will be random
        if (!data.img) {var pepes = [
          'https://preview.redd.it/lfh1a8x18wz41.jpg?auto=webp&s=08522b923c79e70ebd476f6cad26985ae6d884a1',
          'https://i.pinimg.com/736x/14/1f/0c/141f0c0ee298388c5a44baff34b76d0f.jpg',
          'https://digirare.com/storage/rare-pepe/PEPEBASS.png',
          'https://i.pinimg.com/originals/98/33/b9/9833b9e2e8292bcf175b7ae7d66adaf0.png',
          'https://i.pinimg.com/originals/3f/50/43/3f504397bf5e0478315bc15aaf6736e5.jpg',
          'https://pepethefrog.ucoz.com/_nw/4/63043001.jpg',
          'https://static-cdn.jtvnw.net/emoticons/v1/301212974/3.0',
          'https://i.redd.it/9mza4paxvhz31.jpg',
          'https://media.tenor.com/images/2e72f7bb374e958a7e49f37033b50555/tenor.png',
          'https://i.pinimg.com/originals/a4/d9/74/a4d974c5838f3f1766398f67c4888329.jpg'
        ]
          this.product.img = pepes[Math.floor(Math.random() * 10)];
        }
      },
        (err: Error) => {
          console.log('err', err);

        });
  }

  getCategoryName(id: string){
    this.categoryService.getById(id).subscribe((data: Category) => {
      this.categoryName = data.name;
    });
  }


  addCart(product: Product) {
    this.cart.add(product);
    this.modal?.hide();
  }
 }
