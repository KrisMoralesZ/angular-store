import { Component, inject, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../shared/services/cart-service';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  hideSideMenu = signal(true);

  private cartService = inject(CartService);
  cart = this.cartService.cart;

  total = signal(0);

  toggleSideMenu() {
    this.hideSideMenu.update((prevState) => !prevState);
  }
}
