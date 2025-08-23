import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { Product } from '@components/product/product';
import { ProductService } from '@shared/services/product-service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-related-products',
  imports: [CommonModule, Product],
  templateUrl: './related-products.html',
})
export class RelatedProducts {
  productService = inject(ProductService);
  slug = input.required<string>({ alias: 'slug' });

  relatedProducts = toSignal(
    toObservable(this.slug).pipe(
      switchMap((slug) => this.productService.getRelatedProducts(slug)),
    ),
    { initialValue: [] },
  );
}
