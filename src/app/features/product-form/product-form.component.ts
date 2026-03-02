import { CommonModule, JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { email, form, FormField, required, validate } from '@angular/forms/signals';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';

export interface Product {
  sku: string;
  productName: string;
  translatedName: string;
  price: number;
  warehouseName: string;
  warehouseAddress: string;
  warehouseEmail: string;
}

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    JsonPipe,
  ],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
})
export class ProductFormComponent {
  productForm = new FormGroup({
    sku: new FormControl('', [Validators.required]),
    productName: new FormControl('', [Validators.required]),
    translatedName: new FormControl(''),
    price: new FormControl(0, [Validators.required, Validators.min(1)]),
    warehouseName: new FormControl(''),
    warehouseAddress: new FormControl(''),
    warehouseEmail: new FormControl('', [Validators.required, Validators.email]),
  });

  onSubmit() {
    console.log(this.productForm.value);
  }

  // productModel = signal<Product>({
  //   sku: '',
  //   productName: '',
  //   translatedName: '',
  //   price: 0,
  //   warehouseName: '',
  //   warehouseAddress: '',
  //   warehouseEmail: ''
  // });

  // productForm = form(this.productModel, (schema) => {
  //   required(schema.sku, { message: 'Enter SKU value' });
  //   required(schema.price, { message: 'Price is missing' });
  //   required(schema.productName, { message: 'Product Name is required' });
  //   required(schema.warehouseEmail, { message: 'Email is required' });
  //   email(schema.warehouseEmail, { message: 'Email is not valid' });
  // });
}
