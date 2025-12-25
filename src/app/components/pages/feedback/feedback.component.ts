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
            paragraph: '"Me ha gustado que han pasado 11 semanas, y me siento muy muy bien, a gusto con mi cuerpo y feliz con todo el <strong>progreso</strong> que he hecho en este poco tiempo y que no había podido lograr en tantos años, y eso ha sido gracias a ti, con el <strong>acompañamiento</strong>."',
            userName: 'Bianca',
            userDesignation: '23 años',
            transformationImg: 'assets/img/cambios/1.png'
        },
        {
            paragraph: '"Estoy MUY agradecida contigo Ara pero sobre todo MUY contenta con los <strong>resultados no solo físicos</strong>, también con la <strong>disciplina</strong>."',
            userName: 'Ana',
            userDesignation: '34 años',
            transformationImg: 'assets/img/cambios/2.png'
        },
        {
            paragraph: '"Me siento <strong>empoderada</strong>, porque después de las primeras 12 semanas veo <strong>resultados que nunca había visto en años</strong>. Gracias a Ara!!"',
            userName: 'Meli',
            userDesignation: '29 años',
            transformationImg: 'assets/img/cambios/3.png'
        },
        {
            paragraph: '"Me gusta el <strong>seguimiento uno a uno</strong> y que siempre estás dispuesta a ayudar o <strong>adaptarte a cada persona</strong>."',
            userName: 'Nelly',
            userDesignation: '36 años',
            transformationImg: 'assets/img/cambios/4.png'
        },
        {
            paragraph: '"Estoy feliz porque por fin vi la bascula descender, pero sobretodo <strong>mi relación con la comida ha mejorado</strong>."',
            userName: 'Andy',
            userDesignation: '26 años',
            transformationImg: 'assets/img/cambios/5.png'
        },
        {
            paragraph: '"Creía que por mi tipo de cuerpo era imposible ver mis <strong>gluteos y piernas</strong> así. Estoy muy agradecida por el programa."',
            userName: 'Vi',
            userDesignation: '36 años',
            transformationImg: 'assets/img/cambios/6.png'
        },
        {
            paragraph: '"Más de un excelente entrenamiento y dieta, es la primera vez que puedo tocar la <strong>parte emocional</strong> con un coach. Gracias por todo Ara!"',
            userName: 'Mir',
            userDesignation: '27 años',
            transformationImg: 'assets/img/cambios/7.png'
        },
        {
            paragraph: '"Gracias por el <strong>seguimiento y los ajustes</strong>. Nunca me habia sentido tan <strong>fuerte, disciplinada y firme</strong> mi cuerpo como en estos meses."',
            userName: 'Abril',
            userDesignation: '26 años',
            transformationImg: 'assets/img/cambios/8.png'
        },
        {
            paragraph: '"Me gusta tooodo, hasta ahora con el tiempo que llevo me he sentido muy bien físicamente, veo <strong>cambios reales</strong> y he podido entender muchos procesos, también en salud, me siento más ágil, <strong>sin malestares</strong>!!"',
            userName: 'Ada',
            userDesignation: '31 años',
            transformationImg: 'assets/img/cambios/9.png'
        },
        {
            paragraph: '"Mi cuerpo cambió mucho, a pesar de mi poco tiempo y me siento con <strong>más energía</strong>."',
            userName: 'Ale',
            userDesignation: '28 años',
            transformationImg: 'assets/img/cambios/10.png'
        },
        {
            paragraph: '"Tu <strong>apoyo incondicional</strong> y <strong>programa personalizado</strong>, es la razón por la que sigo aquí luego de ya dos años."',
            userName: 'Mir',
            userDesignation: '27 años',
            transformationImg: 'assets/img/cambios/11.png'
        },
        {
            paragraph: '"Mi cuerpo más <strong>definido</strong>, he visto cambio en <strong>fuerza en mis músculos</strong> y satisfecha por qué cumplí al 90%."',
            userName: 'Meli',
            userDesignation: '29 años',
            transformationImg: 'assets/img/cambios/12.png'
        },
        {
            paragraph: '"En estas 8 semanas veo que <strong>mi ropa me queda mas holgada</strong>. Me ha gustado mucho el <strong>seguimiento</strong>."',
            userName: 'Clariza',
            userDesignation: '33 años',
            transformationImg: 'assets/img/cambios/13.png'
        },
        {
            paragraph: '"Me siento mejor con todo, me gusta más mirarme al espejo, que ropa que quería usar antes que no me quedaba <strong>ya me queda bien</strong>, me siento <strong>fuerte y con más energía</strong>. Me gusta que realmente estés ahí, y que brindes <strong>alternativas y la disposición ante los cambios</strong>."',
            userName: 'Yolanda',
            userDesignation: '27 años',
            transformationImg: 'assets/img/cambios/14.png'
        },
        {
            paragraph: '"Me gusta mucho como voy, lo noto en mi ropa y como me siento. Antes sentía que me presionaba muchísimo para no ver casi resultados, ahora que llevo <strong>mi ritmo</strong> me siento bien y feliz. he avanzado <strong>sin matarme</strong>, todo cuadra."',
            userName: 'Haly',
            userDesignation: '36 años',
            transformationImg: 'assets/img/cambios/15.png'
        },
        {
            paragraph: '"Ha sido una gran elección, el <strong>seguimiento adecuado sin presiones</strong>, y se adaptó perfectamente a mi <strong>trabajo demandante</strong>."',
            userName: 'Tete',
            userDesignation: '30 años',
            transformationImg: 'assets/img/cambios/16.png'
        }
    ];

}