import { Component } from '@angular/core';
import { BaseTable } from '../../shared/components/base-table/base-table';

@Component({
  selector: 'app-order-component',
  standalone: true,
  imports: [BaseTable],
  templateUrl: './order-component.html',
  styleUrl: './order-component.scss',
})
export class OrderComponent {
  columnDefs = [
    { headerName: 'Order ID', field: 'orderId' },
    { headerName: 'Customer Name', field: 'customerName' },
    { headerName: 'Product', field: 'productName' },
    { headerName: 'Quantity', field: 'quantity' },
    { headerName: 'Total Price', field: 'totalPrice' },
    { headerName: 'Status', field: 'status' },
    { headerName: 'Order Date', field: 'orderDate' },
  ];

  orders = Array.from({ length: 60 }, (_, i) => {
    const products = [
      'Running Shoes',
      'Smart Watch',
      'Wireless Mouse',
      'Bluetooth Speaker',
      'Gaming Keyboard',
      'Laptop Stand',
      'USB-C Hub',
      'Noise Cancelling Headphones',
      'Backpack',
      'Fitness Band',
    ];

    const customers = [
      'Rahul Sharma',
      'Priya Verma',
      'Amit Patel',
      'Sneha Reddy',
      'Arjun Mehta',
      'Neha Kapoor',
      'Vikram Singh',
      'Pooja Nair',
      'Rohan Das',
      'Ananya Gupta',
    ];

    const statuses = ['Delivered', 'Shipped', 'Processing', 'Cancelled'];

    const randomProduct = products[i % products.length];
    const randomCustomer = customers[i % customers.length];
    const randomStatus = statuses[i % statuses.length];
    const quantity = (i % 5) + 1;
    const pricePerUnit = 1999 + (i % 10) * 500;

    return {
      orderId: `ORD-${10001 + i}`,
      customerName: randomCustomer,
      productName: randomProduct,
      quantity: quantity,
      totalPrice: quantity * pricePerUnit,
      status: randomStatus,
      orderDate: `2026-02-${(i % 28) + 1}`.padStart(10, '0'),
    };
  });
}
