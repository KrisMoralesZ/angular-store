import { CommonModule } from '@angular/common';
import { Component, inject, signal, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
export class ProductsGrid implements OnInit {
  products = signal<IProduct[]>([]);

  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private route = inject(ActivatedRoute);

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug');

      if (slug) {
        this.productService.getProductsByCategory(slug).subscribe({
          next: (products) => {
            this.products.set(products);
            console.log(products);
          },
          error: () => {
            console.error();
          },
        });
      } else {
        this.productService.getProducts().subscribe({
          next: (products) => {
            this.products.set(products);
            console.log('Not slug', products);
          },
          error: () => {
            console.error();
          },
        });
      }
    });
  }

  addToCart(product: IProduct) {
    this.cartService.addToCart(product);
  }
}
