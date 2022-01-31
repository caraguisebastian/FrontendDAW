import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/core/services/ProductServices/product.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Product } from 'src/app/data/interfaces/product';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {
  @ViewChild('editProductModal') modal?: ModalDirective;
  @Output() change: EventEmitter<string> = new EventEmitter<string>();
  editProductForm?: FormGroup;
  currentProduct?: Product;

  constructor(public fb: FormBuilder, private productService: ProductService) { }

  ngOnInit(): void {
  }

  show(id: string): void {
    this.modal?.show();
    this.productService.getById(id)
      .subscribe((data: Product) => {
        this.currentProduct = data;
        this.currentProduct.id = id;
        this.initializeFrom(this.currentProduct);
      },
        (error: Error) => {
          console.log('err', error);

        });
  }


  initializeFrom(currentProduct: Product) {
    this.editProductForm = this.fb.group({
      name: [currentProduct.name, Validators.required],
      price: [currentProduct.price, Validators.required],
      stock: [currentProduct.stock, Validators.required],
      categoryId: [currentProduct.categoryId, Validators.required],
      description: [currentProduct.description, Validators.required],
      img: [currentProduct.img],
    });
  }


  editProduct() {
    const formData = new FormData();
    formData.append('id', this.currentProduct!.id);
    formData.append('name', this.editProductForm!.value.name);
    formData.append('price', this.editProductForm!.value.price);
    formData.append('stock', this.editProductForm!.value.stock);
    formData.append('categoryId', this.editProductForm!.value.stock);
    formData.append('description', this.editProductForm!.value.description);

    this.productService.put(formData)
      .subscribe(() => {
        this.change.emit('product');
        this.modal?.hide();
      },
        (error: Error) => {
          console.log('err', error);
        });
  }
}
