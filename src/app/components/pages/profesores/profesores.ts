import { Component } from '@angular/core';
import { LoginService } from '../../../services/login-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profesores',
  imports: [],
  templateUrl: './profesores.html',
  styleUrl: './profesores.css',
})
export class Profesores {
  constructor(private loginservice:LoginService, private router:Router){}
  logout(){
    //cerrar cesion y redireccionar a login
    this.loginservice.cerrarSesion()
    this.router.navigateByUrl('/login')
  }
}
