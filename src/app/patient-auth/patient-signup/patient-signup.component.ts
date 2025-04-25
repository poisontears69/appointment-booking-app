import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { PatientAuthService } from '../../services/patient-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-signup',
  standalone: false,
  templateUrl: './patient-signup.component.html',
  styleUrls: ['../auth.styles.less']
})
export class PatientSignupComponent {
  signupForm: FormGroup;
  errorMessage = '';
  loading = false;

  constructor(
    private fb: FormBuilder,
    private authService: PatientAuthService,
    private router: Router
  ) {
    this.signupForm = this.fb.group(
      {
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required, Validators.pattern(/^(\+63|0)?9\d{9}$/)]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', Validators.required]
      },
      { validators: this.passwordMatchValidator }
    );
  }

  private passwordMatchValidator(control: AbstractControl) {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  async onSubmit() {
    if (this.signupForm.invalid) return;

    this.loading = true;
    this.errorMessage = '';

    try {
      await this.authService.signUp(this.signupForm.value).toPromise();
      this.router.navigate(['/verify'], {
        state: { phone: this.signupForm.value.phone }
      });
    } catch (err: any) {
      this.errorMessage = this.getErrorMessage(err);
    } finally {
      this.loading = false;
    }
  }

  private getErrorMessage(error: any): string {
    switch (error?.code) {
      case 'auth/email-already-in-use':
        return 'Email already registered';
      case 'auth/invalid-email':
        return 'Invalid email format';
      default:
        return error?.message || 'Registration failed. Please try again.';
    }
  }
}
