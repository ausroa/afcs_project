import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { DescriptionComponent } from './components/description/description.component';
import { CarouselItemDirective } from './directives/carousel-item.directive';
import { NgbdCarouselBasicComponent } from './components/ngbd-carousel-basic/ngbd-carousel-basic.component';
import { CarouselImgComponent } from './components/carousel/components/carousel-img/carousel-img.component';
import { TileButtonComponent } from './components/tile-button/tile-button.component';
import { SliderComponent } from './components/slider/slider.component';
import {SwiperModule} from 'angular2-useful-swiper';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomepageComponent,
    CarouselComponent,
    FooterComponent,
    DescriptionComponent,
    CarouselItemDirective,
    NgbdCarouselBasicComponent,
    CarouselImgComponent,
    TileButtonComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
