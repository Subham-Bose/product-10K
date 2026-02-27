import { Routes } from '@angular/router';
import { ProductComponent } from './features/product-component/product-component';
import { OrderComponent } from './features/order-component/order-component';

export const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'order', component: OrderComponent },
];
