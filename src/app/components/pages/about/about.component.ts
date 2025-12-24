import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    aboutImage: Image[] = [
        {
            img: 'assets/img/ABOUT_ARANZA.jpeg'
        }
    ]
    aboutContent = [
        {
            title: 'Conoce a tu Entrenadora',
            paragraphList: [
                {
                    paragraph: "Soy Aranza Mondragón, entrenadora personal certificada especializada en transformación física para mujeres. Mi pasión por el fitness comenzó durante la pandemia, cuando descubrí el poder transformador del entrenamiento y la nutrición balanceada.",
                },
                {
                    paragraph: "Hoy, me dedico a ayudar a mujeres a alcanzar sus objetivos físicos de manera sostenible, sin dietas extremas ni rutinas imposibles. Mi enfoque se centra en el crecimiento de glúteos, definición abdominal y, sobre todo, en aumentar la confianza y autoestima de mis asesoradas.",
                }
            ],
            featuresList: [
                {
                    itemIcon: "las la-check",
                    item: "Entrenamiento Personalizado"
                },
                {
                    itemIcon: "las la-check",
                    item: "Plan Nutricional"
                },
                {
                    itemIcon: "las la-check",
                    item: "Acompañamiento Constante"
                },
                {
                    itemIcon: "las la-check",
                    item: "Resultados Garantizados"
                },
                {
                    itemIcon: "las la-check",
                    item: "Enfoque en Glúteos y Abdomen"
                },
                {
                    itemIcon: "las la-check",
                    item: "Sin Renunciar a Tus Gustos"
                },
                {
                    itemIcon: "las la-check",
                    item: "Aumento de Confianza"
                }
            ]
        }
    ];

}
class Image {
    img : string;
}