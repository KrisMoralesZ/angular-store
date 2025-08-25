import { Component } from '@angular/core';
import { ProductsGrid } from '@components/products-grid/products-grid';

@Component({
  selector: 'app-category-products-page',
  imports: [ProductsGrid],
  templateUrl: './category-products-page.html',
})
export class CategoryProductsPage {}
