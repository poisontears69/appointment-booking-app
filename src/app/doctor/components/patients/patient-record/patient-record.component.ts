import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-patient-record',
  standalone: false,
  templateUrl: './patient-record.component.html',
  styleUrl: './patient-record.component.less'
})
export class PatientRecordComponent {
  patient = {
    name: 'Jane Doe',
    birthdate: '1990-05-15',
    age: 33,
    gender: 'Female',
    photo: 'https://via.placeholder.com/48'
  };

  tabs = [
    'Patient Profile',
    'Vitals',
    "Doctor's Notes",
    'Health Records',
    'Queue Options'
  ];

  activeTab = 'Patient Profile';

  patientProfileForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.patientProfileForm = this.fb.group({
      firstName: ['Jane', Validators.required],
      lastName: ['Doe', Validators.required],
      birthdate: ['1990-05-15', Validators.required],
      gender: ['Female', Validators.required],
      contact: ['09123456789', Validators.required],
      email: ['janedoe@example.com', [Validators.required, Validators.email]],
    });
  }

  selectTab(tab: string) {
    this.activeTab = tab;
  }

  savePatientProfile() {
    if (this.patientProfileForm.valid) {
      const updatedPatient = this.patientProfileForm.value;
      console.log('Saved Patient Profile:', updatedPatient);
      // You can now send this data to your backend
    }
  }

  printRecord() {
    window.print();
  }

  closeRecord() {
    // Example: navigate back or close modal
    console.log('Record closed');
  }

  vitalsView = 'table';
selectedRange = 'week';

vitalTypes = ['Blood Pressure', 'Heart Rate', 'Respiratory Rate', 'Temperature', 'Oxygen Saturation'];
vitalDates = ['Apr 15', 'Apr 16', 'Apr 17', 'Apr 18', 'Apr 19'];

setVitalsView(view: string) {
  this.vitalsView = view;
}

addVitals() {
  console.log('Add vitals clicked');
  // Open modal or form to input vitals
}

editVitals() {
  console.log('Edit vitals clicked');
  // Toggle editable rows or open edit modal
}
}
