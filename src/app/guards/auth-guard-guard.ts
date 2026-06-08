import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login-service';

export const AuthGuard: CanActivateFn = (route, state) => {
  //verificar el inicio de sesion
  const loginService =inject(LoginService)
  const router = inject(Router)
  if (loginService.sesionIniciada())
    return true
  else{
    router.navigateByUrl('/login')
    return false}
};
