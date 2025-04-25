import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientAuthService } from '../../services/patient-auth.service';

@Component({
  selector: 'app-patient-login',
  standalone: false,
  templateUrl: './patient-login.component.html',
  styleUrls: ['./../auth.styles.less']
})
export class PatientLoginComponent {
  loginForm: FormGroup;
  isLoading = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: PatientAuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  // onSubmit() {
  //   if (this.loginForm.invalid) return;

  //   this.isLoading = true;
  //   this.errorMessage = '';

  //   this.authService.login(this.loginForm.value).subscribe({
  //     next: () => this.router.navigate(['/patient/dashboard']),
  //     error: (err) => {
  //       this.errorMessage = err.error.message || 'Login failed';
  //       this.isLoading = false;
  //     }
  //   });
  // }
}