import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    showSuccess = false;

    constructor() { }

    ngOnInit(): void {
    }

    sectionTitle: sectionTitleContent[] = [
        {
            title: 'Agenda tu sesión de valoración',
            paragraphText: 'Selecciona el día y hora que mejor se adapte a tu agenda para tu sesión personalizada.'
        }
    ]
    contactImage: Image[] = [
        {
            img: 'assets/img/book-contact.png'
        }
    ]

    getWhatsAppUrl(name: string, subject: string, message: string): string {
        const phone = '522294485585';
        const intro = 'Hola Aranza, me interesa tu asesoría personalizada.';
        const nameLine = name ? `\nNombre: ${name}` : '';
        const subjectLine = subject ? `\nMotivo: ${subject}` : '';
        const messageLine = message ? `\nMensaje: ${message}` : '';

        const text = `${intro}${nameLine}${subjectLine}${messageLine}`;

        return `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(text)}`;
    }

    onSendWhatsApp(name: string, subject: string, message: string): void {
        this.showSuccess = true;
        setTimeout(() => {
            this.showSuccess = false;
        }, 10000);
    }

    closeSuccess(): void {
        this.showSuccess = false;
    }

}
class sectionTitleContent {
    title : string;
    paragraphText : string;
}
class Image {
    img : string;
}
