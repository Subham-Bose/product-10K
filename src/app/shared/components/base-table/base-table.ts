import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridApi, GridReadyEvent, themeQuartz } from 'ag-grid-community';
import { ColumnItem } from '../../../models/column-item';
import { ColumnManager } from '../column-manager/column-manager';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-base-table',
  standalone: true,
  imports: [CommonModule, AgGridAngular, MatDialogModule, MatButtonModule, MatIconModule],
  templateUrl: './base-table.html',
  styleUrl: './base-table.scss',
})
export class BaseTable implements OnChanges {
  @Input() rowData: any[] | null = [];
  @Input() columnDefs: ColDef[] = [];
  @Output() gridReady = new EventEmitter<GridReadyEvent>();

  private gridApi!: GridApi;

  theme = themeQuartz;

  public defaultColDef: ColDef = {
    flex: 1,
    minWidth: 100,
    sortable: true,
    filter: true,
    resizable: true,
  };

  constructor(private dialog: MatDialog) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['rowData'] && this.gridApi && !changes['rowData'].firstChange) {
      this.gridApi.setGridOption('rowData', this.rowData);
    }
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;

    if (this.rowData) {
      this.gridApi.setGridOption('rowData', this.rowData);
    }

    setTimeout(() => this.gridApi.sizeColumnsToFit(), 0);
  }

  openColumnManager() {
    const allColumns = this.gridApi.getColumns();
    const columnData: ColumnItem[] =
      allColumns?.map((col) => ({
        colId: col.getColId(),
        headerName: col.getColDef().headerName || col.getColId(),
        isVisible: col.isVisible(),
      })) || [];

    const dialogRef = this.dialog.open(ColumnManager, {
      width: '300px',
      data: { columns: columnData },
    });

    dialogRef.afterClosed().subscribe((result: ColumnItem[] | undefined) => {
      if (result) {
        result.forEach((col) => {
          this.gridApi.setColumnsVisible([col.colId], col.isVisible);
        });
        setTimeout(() => this.gridApi.sizeColumnsToFit(), 100);
      }
    });
  }
}
