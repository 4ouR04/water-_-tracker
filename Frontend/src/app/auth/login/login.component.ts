import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isLoginMode = true;
  mode: string = '';
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.router.navigate(['/auth/login']);
  }
  onSubmit(f: NgForm) {
    console.log(f.value);
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
