import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { authResponse } from '../models/auth-response.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isLoginMode = true;
  mode: string = '';
  message!: string;
  authObservable!: Observable<authResponse>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.router.navigate(['/auth/login']);
  }
  onSubmit(f: NgForm) {
    this.route.params.subscribe((params) => {
      this.mode = params['mode'];
    });

    if (this.mode == 'signup') {
      this.authObservable = this.auth.signup(f.value.email, f.value.password);
    } else if (this.mode == 'login') {
      console.log(f.value);
      this.authObservable = this.auth.login(f.value.email, f.value.password);
    }

    this.authObservable.subscribe(
      (resp) => {
        console.log(resp)
      },
      (errorMessage) => {
        this.message = errorMessage;
      }
    );
  }
  onSwitch() {
    this.route.params.subscribe((params) => {
      this.mode = params['mode'];
    });
    if (this.mode == 'login') {
      this.router.navigate(['/auth/signup'], {});
      this.isLoginMode = !this.isLoginMode;
    } else {
      this.router.navigate(['/auth/login'], {});
      this.isLoginMode = !this.isLoginMode;
    }
  }
}
