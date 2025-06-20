import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { NgFor, isPlatformBrowser, NgClass } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-intro-changes',
  standalone: true,
  imports: [NgFor, NgClass, RouterModule],
  templateUrl: './intro-changes.component.html',
  styleUrl: './intro-changes.component.scss'
})
export class IntroChangesComponent implements OnInit, OnDestroy {
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
  currentIndex = 0;
  intervalId: ReturnType<typeof setInterval> | null = null;
  autoSlideInterval = 4000; // ms
  visibleCount = 4;
  private isBrowser: boolean;
  private resizeHandler: (() => void) | null = null;
  slideActive = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private router: Router) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    console.log('Constructor: isBrowser =', this.isBrowser);
  }

  ngOnInit() {
    console.log('ngOnInit: isBrowser =', this.isBrowser);
    if (this.isBrowser) {
      console.log('Dentro de if (isBrowser) en ngOnInit');
      this.updateVisibleCount();
      this.startAutoSlide();
      this.resizeHandler = () => {
        this.updateVisibleCount();
        this.restartAutoSlide();
      };
      window.addEventListener('resize', this.resizeHandler);
    }
  }

  ngOnDestroy() {
    if (this.isBrowser) {
      this.stopAutoSlide();
      if (this.resizeHandler) {
        window.removeEventListener('resize', this.resizeHandler);
      }
    }
  }

  startAutoSlide() {
    console.log('startAutoSlide');
    this.stopAutoSlide();
    this.intervalId = setInterval(() => {
      this.next();
    }, this.autoSlideInterval);
  }

  stopAutoSlide() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  restartAutoSlide() {
    this.stopAutoSlide();
    this.startAutoSlide();
  }

  next() {
    this.currentIndex = (this.currentIndex + this.visibleCount) % this.changeImages.length;
    if (this.isBrowser) {
      this.restartAutoSlide();
    }
  }

  prev() {
    this.currentIndex = (this.currentIndex - this.visibleCount + this.changeImages.length) % this.changeImages.length;
    if (this.isBrowser) {
      this.restartAutoSlide();
    }
  }

  get visibleImages(): string[] {
    const images = [];
    for (let i = 0; i < this.visibleCount; i++) {
      images.push(this.changeImages[(this.currentIndex + i) % this.changeImages.length]);
    }
    return images;
  }

  updateVisibleCount() {
    if (!this.isBrowser || typeof window === 'undefined') return;
    const width = window.innerWidth;
    if (width < 700) {
      this.visibleCount = 1;
    } else if (width < 1100) {
      this.visibleCount = 2;
    } else {
      this.visibleCount = 4;
    }
    // Ajustar el índice para que no se salga del rango
    this.currentIndex = this.currentIndex - (this.currentIndex % this.visibleCount);
  }

  goToChanges() {
    console.log('Intentando navegar a /changes');
    this.router.navigate(['/changes']);
  }
}
