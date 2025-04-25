import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing/landing.component';
import { PublicComponent } from './layouts/public-layout/public.component';
import { DoctorLoginComponent } from './doctor-auth/doctor-login/doctor-login.component';
import { DoctorSignupComponent } from './doctor-auth/doctor-signup/doctor-signup.component';
import { PhoneVerificationComponent } from './pages/phone-verification/phone-verification.component';
import { PatientLoginComponent } from './patient-auth/patient-login/patient-login.component';
import { PatientSignupComponent } from './patient-auth/patient-signup/patient-signup.component';


const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      { path: '', component: LandingComponent },
      { path: 'patient-login', component: PatientLoginComponent },
      { path: 'patient-signup', component: PatientSignupComponent },
      { path: 'doctor-login', component: DoctorLoginComponent},
      { path: 'doctor-signup', component: DoctorSignupComponent},
      { path: 'phone-verification', component: PhoneVerificationComponent}
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
