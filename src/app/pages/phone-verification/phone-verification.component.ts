import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-phone-verification',
  standalone: false,
  templateUrl: './phone-verification.component.html',
  styleUrl: './phone-verification.component.less'
})
export class PhoneVerificationComponent {
  verificationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.verificationForm = this.fb.group({
      code: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]] // Assuming 6-digit OTP
    });
  }

  onVerify() {
    if (this.verificationForm.valid) {
      const code = this.verificationForm.value.code;
      console.log('Verifying with code:', code);
      // Call backend service to verify
    }
  }
}
