import { Component, Input } from '@angular/core';
import { IProduct } from '../../shared/models/product.model';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  @Input({ required: true }) product!: IProduct;
  img = 'https://picsum.photos/640/640?r=' + Math.random();
}
