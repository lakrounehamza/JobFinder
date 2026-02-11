import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {validate} from '@angular/forms/signals';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  registerForm :FormGroup;
  onSubmit(){

  }
  constructor(private buildForm : FormBuilder) {
    this.registerForm =this.buildForm.group({
      nom :['',[Validators.required,Validators.min(3)]],
      prenom :['',[Validators.required,Validators.min(3)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.min(8)]]
    })
  }
}
