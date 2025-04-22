import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientComponent } from './patient.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PatientComponent,
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    FormsModule
  ]
})
export class PatientModule { }
