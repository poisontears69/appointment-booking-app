import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing/landing.component';
import { LoginComponent } from './pages/login/login/login.component';
import { SignupComponent } from './pages/signup/signup/signup.component';
import { PublicComponent } from './layouts/public-layout/public.component';
import { DoctorLoginComponent } from './doctor-auth/doctor-login/doctor-login.component';
import { DoctorSignupComponent } from './doctor-auth/doctor-signup/doctor-signup.component';


const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      { path: '', component: LandingComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'doctor-login', component: DoctorLoginComponent},
      { path: 'doctor-signup', component: DoctorSignupComponent}
    ]
  },
  { path: 'patient', loadChildren: () => import('./patient/patient.module').then(m => m.PatientModule) },
  { path: 'doctor', loadChildren: () => import('./doctor/doctor.module').then(m => m.DoctorModule) },
  { path: '**', redirectTo: '' },
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
