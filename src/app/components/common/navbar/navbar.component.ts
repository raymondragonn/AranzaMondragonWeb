import { Component, OnInit } from '@angular/core';
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
    }

    recallJsFuntions() {
        this.routerSubscription = this.router.events
        .pipe(filter(event => event instanceof NavigationEnd || event instanceof NavigationCancel))
        .subscribe(event => {
            this.location = this.router.url;
        });
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