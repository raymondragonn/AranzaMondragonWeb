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
            paragraphText: 'Únete a cientos de mujeres que ya están logrando sus objetivos. Con mi acompañamiento personalizado, podrás crecer glúteos, lucir tu abdomen y ganar confianza sin renunciar a tus gustos. Cada plan está diseñado para adaptarse a tu estilo de vida.'
        }
    ]
    singleBookFeatures: FeaturesContent[] = [
        {
            icon: 'las la-user-md',
            title: 'Plan 100% Personalizado',
            paragraph: 'Rutinas y planes nutricionales diseñados específicamente para ti. Sin dietas genéricas ni rutinas que no funcionan.'
        },
        {
            icon: 'las la-comments',
            title: 'Acompañamiento 24/7',
            paragraph: 'Seguimiento constante, corrección de técnica y ajustes en tiempo real. Estoy contigo en cada paso.'
        },
        {
            icon: 'las la-chart-line',
            title: 'Resultados Reales y Medibles',
            paragraph: 'Transformaciones comprobadas con seguimiento de progreso y métricas que demuestran tu evolución.'
        },
        {
            icon: 'las la-heart',
            title: 'Enfoque en Glúteos y Abdomen',
            paragraph: 'Técnicas probadas y ejercicios específicos para crecimiento de glúteos y definición abdominal.'
        },
        {
            icon: 'las la-smile',
            title: 'Sin Renunciar a Tus Gustos',
            paragraph: 'Balancea tu alimentación sin prohibiciones extremas. Disfruta tus comidas favoritas mientras logras tus objetivos.'
        },
        {
            icon: 'las la-trophy',
            title: 'Aumento de Confianza',
            paragraph: 'Experimenta un aumento real en tu autoestima y confianza que se refleja en todas las áreas de tu vida.'
        }
    ]

}
class sectionTitleContent {
    title : string;
    paragraphText : string;
}
class FeaturesContent {
    icon : string;
    title : string;
    paragraph : string;
}