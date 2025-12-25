import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-funfacts',
    templateUrl: './funfacts.component.html',
    styleUrls: ['./funfacts.component.scss']
})
export class FunfactsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    funFacts: Content[] = [
        {
            icon: 'las la-users',
            title: '200+',
            subTitle: 'Mujeres Transformadas'
        },
        {
            icon: 'las la-heart',
            title: '98%',
            subTitle: 'Satisfacción'
        },
        {
            icon: 'las la-trophy',
            title: '5+',
            subTitle: 'Años de Experiencia'
        },
        {
            icon: 'las la-star',
            title: '4.86/5',
            subTitle: 'Calificación Promedio'
        }
    ]

}
class Content {
    icon : string;
    title : string;
    subTitle : string;
}