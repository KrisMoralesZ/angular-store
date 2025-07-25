import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '@shared/services/cart-service';
import { ProductService } from '@shared/services/product-service';
import { Product } from '@components/product/product';
import { IProduct } from '@shared/models/product.model';

@Component({
  selector: 'app-home',
  imports: [CommonModule, Product],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  products = signal<IProduct[]>([]);

  private cartService = inject(CartService);
  private productService = inject(ProductService);

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products.set(products);
        console.log(products);
      },
      error: () => {
        console.error();
      },
    });
  }

  addToCart(product: IProduct) {
    this.cartService.addToCart(product);
  }
}
