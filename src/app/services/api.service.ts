import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl; // Set to "http://localhost:8080/api" in environment.ts

  constructor(private http: HttpClient) {}

  // User registration
  register(userData: {
    username: string;
    mobileNumber: string;
    password: string;
  }) {
    return this.http.post(`${this.apiUrl}/auth/register`, userData);
  }

  // OTP verification
  verifyOTP(mobileNumber: string, otp: string) {
    return this.http.post(`${this.apiUrl}/auth/verify`, { mobileNumber, otp });
  }

  // Test connection
  testConnection() {
    return this.http.get(`${this.apiUrl}/test`);
  }
}