import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginRequest, LoginResponse, RegisterRequest, UserProfile} from '../models/auth.model';
import {Observable} from 'rxjs';
import {UserService} from './user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient,private  userService:UserService) {
  }

  register(request: RegisterRequest) {
    this.userService.getUserByEmail(request.email).subscribe({
      next: (user: UserProfile | null) => {
        if (!user) {
          this.http.post<UserProfile>("http://localhost:3000/users", request)
            .subscribe({
              next: (response) => {
                console.log("register fini", response);
              },
              error: (err) => {
                console.error("erreur ", err);
              }
            });

        } else {
          console.log("dejat user exest");
        }
      }
    })
  }

  login(request: LoginRequest): void {
    this.userService.getUserByEmail(request.email).subscribe({
      next: (user: UserProfile | null) => {
        if (!user) {
          console.log("User not found");
          return;
        }

        if (user.password === request.password) {
          localStorage.setItem("user-auth", JSON.stringify(user));
          console.log("Login success");
        } else {
          console.log("Incorrect password");
        }
      },
      error: (err) => {
        console.error("Error during login", err);
      }
    });
  }
}
