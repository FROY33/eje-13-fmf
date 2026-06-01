import { Injectable } from '@angular/core';
import { RegistroInterface } from '../models/registro-interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class RegisterService {
  urlBase = 'https://examen-ii-aipg-1.onrender.com'
  constructor(private httpClient:HttpClient){

  }
  registrarse(usuario:RegistroInterface):Observable<any>{
    //metodo para registrarnos
    return this.httpClient.post(
      this.urlBase+'/auth/register',
      usuario, 
      {timeout:10000})

  }
}
