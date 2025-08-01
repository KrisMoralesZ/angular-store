import { Component } from '@angular/core';
import { Header } from '@components/header/header';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet],
  templateUrl: './app.html',
})
export class App {
  protected title = 'store';
}
