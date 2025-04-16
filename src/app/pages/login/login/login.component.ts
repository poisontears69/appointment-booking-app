import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.less'
})
export class LoginComponent {
  loginForm: FormGroup;

  // For spinner
  

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  isLoading = false;

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.isLoading = true; // Start loading animation
      
      console.log('Logging in...', this.loginForm.value);
      
      // Simulate API request (replace with actual HTTP service call)
      setTimeout(() => {
        console.log('Logged in!');
        this.isLoading = false; // Stop loading after the request is complete
      }, 2000);
    } else {
      this.loginForm.markAllAsTouched(); // Show validation errors
    }
  }
}
