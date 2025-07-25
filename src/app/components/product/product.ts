import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '@shared/models/product.model';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  @Input({ required: true }) product!: IProduct;

  @Output() addToCart = new EventEmitter();

  addToCartHandler() {
    this.addToCart.emit(this.product);
    console.log(
      'Clicked in add to cart button nad added the' + this.product.title
    );
  }
}
