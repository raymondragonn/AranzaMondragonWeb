import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [NgFor],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  // Array de rutas de imágenes de testimonios
  testimonialImages = [
    'assets/testimonials (1).jpeg',
    'assets/testimonials (2).jpeg',
    'assets/testimonials (3).jpeg',
    'assets/testimonials (4).jpeg',
    'assets/testimonials (5).jpeg',
    'assets/testimonials (6).jpeg',
    'assets/testimonials (7).jpeg',
    'assets/testimonials (8).jpeg',
    'assets/testimonials (9).jpeg',
    'assets/testimonials (10).jpeg',
    'assets/testimonials (11).jpeg',
    'assets/testimonials (12).jpeg',
    'assets/testimonials (13).jpeg',
    'assets/testimonials (14).jpeg',
    'assets/testimonials (15).jpeg',
    'assets/testimonials (16).jpeg',
    'assets/testimonials (17).jpeg',
    'assets/testimonials (18).jpeg',
    'assets/testimonials (19).jpeg',
    'assets/testimonials (20).jpeg',
    'assets/testimonials (21).jpeg',
    'assets/testimonials (22).jpeg',
    'assets/testimonials (23).jpeg',
    'assets/testimonials (24).jpeg',
    'assets/testimonials (25).jpeg',
    'assets/testimonials (26).jpeg',
    'assets/testimonials (27).jpeg',
    'assets/testimonials (28).jpeg',
    'assets/testimonials (29).jpeg',
    'assets/testimonials (30).jpeg',
    'assets/testimonials (31).jpeg',
    'assets/testimonials (32).jpeg',
    'assets/testimonials (33).jpeg',
    'assets/testimonials (34).jpeg',
    'assets/testimonials (35).jpeg',
    'assets/testimonials.jpeg'
  ];

  // Devuelve las imágenes correspondientes a cada columna
  getImagesForColumn(col: number): string[] {
    return this.testimonialImages.filter((_, idx) => idx % 4 === col);
  }

  // Devuelve todas las imágenes para la galería responsiva
  getAllImages(): string[] {
    return this.testimonialImages;
  }
}
