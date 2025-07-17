import { Component } from '@angular/core';
import { Product } from '../../components/product/product';

@Component({
  selector: 'app-home',
  imports: [Product],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
