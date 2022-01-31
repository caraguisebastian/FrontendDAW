import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/core/services/ProductServices/product.service';
import { CategoryService } from 'src/app/core/services/CategoryServices/category.service';
import { Product } from 'src/app/data/interfaces/product';
import { Category } from 'src/app/data/interfaces/category';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  addCategoryForm?: any;
  success?: boolean;


  constructor(public fb: FormBuilder, private categoryService: CategoryService, private productService: ProductService) { }

  ngOnInit(): void {

    this.addCategoryForm = this.fb.group({
      id: [null, Validators.required],
      name: [null, Validators.required],
    });
  }

  add() {
    const formData = new FormData();
    formData.append('id', this.addCategoryForm!.value.id);
    formData.append('name', this.addCategoryForm!.value.name);
    console.log(this.addCategoryForm!.value.id + " " + this.addCategoryForm!.value.name)
    console.log(formData);
    this.categoryService.post(formData).subscribe((info: Category) => {
      this.addCategoryForm?.reset();
      this.success = true;
      setTimeout(() => {
        this.success = undefined;
      }, 3000);
      console.log('merge!!')
    },
    (error: Error) => {
      console.log(error);
      this.addCategoryForm?.reset();
      this.success = false;
      setTimeout(() => {
        this.success = undefined;
      }, 3000);
      console.log("Nu merge");
    });

  }
}
