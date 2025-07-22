import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { IProduct } from '../../shared/models/product.model';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  hideSideMenu = signal(true);

  @Input({ required: true }) cart: IProduct[] = [];
  total = signal(0);

  toggleSideMenu() {
    this.hideSideMenu.update((prevState) => !prevState);
  }
}
