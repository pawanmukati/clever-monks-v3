import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
// import { NgxCaptchaModule } from 'ngx-captcha';


import { RECAPTCHA_SETTINGS, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings } from 'ng-recaptcha';
import { SwiperModule } from 'swiper/angular';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactFormComponent } from './Components/contact-form/contact-form.component';
import { ServicePageComponent } from './Components/service-page/service-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BannerCarouselComponent } from './Components/banner-carousel/banner-carousel.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MobilePageComponent } from './Components/mobile-page/mobile-page.component';
import { PortfolioPageComponent } from './Components/portfolio-page/portfolio-page.component';
import { OurProfileCarouselComponent } from './Components/our-profile-carousel/our-profile-carousel.component';
import { CompanyPageComponent } from './Components/company-page/company-page.component';

import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactFormComponent,
    ServicePageComponent,
    BannerCarouselComponent,
    MobilePageComponent,
    PortfolioPageComponent,
    OurProfileCarouselComponent,
    CompanyPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    SwiperModule,
    RouterModule,

    // NgxCaptchaModule





  ],
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: environment.recaptcha.siteKey,
      } as RecaptchaSettings,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
