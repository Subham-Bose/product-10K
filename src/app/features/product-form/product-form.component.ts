import { CommonModule, JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { email, form, FormField, required } from '@angular/forms/signals'; // Ensure these imports match your installed signal-forms version
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
    FormsModule,
    FormField,
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
  productModel = signal<Product>({
    sku: '',
    productName: '',
    translatedName: '',
    price: 0,
    warehouseName: '',
    warehouseAddress: '',
    warehouseEmail: ''
  });

  productForm = form(this.productModel, (schema) => {
    required(schema.sku, { message: 'Enter SKU value' });
    required(schema.price, { message: 'Price is missing' });
    required(schema.productName, { message: 'Product Name is required' });
    required(schema.warehouseEmail, { message: 'Email is required' });
    email(schema.warehouseEmail, { message: 'Email is not valid' });
  });
}