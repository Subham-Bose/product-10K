import { Routes } from '@angular/router';
import { ProductComponent } from './features/product-component/product-component';
import { OrderComponent } from './features/order-component/order-component';
import { ProductFormComponent } from './features/product-form/product-form.component';

export const routes: Routes = [
  { path: '', component: ProductFormComponent },
  { path: 'product', component: ProductComponent },
  { path: 'order', component: OrderComponent },
];
