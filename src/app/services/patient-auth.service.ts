import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PatientAuthService {
  private apiUrl = 'http://localhost:8080/api/auth'; // Spring Boot endpoint

  constructor(private http: HttpClient) {}

  signUp(userData: {
    name: string;
    email: string;
    phone: string;
    password: string;
  }) {
    return this.http.post(`${this.apiUrl}/signup`, userData).pipe(
      catchError((error) => {
        return throwError(() => this.getErrorMessage(error));
      })
    );
  }

  private getErrorMessage(error: any): string {
    // Map Spring Boot error responses
    if (error.error?.message) {
      return error.error.message;
    }
    return 'Registration failed. Please try again.';
  }
}