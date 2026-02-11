import { Component } from '@angular/core';
import {AuthSerivce} from '../../../../core/services/auth';
import {LoginRequest, UserProfile} from '../../../../core/models/auth.model';
import {UserService} from '../../../../core/services/user';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(private loginService: AuthSerivce,private userService :UserService) {
    this.doLogin();
  }

  doLogin() {
    const request: LoginRequest = {
      email: "email.com",
      password: "password1"
    };

    this.loginService.login(request);
  }
}
