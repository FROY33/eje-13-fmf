import { Injectable } from '@angular/core';
import { LoginInterface } from '../models/login-interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  urlBase='https://examen-ii-aipg-1.onrender.com'
  constructor(private httpClient:HttpClient){

  }
  login(usuario:LoginInterface):Observable<any>{
    return this.httpClient.post(
      this.urlBase+'/auth/login',
      usuario,
      {timeout:10000}
    )
  }
  guardarToken(token:string){
    localStorage.setItem("token", token);

  }

  cerrarSesion(){
    localStorage.removeItem("token")
  }
  
  recuperarToken():string | null {
    return localStorage.getItem("token")
  }
  
  sesionIniciada():boolean{

    if (this.recuperarToken()==null)
      return false
    else
      return true
  }
}
