import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICategory } from '@shared/models/category.model';
import { CategoriesService } from '@shared/services/categories-service';

@Component({
  selector: 'app-categories',
  imports: [CommonModule],
  templateUrl: './categories.html',
  styleUrl: './categories.css',
})
export class Categories {
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
