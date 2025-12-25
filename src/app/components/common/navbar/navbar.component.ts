import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationCancel, NavigationEnd } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    providers: [
        Location, {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ]
})
export class NavbarComponent implements OnInit {

    location: any;
    routerSubscription: any;

    constructor(private router: Router) {
    }

    ngOnInit(){
        this.recallJsFuntions();
        this.setupSmoothScroll();
    }

    recallJsFuntions() {
        this.routerSubscription = this.router.events
        .pipe(filter(event => event instanceof NavigationEnd || event instanceof NavigationCancel))
        .subscribe(event => {
            this.location = this.router.url;
        });
    }

    setupSmoothScroll() {
        // Método de respaldo para enlaces que no usen el método handleNavClick
    }

    handleNavClick(event: Event, elementId: string) {
        event.preventDefault();
        if (elementId) {
            this.smoothScrollTo(elementId);
        } else {
            // Si no hay ID, hacer scroll al inicio
            this.smoothScrollTo('home');
        }
    }

    smoothScrollTo(elementId: string) {
        const element = document.getElementById(elementId);
        if (element) {
            const navbarHeight = 80; // Altura aproximada del navbar
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

            // Animación suave y rápida con easing mejorado
            const startPosition = window.pageYOffset;
            const distance = offsetPosition - startPosition;
            const duration = 500; // Duración en milisegundos (más rápida y suave)
            let start: number | null = null;

            // Función de easing mejorada para una animación más suave
            const easeInOutCubic = (t: number): number => {
                return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
            };

            const animation = (currentTime: number) => {
                if (start === null) start = currentTime;
                const timeElapsed = currentTime - start;
                const progress = Math.min(timeElapsed / duration, 1);
                const ease = easeInOutCubic(progress);

                window.scrollTo(0, startPosition + distance * ease);

                if (timeElapsed < duration) {
                    requestAnimationFrame(animation);
                }
            };

            requestAnimationFrame(animation);
        }
    }
    
    navItems = [
        {
            id: '',
            title: 'Inicio',
            isLink: false
        },
        {
            id: 'contact',
            title: 'Asesoría',
            isLink: false
        },
        {
            id: 'feedback',
            title: 'Testimonios',
            isLink: false
        },
        {
            id: 'features',
            title: 'PLAN',
            isLink: false
        },
        {
            id: 'https://www.instagram.com/araamondragon/',
            title: 'Instagram',
            isLink: true
        }
    ];

}