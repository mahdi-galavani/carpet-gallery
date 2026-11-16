import { Component, HostListener } from '@angular/core';

@Component({ selector: 'app-header', templateUrl: './header.html', styleUrl: './header.scss' })
export class Header {
  menuOpen = false;
  scrolled = false;
  @HostListener('window:scroll') onScroll(): void { this.scrolled = window.scrollY > 40; }
}
