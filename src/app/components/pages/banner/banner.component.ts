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
            title: 'Ayudo a mujeres a crecer glúteos, lucir su abdomen y ganar confianza, SIN renunciar a sus gustos',
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