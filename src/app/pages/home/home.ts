import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '@shared/services/cart-service';
import { ProductService } from '@shared/services/product-service';
import { IProduct } from '@shared/models/product.model';
import { ProductsGrid } from '@components/products-grid/products-grid';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ProductsGrid],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {}
