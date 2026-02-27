import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ColumnItem } from '../../../models/column-item';

@Component({
  selector: 'app-column-manager',
  standalone: true,
  imports: [CommonModule, FormsModule, MatDialogModule, MatCheckboxModule, MatButtonModule],
  templateUrl: './column-manager.html',
  styleUrl: './column-manager.scss',
})
export class ColumnManager {
  columns: ColumnItem[] = [];

  constructor(
    public dialogRef: MatDialogRef<ColumnManager>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.columns = JSON.parse(JSON.stringify(data.columns));
  }

  onCancel(): void {
    this.dialogRef.close();
  }
  onSave(): void {
    this.dialogRef.close(this.columns);
  }
}
