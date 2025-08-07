import { CommonModule } from '@angular/common';
import { Component, inject, signal, OnInit } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { ICategory } from '@shared/models/category.model';
import { CategoriesService } from '@shared/services/categories-service';

@Component({
  selector: 'app-category-page',
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './category-page.html',
  styleUrl: './category-page.css',
})
export class CategoryPage implements OnInit {
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
