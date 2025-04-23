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
import { HomeComponent } from './patient/component/home/home.component';

// Landing subcomponents
import { HeroComponent } from './pages/landing/hero/hero.component';
import { FeaturesComponent } from './pages/landing/features/features.component';
import { CtaComponent } from './pages/landing/cta/cta.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { DashboardComponent } from './layouts/patient-layout/dashboard.component';
import { PublicComponent } from './layouts/public-layout/public.component';
import { DoctorDashboardComponent } from './layouts/doctor-layout/doctor-dashboard.component';
import { AdminDashboardComponent } from './layouts/admin-layout/admin-dashboard.component';
import { FilesComponent } from './patient/component/files/files.component';
import { FilesSearchComponent } from './patient/component/files/files-search/files-search.component';
import { ProfileComponent } from './patient/component/profile/profile.component';
import { ProfileDetailsComponent } from './patient/component/profile/profile-details/profile-details.component';
import { DoctorsComponent } from './patient/component/doctors/doctors.component';
import { MessagesComponent } from './patient/component/messages/messages.component';
import { SearchDoctorComponent } from './patient/component/search-doctor/search-doctor.component';
import { DoctorSidebarComponent } from './shared/doctor-sidebar/doctor-sidebar.component';
import { CalendarComponent } from './doctor/components/calendar/calendar.component';
import { QueueComponent } from './doctor/components/queue/queue.component';
import { PatientsComponent } from './doctor/components/patients/patients.component';
import { DoctorProfileComponent } from './doctor/components/doctor-profile/doctor-profile.component';
import { ClinicComponent } from './doctor/components/clinic/clinic.component';
import { DoctorSettingsComponent } from './doctor/components/doctor-settings/doctor-settings.component';
import { DoctorHomeComponent } from './doctor/components/doctor-home/doctor-home.component';
import { NavbarLoggedComponent } from './shared/navbar-logged/navbar-logged.component';
import { DoctorLoginComponent } from './doctor-auth/doctor-login/doctor-login.component';
import { DoctorSignupComponent } from './doctor-auth/doctor-signup/doctor-signup.component';
import { MessagesComponentDoctor } from './doctor/components/messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    NavbarLoggedComponent,
    MessagesComponentDoctor,
    LoginComponent,
    SignupComponent,
    HeroComponent,
    FeaturesComponent,
    CtaComponent,
    FooterComponent,
    HomeComponent,
    SearchBarComponent,
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
    ProfileComponent,
    ProfileDetailsComponent,
    CalendarComponent,
    QueueComponent,
    PatientsComponent,
    DoctorProfileComponent,
    ClinicComponent,
    DoctorSettingsComponent,
    DoctorHomeComponent,
    DoctorLoginComponent,
    DoctorSignupComponent,
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
