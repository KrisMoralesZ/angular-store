import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICategory } from '@shared/models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private http = inject(HttpClient);

  getAllCategories() {
    return this.http.get<ICategory[]>(
      'https://api.escuelajs.co/api/v1/categories',
    );
  }
}
