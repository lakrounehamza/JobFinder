import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserProfile} from '../models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http:HttpClient) {
  }
  getAllUser(){
    return this.http.get<UserProfile[]>("http://localhost:3000/users");
  }
}
