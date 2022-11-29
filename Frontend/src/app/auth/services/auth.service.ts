import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url: string = '';
  constructor(private http: HttpClient) {}
  login() {}
  signup(email: string, password: string) {
    return this.http
      .post(this.url, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .pipe(
        catchError((errorResponse) => {
          let errorMessage = 'An unknown error occured!';
          if (!errorResponse.error || !errorResponse.error.error) {
            return throwError(errorMessage)
          }
          switch (errorResponse.error.error.message) {
            case 'EMAIL_EXISTS':
              errorMessage = 'This email exists already!';
          }
          return throwError(errorMessage)
        })
      );
  }
}
