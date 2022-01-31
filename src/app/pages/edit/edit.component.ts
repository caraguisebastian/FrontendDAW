import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/core/services/ProductServices/product.service';
import { Product } from 'src/app/data/interfaces/product';
import { EditModalComponent } from './edit-modal/edit-modal.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  productss: Product[] = [];

  @ViewChild('editProductModal') editModal?: EditModalComponent;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }


  getProducts() {
    this.productService.get()
      .subscribe((data: Product[]) => {
        this.productss = [];

        for (let i = 0; i < data.length; i++) {
          this.productService.getById(data[i].id)
            .subscribe((info: Product) => {
              info.id = data[i].id;
              this.productss.push(info);
            },
              (e: Error) => {
                console.log('err', e);
              });
        }

      },
        (error: Error) => {
          console.log('err', error);

        });
  }



  deleteProduct(id: string) {
    this.productService.delete(id)
      .subscribe(() => {
        this.productss = [];
        this.getProducts();
      },
        (error: Error) => {
          console.log(error);
        });
  }


  showM1(id: string): void {
    this.editModal?.show(id);
  }

  changeE(event: string) {
    if (event === 'product') {
      this.getProducts();
    }

  }

}
