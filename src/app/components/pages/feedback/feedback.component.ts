import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

declare var $: any;

@Component({
    selector: 'app-feedback',
    templateUrl: './feedback.component.html',
    styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit, AfterViewInit, OnDestroy {

    private carouselInitialized = false;
    selectedFeedback: any = null;
    showModal = false;

    constructor() { }

    ngOnInit(): void {
    }
    
    openModal(feedback: any): void {
        this.selectedFeedback = feedback;
        this.showModal = true;
        document.body.style.overflow = 'hidden';
    }
    
    closeModal(): void {
        this.showModal = false;
        document.body.style.overflow = 'auto';
        setTimeout(() => {
            this.selectedFeedback = null;
        }, 300);
    }

    ngAfterViewInit(): void {
        // Esperar a que los scripts se carguen
        setTimeout(() => {
            this.initCarousel();
        }, 500);
    }

    ngOnDestroy(): void {
        if (this.carouselInitialized && typeof $ !== 'undefined' && $.fn.slick) {
            $('.feedback-slider').slick('unslick');
        }
    }

    initCarousel(): void {
        if (typeof $ !== 'undefined' && $.fn.slick && !this.carouselInitialized) {
            $('.feedback-slider').slick({
                slidesToShow: 2,
                slidesToScroll: 2,
                rows: 2,
                autoplay: false,
                arrows: true,
                dots: false,
                infinite: true,
                pauseOnHover: true,
                prevArrow: '<button type="button" class="slick-prev-feedback"><i class="las la-arrow-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next-feedback"><i class="las la-arrow-right"></i></button>',
                appendArrows: $('.feedback-arrows-container'),
                responsive: [
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            rows: 2,
                            arrows: true,
                            dots: false
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            rows: 1,
                            arrows: true,
                            dots: false
                        }
                    }
                ]
            });
            this.carouselInitialized = true;
        }
    }

    sectionTitle = [
        {
            title: 'Lo Que Dicen Mis Asesoradas',
            paragraphText: 'Testimonios reales de mujeres que han transformado su cuerpo y su vida.'
        }
    ]
    singleFeedback = [
        {
            paragraph: '"En 3 meses logré resultados increíbles. Aranza me enseñó a balancear mi alimentación sin restricciones. ¡Mi confianza cambió completamente!"',
            userImg: 'assets/img/testimonials (1).jpeg',
            userName: 'María González',
            userDesignation: 'Asesorada - 3 meses',
            transformationImg: 'assets/img/testimonials (1).jpeg'
        },
        {
            paragraph: '"Crecer glúteos siempre fue mi meta. Con el plan de Aranza finalmente vi los resultados que buscaba. Sin dietas extremas, solo disciplina."',
            userImg: 'assets/img/testimonials (2).jpeg',
            userName: 'Ana Martínez',
            userDesignation: 'Asesorada - 6 meses',
            transformationImg: 'assets/img/testimonials (2).jpeg'
        },
        {
            paragraph: '"Aranza es increíble. No solo transformé mi cuerpo, también mi mentalidad. Ahora me siento segura y confiada. ¡La mejor inversión!"',
            userImg: 'assets/img/testimonials (3).jpeg',
            userName: 'Laura Sánchez',
            userDesignation: 'Asesorada - 1 año',
            transformationImg: 'assets/img/testimonials (3).jpeg'
        },
        {
            paragraph: '"Pensé que nunca lograría definir mi abdomen. Aranza me demostró que sí era posible. Su acompañamiento hizo toda la diferencia."',
            userImg: 'assets/img/testimonials (4).jpeg',
            userName: 'Carmen López',
            userDesignation: 'Asesorada - 4 meses',
            transformationImg: 'assets/img/testimonials (4).jpeg'
        },
        {
            paragraph: '"El proceso fue increíble. En 5 meses logré definir mi abdomen y aumentar mi masa muscular. Aranza siempre está pendiente de mi progreso."',
            userImg: 'assets/img/testimonials (1).jpeg',
            userName: 'Patricia Ramírez',
            userDesignation: 'Asesorada - 5 meses',
            transformationImg: 'assets/img/testimonials (1).jpeg'
        },
        {
            paragraph: '"Gracias a Aranza aprendí que el fitness no es solo ejercicio, es un estilo de vida. Mis resultados superaron todas mis expectativas."',
            userImg: 'assets/img/testimonials (2).jpeg',
            userName: 'Sofía Torres',
            userDesignation: 'Asesorada - 8 meses',
            transformationImg: 'assets/img/testimonials (2).jpeg'
        },
        {
            paragraph: '"Me encanta cómo Aranza personaliza todo. Su plan se adaptó perfectamente a mi rutina y logré mis objetivos sin sacrificar mi vida social."',
            userImg: 'assets/img/testimonials (3).jpeg',
            userName: 'Daniela Morales',
            userDesignation: 'Asesorada - 7 meses',
            transformationImg: 'assets/img/testimonials (3).jpeg'
        },
        {
            paragraph: '"El acompañamiento de Aranza es excepcional. No solo me ayudó físicamente, también me motivó mentalmente. ¡Recomiendo 100%!"',
            userImg: 'assets/img/testimonials (4).jpeg',
            userName: 'Valeria Jiménez',
            userDesignation: 'Asesorada - 6 meses',
            transformationImg: 'assets/img/testimonials (4).jpeg'
        }
    ];

}