import { Component } from '@angular/core';

@Component({
  selector: 'app-clinic',
  standalone: false,
  templateUrl: './clinic.component.html',
  styleUrl: './clinic.component.less'
})
export class ClinicComponent {
  clinics = [
    {
      photo: 'https://via.placeholder.com/150',
      name: 'HealthFirst Clinic',
      address: '123 Main Street, Cityville',
      landmark: 'Near Central Park',
      email: 'healthfirst@example.com',
      landline: '(123) 456-7890',
      mobile: '0917-123-4567',
      contactPerson: 'Dr. John Doe',
      schedule: [
        { day: 'Monday', time: '9:00 AM - 5:00 PM', type: 'Appointment' },
        { day: 'Wednesday', time: '9:00 AM - 5:00 PM', type: 'Walk-in' }
      ]
    },
    // Add more mock clinics if needed
  ];
}
