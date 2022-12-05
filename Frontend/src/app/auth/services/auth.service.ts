import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { authResponse } from '../models/auth-response.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  _signupUrl: string =
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDntD4AyLHBuooMFRFR58oXKkzNGxEPJ60';
  _loginUrl: string =
    'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDntD4AyLHBuooMFRFR58oXKkzNGxEPJ60';
  constructor(private http: HttpClient) {}
  signup(email: string, password: string) {
    return this.http
      .post<authResponse>(this._signupUrl, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .pipe(catchError(this.handleError));
  }
  login(email: string, password: string) {
    return this.http.post<authResponse>(this._loginUrl, {
      email: email,
      password: password,
      retunSecureToken: true,
    }).pipe(
      catchError(this.handleError)
    );
  }
  private handleError(errorResponse: HttpErrorResponse) {
    let errorMessage = 'An unknown error occured!';
    if (!errorResponse.error || !errorResponse.error.error) {
      return throwError(errorMessage);
    }
    switch (errorResponse.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already!';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = "Account doesn't exist"
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'Password is not correct.Try another password!'
        break;
      case 'USER_DISABLED':
        errorMessage = 'Account is disabled by the admin.'
        break;
    }
    return throwError(errorMessage);
  }
}
