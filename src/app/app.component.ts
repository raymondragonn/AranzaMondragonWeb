import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { filter } from 'rxjs/operators';
declare let $: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [
        Location, {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ]
})
export class AppComponent implements OnInit {
    location: any;
    routerSubscription: any;

    constructor(private router: Router) {
    }

    ngOnInit(){
        this.recallJsFuntions();
        this.protectContent();
    }

    recallJsFuntions() {
        this.router.events
        .subscribe((event) => {
            if ( event instanceof NavigationStart ) {
                $('.preloader').fadeIn('slow');
            }
        });
        this.routerSubscription = this.router.events
        .pipe(filter(event => event instanceof NavigationEnd || event instanceof NavigationCancel))
        .subscribe(event => {
            $.getScript('../assets/js/main.js');
            $('.preloader').fadeOut('slow');
            this.location = this.router.url;
            if (!(event instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }

    // Protección de contenido
    protectContent(): void {
        // Deshabilitar click derecho
        document.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            return false;
        });

        // Deshabilitar arrastrar imágenes
        document.addEventListener('dragstart', (e) => {
            e.preventDefault();
            return false;
        });

        // Deshabilitar selección de texto
        document.addEventListener('selectstart', (e) => {
            e.preventDefault();
            return false;
        });
    }

    // Deshabilitar atajos de teclado
    @HostListener('document:keydown', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent): void {
        // Deshabilitar F12 (DevTools)
        if (event.key === 'F12') {
            event.preventDefault();
            return;
        }

        // Deshabilitar Ctrl+Shift+I (Inspeccionar)
        if (event.ctrlKey && event.shiftKey && event.key === 'I') {
            event.preventDefault();
            return;
        }

        // Deshabilitar Ctrl+Shift+J (Console)
        if (event.ctrlKey && event.shiftKey && event.key === 'J') {
            event.preventDefault();
            return;
        }

        // Deshabilitar Ctrl+Shift+C (Inspeccionar elemento)
        if (event.ctrlKey && event.shiftKey && event.key === 'C') {
            event.preventDefault();
            return;
        }

        // Deshabilitar Ctrl+U (Ver código fuente)
        if (event.ctrlKey && event.key === 'u') {
            event.preventDefault();
            return;
        }

        // Deshabilitar Ctrl+S (Guardar página)
        if (event.ctrlKey && event.key === 's') {
            event.preventDefault();
            return;
        }

        // Deshabilitar Ctrl+C (Copiar) - opcional, puede afectar usabilidad
        if (event.ctrlKey && event.key === 'c') {
            event.preventDefault();
            return;
        }

        // Deshabilitar Ctrl+V (Pegar)
        if (event.ctrlKey && event.key === 'v') {
            event.preventDefault();
            return;
        }

        // Deshabilitar Ctrl+A (Seleccionar todo)
        if (event.ctrlKey && event.key === 'a') {
            event.preventDefault();
            return;
        }
    }
}
