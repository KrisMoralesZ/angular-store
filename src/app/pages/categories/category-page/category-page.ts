import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ICategory } from '@shared/models/category.model';
import { CategoriesService } from '@shared/services/categories-service';

@Component({
  selector: 'app-category-page',
  imports: [CommonModule],
  templateUrl: './category-page.html',
  styleUrl: './category-page.css',
})
export class CategoryPage {
  categories = signal<ICategory[]>([]);

  private categoriesService = inject(CategoriesService);

  ngOnInit() {
    this.categoriesService.getAllCategories().subscribe({
      next: (categories) => {
        this.categories.set(categories);
      },
      error: () => {
        console.error();
      },
    });
  }
}
