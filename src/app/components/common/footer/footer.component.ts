import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    copyrightText: Text[] = [
        {
            text: new Date().getFullYear() + ' Aranza Mondragón. Todos los derechos reservados.'
        },
        {
            text: 'Desarrollado por Kodeo',
            link: 'https://www.instagram.com/bykodeo'
        }
    ]

}
class Text {
    text : string;
    link? : string;
}