import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Product } from '@components/product/product';
import { IProduct } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart-service';
import { ProductService } from '@shared/services/product-service';

@Component({
  selector: 'app-products-grid',
  imports: [CommonModule, Product],
  templateUrl: './products-grid.html',
  styleUrl: './products-grid.css',
})
export class ProductsGrid {
  products = signal<IProduct[]>([]);

  private cartService = inject(CartService);
  private productService = inject(ProductService);

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products.set(products);
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
