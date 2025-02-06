// src/app/routes.ts

import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routeConfig: Routes = [
  {
    path: '',
    component: ProductListComponent,
    title: 'Home page',
  },
  {
    path: 'products/:productId',
    component: ProductDetailsComponent,
    title: 'Product details',
  }
];

export default routeConfig;
