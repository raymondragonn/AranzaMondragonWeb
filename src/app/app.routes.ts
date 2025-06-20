import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ChangesComponent } from './changes/changes.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'testimonials', component: TestimonialsComponent},
  { path: 'changes', component: ChangesComponent}
];
