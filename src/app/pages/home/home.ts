import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from './../../shared/services/cart-service';
import { Product } from '../../components/product/product';
import { IProduct } from '../../shared/models/product.model';
import { Header } from '../../components/header/header';

@Component({
  selector: 'app-home',
  imports: [CommonModule, Product, Header],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  products = signal<IProduct[]>([]);

  private cartService = inject(CartService);

  constructor() {
    const initProducts: IProduct[] = [
      {
        id: Date.now(),
        title: 'Pro 1',
        price: 100,
        image: 'https://picsum.photos/640/640?r=23',
        created_at: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Pro 2',
        price: 100,
        image: 'https://picsum.photos/640/640?r=12',
        created_at: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Pro 3',
        price: 100,
        image: 'https://picsum.photos/640/640?r=1212',
        created_at: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Pro 1',
        price: 100,
        image: 'https://picsum.photos/640/640?r=23',
        created_at: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Pro 2',
        price: 100,
        image: 'https://picsum.photos/640/640?r=12',
        created_at: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Pro 3',
        price: 100,
        image: 'https://picsum.photos/640/640?r=1212',
        created_at: new Date().toISOString(),
      },
    ];
    this.products.set(initProducts);
  }

  addToCart(product: IProduct) {
    this.cartService.addToCart(product);
  }
}
