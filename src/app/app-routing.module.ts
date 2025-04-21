import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing/landing.component';
import { LoginComponent } from './pages/login/login/login.component';
import { SignupComponent } from './pages/signup/signup/signup.component';
import { HomeComponent } from './pages/home/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileDetailsComponent } from './pages/profile/profile-details/profile-details.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { PublicComponent } from './layouts/public/public.component';
import { DoctorDashboardComponent } from './layouts/doctor-dashboard/doctor-dashboard.component';
import { AdminDashboardComponent } from './layouts/admin-dashboard/admin-dashboard.component';
import { FilesComponent } from './pages/files/files.component';
import { DoctorsComponent } from './pages/doctors/doctors.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { SearchDoctorComponent } from './pages/search-doctor/search-doctor.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { QueueComponent } from './pages/queue/queue.component';
import { PatientsComponent } from './pages/patients/patients.component';
import { DoctorProfileComponent } from './pages/doctor-profile/doctor-profile.component';
import { ClinicComponent } from './pages/clinic/clinic.component';
import { DoctorSettingsComponent } from './pages/doctor-settings/doctor-settings.component';
import { DoctorHomeComponent } from './pages/doctor-home/doctor-home.component';


const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      { path: '', component: LandingComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent }
    ]
  },
  {
    path: 'doctor',
    component: DoctorDashboardComponent,
    children: [
      { path:'dashboard', component : DoctorHomeComponent},
      { path:'calendar', component : CalendarComponent},
      { path:'queue', component : QueueComponent},
      { path:'patients', component : PatientsComponent},
      { path:'profile', component : DoctorProfileComponent},
      { path:'clinic', component : ClinicComponent},
      { path:'settings', component : DoctorSettingsComponent}
    ]
  },
  {
    path: 'patient',
    component: DashboardComponent, // Layout here
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'profile/details', component: ProfileDetailsComponent },
      { path: 'files', component: FilesComponent},
      { path: 'doctors', component : DoctorsComponent},
      { path: 'messages', component : MessagesComponent},
      { path: 'search-doctor', component : SearchDoctorComponent}
      // add more sidebar-based routes here
    ]
  },
  // {
  //   path: 'admin',
  //   component: AdminDashboardComponent,
  //   children: [
  //     { path: '', component: AdminHomeComponent },
  //     { path: 'users', component: UserManagementComponent },
  //     { path: 'analytics', component: AnalyticsComponent }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
