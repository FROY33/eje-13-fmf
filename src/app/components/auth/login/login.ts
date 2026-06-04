import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginInterface } from '../../../models/login-interface';
import {form, FormField, required, schema } from '@angular/forms/signals';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login-service';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormField],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginModel = signal<LoginInterface>({
    username:'',
    password:''
  })
  
  loginForma = form(this.loginModel, (schemaPath)=>{
    required(schemaPath.username, {message: 'Usuario requerido'})
    required(schemaPath.password, {message:'Password requerido'})

  })
  constructor(private loginService:LoginService, private router:Router){

  }
  login(){
    this.loginService.login(this.loginModel()).subscribe({
      next:(value) => {
        this.router.navigate(['/layout/dash'])
      },
      error:(error) =>{
        alert('Usuario o password incorrectos')
      }
    })
  }
}
