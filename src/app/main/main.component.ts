import { Component } from '@angular/core';
import { IntroAboutComponent } from './intro-about/intro-about.component';
import { IntroChangesComponent } from './intro-changes/intro-changes.component';
import { IntroTestimonialsComponent } from './intro-testimonials/intro-testimonials.component';
import { CtaComponent } from './cta/cta.component';

@Component({
  selector: 'app-main',
  imports: [IntroAboutComponent, IntroChangesComponent, IntroTestimonialsComponent, CtaComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
