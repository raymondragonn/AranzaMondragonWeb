import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-changes',
  standalone: true,
  imports: [NgFor],
  templateUrl: './changes.component.html',
  styleUrl: './changes.component.scss'
})
export class ChangesComponent {
  // Array de rutas de imágenes de cambios
  changeImages = [
    'assets/changes (1).png',
    'assets/changes (2).png',
    'assets/changes (3).png',
    'assets/changes (4).png',
    'assets/changes (5).png',
    'assets/changes (6).png',
    'assets/changes (7).png',
    'assets/changes (8).png',
    'assets/changes (9).png',
    'assets/changes (10).png',
    'assets/changes (11).png',
    'assets/changes (12).png',
    'assets/changes (13).png',
    'assets/changes (14).png',
    'assets/changes (15).png',
    'assets/changes (16).png',
    'assets/changes (17).png',
    'assets/changes (18).png',
    'assets/changes (19).png',
    'assets/changes (20).png',
    'assets/changes (21).png',
    'assets/changes (22).png',
    'assets/changes (23).png',
    'assets/changes (24).png',
    'assets/changes (25).png',
    'assets/changes.png'
  ];
}
