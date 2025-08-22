import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart-service';
import { ProductService } from '@shared/services/product-service';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './product-details.html',
})
export class ProductDetails implements OnInit {
  product = signal<IProduct | null>(null);
  cover = signal('');

  private productService = inject(ProductService);
  private cartService = inject(CartService);
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');

    if (!slug) {
      console.error(`Product not found with slug: ${slug}`);
      return;
    }

    this.productService.getProduct(slug).subscribe({
      next: (response) => {
        const product = Array.isArray(response) ? response[0] : response;

        if (!product) {
          console.error(`Product not found with id: ${slug}`);
          return;
        }

        this.product.set(product);

        if (product.images && product.images.length > 0) {
          this.cover.set(product.images[0]);
        }
      },
      error: (err) => {
        console.error('Error with product:', err);
      },
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
