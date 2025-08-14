import { Component, input, output } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { IProduct } from '@shared/models/product.model';

@Component({
  selector: 'app-product',
  imports: [CurrencyPipe, RouterLinkWithHref],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  readonly product = input.required<IProduct>();

  readonly addToCart = output<IProduct>();

  addToCartHandler() {
    this.addToCart.emit(this.product());
  }
}
