import { computed, Injectable, signal } from '@angular/core';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = signal<IProduct[]>([]);
  total = computed(() => {
    const cart = this.cart();
    return cart.reduce((total, IProduct) => total + IProduct.price, 0);
  });

  addToCart(product: IProduct) {
    this.cart.update((state) => [...state, product]);
  }
}
