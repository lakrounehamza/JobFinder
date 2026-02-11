import { Component } from '@angular/core';
import { AuthService } from '../../../../core/services/auth';
import { LoginRequest } from '../../../../core/models/auth.model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
  standalone: true
})
export class Login {
  loginForm: FormGroup;

  constructor(private loginService: AuthService, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }
  onSubmit() {
    console.log("login submit")
    if (this.loginForm.valid) {
      const loginRequest: LoginRequest = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      }
      this.loginService.login(loginRequest);
    }
  }
}
