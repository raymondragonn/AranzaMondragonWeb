import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { PreloaderComponent } from './components/common/preloader/preloader.component';
import { PageComponent } from './components/pages/page.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { BannerComponent } from './components/pages/banner/banner.component';
import { FeaturesComponent } from './components/pages/features/features.component';
import { AboutComponent } from './components/pages/about/about.component';
import { FunfactsComponent } from './components/pages/funfacts/funfacts.component';
import { FeedbackComponent } from './components/pages/feedback/feedback.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { QuoteComponent } from './components/pages/quote/quote/quote.component';
import { VideoComponent } from './components/pages/video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PreloaderComponent,
    PageComponent,
    FooterComponent,
    BannerComponent,
    FeaturesComponent,
    AboutComponent,
    FunfactsComponent,
    FeedbackComponent,
    ContactComponent,
    QuoteComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
