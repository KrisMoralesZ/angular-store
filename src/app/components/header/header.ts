import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';
import { CartService } from '@shared/services/cart-service';
import { ICategory } from '@shared/models/category.model';
import { CategoriesService } from '@shared/services/categories-service';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './header.html',
})
export class Header implements OnInit {
  hideSideMenu = signal(true);

  private cartService = inject(CartService);
  cart = this.cartService.cart;
  total = this.cartService.total;

  toggleSideMenu() {
    this.hideSideMenu.update((prevState) => !prevState);
  }

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
