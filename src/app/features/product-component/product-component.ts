import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ColDef, ValueFormatterParams } from 'ag-grid-community';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BaseTable } from '../../shared/components/base-table/base-table';
import { ProductService } from '../../services/product-service';
import { Product } from '../../models/product';
import { EditDialogComponent } from '../dialog-component/edit-dialog-component/edit-dialog-component';

@Component({
  selector: 'app-product-component',
  standalone: true,
  imports: [BaseTable, MatDialogModule],
  templateUrl: './product-component.html',
  styleUrl: './product-component.scss',
})
export class ProductComponent implements OnInit {
  products: Product[] = [];

  public columnDefs: ColDef<Product>[] = [
    { field: 'sku', headerName: 'SKU' },
    { field: 'productName', headerName: 'Product Name' },
    { field: 'categoryName', headerName: 'Category' },
    {
      field: 'price',
      headerName: 'Price',
      valueFormatter: (params: ValueFormatterParams) => `$${params.value.toFixed(2)}`,
    },
    { field: 'quantityInStock', headerName: 'Stock' },
    {
      field: 'isActive',
      headerName: 'Status',
      cellRenderer: (params: any) => (params.value ? 'Active' : 'Inactive'),
    },
    { field: 'warehouseName', headerName: 'Warehouse' },
    {
      headerName: 'Actions',
      width: 120,
      sortable: false,
      filter: false,
      cellRenderer: (params: any) => {
        const container = document.createElement('div');
        container.innerHTML = `
      <span class="material-icons edit-icon" style="cursor:pointer;margin-right:8px;">edit</span>
    `;

        const editBtn = container.querySelector('.edit-icon');

        editBtn?.addEventListener('click', () => {
          this.onEdit(params.data);
        });

        return container;
      },
    },
  ];

  constructor(
    private productService: ProductService,
    private dialog: MatDialog,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data,
        this.cd.detectChanges();
      },
      error: (err) => console.error('Error fetching products', err),
    });
  }

  onEdit(row: Product) {
    const dialogData = {
      sku: row.sku,
      productName: row.productName,
      price: row.price,
      quantityInStock: row.quantityInStock,
    };

    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '480px',
      data: dialogData,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadProducts();
      }
    });
  }
}
