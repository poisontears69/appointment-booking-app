import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';

// Shared components
import { NavbarComponent } from './shared/navbar/navbar.component';

// Page components
import { LandingComponent } from './pages/landing/landing/landing.component';
import { LoginComponent } from './pages/login/login/login.component';
import { SignupComponent } from './pages/signup/signup/signup.component';

// Landing subcomponents
import { HeroComponent } from './pages/landing/hero/hero.component';
import { FeaturesComponent } from './pages/landing/features/features.component';
import { CtaComponent } from './pages/landing/cta/cta.component';
import { FooterComponent } from './pages/landing/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    LoginComponent,
    SignupComponent,
    HeroComponent,
    FeaturesComponent,
    CtaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
