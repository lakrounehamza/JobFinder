import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../../../../core/services/auth';
import {RegisterRequest} from '../../../../core/models/auth.model';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  registerForm :FormGroup;
  constructor(private buildForm : FormBuilder,private authService:AuthService) {
    this.registerForm =this.buildForm.group({
      nom :['',[Validators.required,Validators.minLength(3)]],
      prenom :['',[Validators.required,Validators.minLength(3)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(2)]]
    })
  }
  onSubmit(){
    if(this.registerForm.valid){
      const request: RegisterRequest = this.registerForm.value;
      this.authService.register(request);
    }
  }
}
