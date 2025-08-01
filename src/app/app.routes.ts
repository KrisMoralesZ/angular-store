import { Routes } from '@angular/router';
import { Home } from '@pages/home/home';
import { About } from '@pages/about/about';
import { Checkout } from '@pages/checkout/checkout';
import { Categories } from '@pages/categories/categories';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'categories',
    component: Categories,
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
