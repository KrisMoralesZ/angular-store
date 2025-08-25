import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '@shared/models/product.model';
import { environment } from '@env/';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);

  getProducts() {
    return this.http.get<IProduct[]>(`${environment.apiUrl}/api/v1/products`);
  }

  getProduct(slug: string) {
    return this.http.get<IProduct[]>(
      `${environment.apiUrl}/api/v1/products/slug/${slug}`,
    );
  }

  getRelatedProducts(slug: string) {
    const url = `${environment.apiUrl}/api/v1/products/slug/${slug}/related`;
    return this.http.get<IProduct[]>(url);
  }

  getProductsByCategory(slug: string) {
    return this.http.get<IProduct[]>(
      `${environment.apiUrl}/api/v1/products/?categorySlug=${slug}`,
    );
  }
}
