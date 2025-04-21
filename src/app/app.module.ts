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
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { PublicComponent } from './layouts/public/public.component';
import { DoctorDashboardComponent } from './layouts/doctor-dashboard/doctor-dashboard.component';
import { AdminDashboardComponent } from './layouts/admin-dashboard/admin-dashboard.component';
import { FilesComponent } from './pages/files/files.component';
import { FilesSearchComponent } from './pages/files/files-search/files-search.component';
import { DoctorsComponent } from './pages/doctors/doctors.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { SearchDoctorComponent } from './pages/search-doctor/search-doctor.component';
import { DoctorSidebarComponent } from './shared/doctor-sidebar/doctor-sidebar.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { QueueComponent } from './pages/queue/queue.component';
import { PatientsComponent } from './pages/patients/patients.component';
import { DoctorProfileComponent } from './pages/doctor-profile/doctor-profile.component';
import { ClinicComponent } from './pages/clinic/clinic.component';
import { DoctorSettingsComponent } from './pages/doctor-settings/doctor-settings.component';
import { DoctorHomeComponent } from './pages/doctor-home/doctor-home.component';

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
    SidebarComponent,
    DashboardComponent,
    PublicComponent,
    DoctorDashboardComponent,
    AdminDashboardComponent,
    FilesComponent,
    FilesSearchComponent,
    DoctorsComponent,
    MessagesComponent,
    SearchDoctorComponent,
    DoctorSidebarComponent,
    CalendarComponent,
    QueueComponent,
    PatientsComponent,
    DoctorProfileComponent,
    ClinicComponent,
    DoctorSettingsComponent,
    DoctorHomeComponent,
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
