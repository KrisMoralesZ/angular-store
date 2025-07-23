import { Injectable, signal } from '@angular/core';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = signal<IProduct[]>([]);

  addToCart(product: IProduct) {
    this.cart.update((state) => [...state, product]);
  }
}
