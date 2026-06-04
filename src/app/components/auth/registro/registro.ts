import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';     
import { RegisterService } from '../../../services/register-service';
import { RegistroInterface } from '../../../models/registro-interface';
import { form, FormField, maxLength, minLength, pattern, required, schema } from '@angular/forms/signals';
import { errorContext } from 'rxjs/internal/util/errorContext';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  imports: [RouterLink, FormField],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})

export class Registro {
  //modelo para registro
  registerModel= signal<RegistroInterface>({
    nombre:'',
    username:'',
    password:''

  })
  //validacion del usename
  //1- requerido
  //2- minimo 3 maximo 50
  // solo letras numeros y guion bajo
  
  //validacion para nombre
  //requerido
  //minimo 2 maximo 100

  //validacion password
  //requerida
  //min 8
  // mayuscula, minuscula y un numero


  registerForm= form(this.registerModel, (schemaPath)=>{
    //nombre completo
    required(schemaPath.nombre, {message:'El nombre es requerido'})
    minLength(schemaPath.nombre,2,{message:'El nombre debe tener al menos 2 caracteres'})
    maxLength(schemaPath.nombre,100,{message:'El nombre es muy extenso'})

    //username
    required(schemaPath.username,{message:'El nombre de usuario es requerido '})
    minLength(schemaPath.username,3,{message:'El nombre de usuario debe tener al menos 3 caracteres'})
    maxLength(schemaPath.username,50,{message:'El nombre de usuario es muy largo'})
    pattern(schemaPath.username,/^[a-zA-Z0-9_]+$/,{message:'El nombre de usuario solo puede contener, letras, numeros y guion bajo'})

    //password
    required(schemaPath.password,{message:'El password es requerido'})
    minLength(schemaPath.password,8, {message:'Se necesitan al menos 8 caracteres para el password'})
    pattern(schemaPath.password,/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/,{message:'El passwor debe de contener al menos una mayuscula, una minuscula y un numero'})
  })
  
  constructor(private registerService:RegisterService, private router:Router){
  }
  
  registro(){
    //probar el servicio de registro
    this.registerService.registrarse(this.registerModel()).subscribe({
      next:(respuesta)=>{
        alert("Usuario registrado")
        console.log(respuesta)
        this.router.navigate(['/login']);

      },
      error:(error)=>{
        alert("Ocurrio un error: " + error.error.message)
        console.log(error)
      }
    })
  }  
}
