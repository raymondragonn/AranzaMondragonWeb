import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-features',
    templateUrl: './features.component.html',
    styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

    expandedFeatures: { [key: number]: boolean } = {};

    constructor() { }

    ngOnInit(): void {
    }

    toggleFeature(index: number): void {
        this.expandedFeatures[index] = !this.expandedFeatures[index];
    }

    isFeatureExpanded(index: number): boolean {
        return this.expandedFeatures[index] || false;
    }

    sectionTitle: sectionTitleContent[] = [
        {
            title: "THE CONFIDENCE METHOD",
            paragraphText: 'Es un método comprobado y totalmente personalizado para mujeres de 25 a 45 años que HOY estén listas para:',
            listItems: [
                'Recuperar su confianza, energía y autoestima.',
                'Disminuir grasa abdominal sin dietas extremas.',
                'Ponerse la ropa sin sentirse limitadas.'
            ]
        }
    ]
    singleBookFeatures: FeaturesContent[] = [
        {
            icon: 'las la-user-md',
            title: 'Personalizado 100%',
            paragraph: '<strong>Entrenamiento y alimentación</strong> diseñado específicamente para ti. Sin <strong>dietas genéricas</strong> ni rutinas que no funcionan.'
        },
        {
            icon: 'las la-comments',
            title: 'Seguimiento constante',
            paragraph: '<strong>Revisiones constantes</strong> de adaptación y adherencia, <strong>corrección de técnica</strong> y ajustes conforme tu caso.'
        },
        {
            icon: 'las la-chart-line',
            title: 'Resultados Reales y Medibles',
            paragraph: '<strong>Transformaciones comprobadas</strong> con seguimiento de progreso y <strong>métricas</strong> que demuestran tu evolución.'
        },
        {
            icon: 'las la-heart',
            title: 'Psicoeducación y Acompañamiento',
            paragraph: '<strong>Cápsulas, sesiones y herramientas</strong> para mejorar tu relación con la <strong>comida, cuerpo, estrés</strong>, etc.'
        },
        {
            icon: 'las la-smile',
            title: 'Sin Renunciar a Tu Vida',
            paragraph: 'Balancea tu alimentación <strong>sin prohibiciones ni culpas</strong>. Disfruta tus comidas y <strong>entrena sin extremos</strong> mientras progresas.'
        },
        {
            icon: 'las la-trophy',
            title: 'Aumento de Confianza',
            paragraph: 'Experimenta un <strong>aumento real</strong> en tu autoestima y confianza que se refleja en todas las áreas de tu vida.'
        }
    ]

}
class sectionTitleContent {
    title : string;
    paragraphText : string;
    listItems?: string[];
}
class FeaturesContent {
    icon : string;
    title : string;
    paragraph : string;
}