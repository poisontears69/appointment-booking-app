import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-doctor-login',
  standalone: false,
  templateUrl: './doctor-login.component.html',
  styleUrl: '.././auth-form.less'
})
export class DoctorLoginComponent {
  loginForm!: FormGroup;
  isLoading = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) return;

    this.isLoading = true;

    const { username, password } = this.loginForm.value;

    // Simulate auth call
    setTimeout(() => {
      console.log('Logging in doctor:', username, password);
      this.isLoading = false;
    }, 1000);
  }
}
