import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import {AuthRoutingModule} from './auth-routing.module';
import { LoginComponent } from './login/login.component'
import { FormsModule } from '@angular/forms';
import {AuthService} from './services/auth.service'
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  providers: [AuthService],
  declarations: [
    AuthComponent,
    LoginComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ]
})
export class AuthModule { }
