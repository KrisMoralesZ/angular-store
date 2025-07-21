import { Component } from '@angular/core';
import { Product } from '../../components/product/product';
import { Header } from '../../components/header/header';

@Component({
  selector: 'app-home',
  imports: [Product, Header],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
