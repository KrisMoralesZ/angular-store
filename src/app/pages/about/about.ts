import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
