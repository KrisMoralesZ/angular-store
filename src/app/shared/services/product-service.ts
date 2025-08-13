import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '@shared/models/product.model';
import { environment } from '@env/*';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);

  getProducts() {
    return this.http.get<IProduct[]>(`${environment.apiUrl}/api/v1/products`);
  }

  getProduct(id: number) {
    return this.http.get<IProduct[]>(
      `https://api.escuelajs.co/api/v1/products/${id}`,
      // `${environment.apiUrl}/api/v1/products/${id}`,
    );
  }

  getProductsByCategory(slug: string) {
    return this.http.get<IProduct[]>(
      `${environment.apiUrl}/api/v1/products/?categorySlug=${slug}`,
    );
  }
}
