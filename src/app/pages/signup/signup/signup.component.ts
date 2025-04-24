import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl, FormGroup } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.less'] // Changed to styleUrls (array)
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup; // Definite assignment assertion

  isLoading = false;
  errorMessage = '';
  showPassword = false;
  showConfirmPassword = false;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.signupForm = this.fb.group({
      username: ['', [
        Validators.required,
        Validators.minLength(3),
        this.noWhitespaceValidator
      ]],
      phone: ['', [
        Validators.required,
        Validators.pattern(/^(\+?\d{1,3}[- ]?)?\d{10}$/)
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/)
      ]],
      confirmPassword: ['', Validators.required]
    }, { 
      validators: this.passwordMatchValidator 
    });
  }

  // Custom validators
  passwordMatchValidator(control: AbstractControl) {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  noWhitespaceValidator(control: AbstractControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    return !isWhitespace ? null : { whitespace: true };
  }

  // Toggle password visibility
  togglePasswordVisibility(field: 'password' | 'confirmPassword') {
    if (field === 'password') {
      this.showPassword = !this.showPassword;
    } else {
      this.showConfirmPassword = !this.showConfirmPassword;
    }
  }

  onSubmit() {
    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    // Sanitize inputs
    const formValue = {
      username: this.signupForm.value.username.trim(),
      mobileNumber: this.signupForm.value.phone.replace(/\D/g, ''),
      password: this.signupForm.value.password
    };

    this.apiService.register(formValue).subscribe({
      next: () => {
        this.router.navigate(['/verify'], { 
          state: { phone: formValue.mobileNumber } 
        });
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Registration failed. Please try again.';
        if (err.status === 409) {
          this.signupForm.get('username')?.setErrors({ duplicate: true });
        }
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }
}