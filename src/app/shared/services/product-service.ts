import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '@shared/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);

  getProducts() {
    return this.http.get<IProduct[]>(
      'https://api.escuelajs.co/api/v1/products'
    );
  }

  getProductsByCategory(slug: string) {
    return this.http.get<IProduct[]>(
      `https://api.escuelajs.co/api/v1/products/?categorySlug=${slug}`
    );
  }
}
