import { Component, HostListener, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  menuAbierto = false;
  esMovil = false;

  ngOnInit() {
    this.comprobarMovil();
  }

  @HostListener('window:resize')
  onResize() {
    this.comprobarMovil();
    if (!this.esMovil) {
      this.menuAbierto = false;
    }
  }

  private comprobarMovil() {
    if (typeof window !== 'undefined') {
      this.esMovil = window.innerWidth <= 768;
    }
  }

  cerrarMenu() {
    if (this.esMovil) {
      this.menuAbierto = false;
    }
  }
}
