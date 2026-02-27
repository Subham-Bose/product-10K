import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EditProductDialogData } from '../../../models/edit-product-dialog-data';

@Component({
  selector: 'app-edit-dialog-component',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions
  ],
  templateUrl: './edit-dialog-component.html',
  styleUrl: './edit-dialog-component.scss',
})
export class EditDialogComponent {
  readonly dialogRef = inject(MatDialogRef<EditDialogComponent>);
  readonly data = inject<EditProductDialogData>(MAT_DIALOG_DATA);

  // Local editable copy
  sku = this.data.sku;
  productName = this.data.productName;
  price = this.data.price;
  quantityInStock = this.data.quantityInStock;

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    const updated = {
      sku: this.sku,
      productName: this.productName,
      price: this.price,
      quantityInStock: this.quantityInStock
    };

    console.log('Old Value:', this.data);
    console.log('New Value:', updated);

    this.dialogRef.close(updated);
  }
}
