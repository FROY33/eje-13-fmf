import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';     
import { RegisterService } from '../../../services/register-service';
import { RegistroInterface } from '../../../models/registro-interface';
import { form } from '@angular/forms/signals';


@Component({
  selector: 'app-registro',
  imports: [RouterLink],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})

export class Registro {
  //modelo para registro
  registerModel= signal<RegistroInterface>({
    nombre:'jose2',
    username:'jj@gmail.com',
    password:'123456'

  })
  registerForm= form(this.registerModel)
  constructor(private registerService:RegisterService){

  }
  registro(){
    //probar el servicio de registro
    this.registerService.registrarse(this.registerModel()).subscribe((respuesta)=>{
      //obtener datos de errores
      console.log(respuesta);

    })
  }  
}
