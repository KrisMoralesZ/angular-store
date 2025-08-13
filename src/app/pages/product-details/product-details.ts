import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart-service';
import { ProductService } from '@shared/services/product-service';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails implements OnInit {
  product = signal<IProduct | null>(null);
  cover = signal('');

  private productService = inject(ProductService);
  private cartService = inject(CartService);
  private route = inject(ActivatedRoute);

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('products');

      this.productService.getProduct(id).subscribe({
        next: (product) => {
          this.product.set(product);
          if (product?.images.length > 0) {
            this.cover.set(product?.images[0]);
          }
          console.log(product);
        },
      });
    });
  }

  changeCover(newImg: string) {
    this.cover.set(newImg);
  }

  addToCart() {
    const product = this.product();
    if (product) {
      this.cartService.addToCart(product);
    }
  }
}
