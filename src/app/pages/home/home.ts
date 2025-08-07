import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsGrid } from '@components/products-grid/products-grid';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ProductsGrid],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {}
