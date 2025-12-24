import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    bannerContent = [
        {
            subTitle: 'COACH FITNESS DE MUJERES',
            title: 'Aranza Mondragón',
            paragraphList: [
                {
                    text: "Transforma tu cuerpo y tu vida con entrenamiento personalizado"
                },
                {
                    text: "Crece glúteos, define tu abdomen y gana confianza",
                    isHighlight: false
                },
                {
                    text: "SIN renunciar a tus gustos",
                    isHighlight: true
                }
            ],
            buttonText: '¡Quiero mi transformación!',
            buttonLink: 'https://api.whatsapp.com/send/?phone=522294485585&text=Hola%20Aranza,%20me%20interesa%20tu%20asesoría%20personalizada'
        }
    ];
    bannerImage = [
        {
            img: 'assets/img/img2.png'
        }
    ];

}