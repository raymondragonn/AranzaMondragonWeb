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
            title: 'Ayudo a mujeres a recuperar su confianza, disminuyendo su abdomen y ganando firmeza en glúteos y piernas. SIN rutinas ni dietas extremas.',
            paragraphList: [
                {
                    text: "- Aranza Mondragón",
                    isHighlight: false
                }
            ],
            buttonText: '¡Quiero transformar mi cuerpo!',
            buttonLink: '#contact'
        }
    ];
    bannerImage = [
        {
            img: 'assets/img/img2.png'
        }
    ];

}