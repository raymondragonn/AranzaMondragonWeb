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
    showModal = false;
    originalParagraphs = [
        "Soy <strong>coach nutricional y de entrenamiento</strong> especializada en mujeres y <strong>psicóloga</strong>, pero poco más... Soy una mujer que también ha pasado por muchas etapas de inseguridad en su cuerpo. Especialmente en la adolescencia, no recuerdo momentos donde me sintiera cómoda con mi cuerpo.",
        "Hasta que a mis 16 años, durante la pandemia, comencé a hacer del ejercicio y me encantó. Me enfoqué tanto en \"verme tonificada\" que caí en el extremo:",
        "• Ejercitarme diario y sentir culpa si faltaba",
        "• No comer comida de mi abuela",
        "• Comer ensaladas en vez de lo que había de comer porque tenían menos calorías y era más \"saludable\". Incluso dejando de probar pastel en mi cumpleaños.",
        "Y a pesar de ello, estaba dispuesta a seguir así hasta que... <strong>perdí mi periodo</strong>.",
        "Todo cambió. Comencé a investigar y conocer más, y con el paso del tiempo, empecé a enamorarme del entrenamiento y la nutrición PERO con un enfoque ahora orientado a lo <strong>sostenible, real y efectivo</strong>.",
        "Y un día me pregunté: ¿Por qué no dedicarme a mi pasión ayudando a otras mujeres que busquen recuperar su comodidad sin que tengan que cometer los mismos errores?",
        "Y así creé <strong>The Confidence Method</strong>, un programa online dedicado a ayudar personalmente a mujeres a lograrlo <strong>sin pasar horas interminables en el gym</strong> y <strong>comiendo rico y flexible</strong>."
    ];

    openModal(): void {
        this.showModal = true;
    }

    closeModal(): void {
        this.showModal = false;
    }

    aboutContent = [
        {
            title: 'Sobre mí',
            paragraphList: [
                {
                    paragraph: "Soy <strong>coach nutricional y de entrenamiento</strong> especializada en mujeres y <strong>psicóloga</strong>. Pero más allá de mis credenciales, soy una mujer que también ha pasado por inseguridades corporales y errores extremos en el fitness.",
                },
                {
                    paragraph: "He vivido los extremos: desde ejercitarme diario con culpa y dejar de comer pastel en mi cumpleaños, hasta <strong>perder mi periodo</strong>. Hoy, he encontrado un enfoque <strong>sostenible y real</strong> que quiero compartir contigo.",
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