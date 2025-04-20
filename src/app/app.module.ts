import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

// Shared components
import { NavbarComponent } from './pages/landing/navbar/navbar.component';

// Page components
import { LandingComponent } from './pages/landing/landing/landing.component';
import { LoginComponent } from './pages/login/login/login.component';
import { SignupComponent } from './pages/signup/signup/signup.component';
import { HomeComponent } from './pages/home/home/home.component';

// Landing subcomponents
import { HeroComponent } from './pages/landing/hero/hero.component';
import { FeaturesComponent } from './pages/landing/features/features.component';
import { CtaComponent } from './pages/landing/cta/cta.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarLoggedComponent } from './shared/navbar-logged/navbar-logged.component';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileDetailsComponent } from './pages/profile/profile-details/profile-details.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

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
    FooterComponent,
    HomeComponent,
    NavbarLoggedComponent,
    SearchBarComponent,
    ProfileComponent,
    ProfileDetailsComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
