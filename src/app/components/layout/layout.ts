import { Component } from '@angular/core';
import { Router, RouterOutlet} from '@angular/router';
import { LoginService } from '../../services/login-service';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  constructor(private loginservice:LoginService, private router:Router){}
  logout(){
    //cerrar cesion y redireccionar a login
    this.loginservice.cerrarSesion()
    this.router.navigateByUrl('/login')
  }
}
