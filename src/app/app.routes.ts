import { Routes } from '@angular/router';
import { Home } from '@pages/home/home';
import { About } from '@pages/about/about';
import { Checkout } from '@pages/checkout/checkout';
import { CategoryPage } from '@pages/category-page/category-page';
import { CategoryProductsPage } from '@pages/category-products-page/category-products-page';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'categories',
    component: CategoryPage,
  },
  {
    path: 'categories/:slug',
    component: CategoryProductsPage,
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: 'checkout',
    component: Checkout,
  },
];
