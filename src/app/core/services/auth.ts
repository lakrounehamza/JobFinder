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
    return this.http.post<UserProfile>("http://localhost:3000/users", request);
  }

  login(resquest : LoginRequest){
    this.userService.getAllUser().subscribe(
      {
        next: (res:UserProfile[])=>{
          res.forEach(user=>{
            if(user.email==resquest.email && user.password==resquest.password)
              localStorage.setItem("user-auth",JSON.stringify(user));
          });
    }
      }
    )
  }
}
