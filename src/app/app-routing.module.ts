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
  // {
  //   path: '',
  //   component: DoctorDashboardComponent,
  //   children: [
  //     { path: 'home', component: HomeComponent },
  //     { path: 'profile', component: ProfileComponent },
  //     { path: 'doctors', component: DoctorsComponent },
  //     { path: 'messages', component: MessagesComponent },
  //     { path: 'files', component: FilesComponent }
  //   ]
  // },
  {
    path: '',
    component: DashboardComponent, // Layout here
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'profile/details', component: ProfileDetailsComponent },
      { path: 'files', component: FilesComponent},
      { path: 'doctors', component : DoctorsComponent},
      { path: 'messages', component : MessagesComponent}
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
