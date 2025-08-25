import { CommonModule } from '@angular/common';
import { Component, computed, inject, input, signal } from '@angular/core';
import { toSignal, toObservable } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { Product } from '@components/product/product';
import { ProductService } from '@shared/services/product-service';

@Component({
  selector: 'app-related-products',
  imports: [CommonModule, Product],
  templateUrl: './related-products.html',
})
export class RelatedProducts {
  private productService = inject(ProductService);

  slug = input.required<string>({ alias: 'slug' });

  relatedProducts = toSignal(
    toObservable(this.slug).pipe(
      switchMap((slug: string) => this.productService.getRelatedProducts(slug)),
    ),
    { initialValue: [] },
  );

  currentIndex = signal(0);

  maxIndex = computed(() => {
    const count = this.relatedProducts()?.length ?? 0;
    return Math.max(0, count - 6);
  });

  next() {
    if (this.currentIndex() < this.maxIndex()) {
      this.currentIndex.update((i) => i + 1);
    }
  }

  prev() {
    if (this.currentIndex() > 0) {
      this.currentIndex.update((i) => i - 1);
    }
  }
}
