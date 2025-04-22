import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientComponent } from './patient.component';
import { ProfileComponent } from './component/profile/profile.component';
import { ProfileDetailsComponent } from './component/profile/profile-details/profile-details.component';
import { NavbarLoggedComponent } from '../shared/navbar-logged/navbar-logged.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PatientComponent,
    ProfileComponent,
    NavbarLoggedComponent,
    ProfileDetailsComponent,
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    FormsModule
  ]
})
export class PatientModule { }
