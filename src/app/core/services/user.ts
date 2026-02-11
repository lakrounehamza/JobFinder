import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserProfile} from '../models/auth.model';
import {map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http:HttpClient) {
  }
  getAllUser(){
    return this.http.get<UserProfile[]>("http://localhost:3000/users");
  }
  getUserByEmail(email: string): Observable<UserProfile | null> {
    return this.getAllUser().pipe(
      map((users: UserProfile[]) => {
        return users.find(user => user.email === email) || null;
      })
    );
  }
}
