import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoginService } from '../services/login-service';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  //recuperar el token 
  const loginService = inject(LoginService)
  const token = loginService.recuperarToken()
  if (token){
    const  reqClone = req.clone({
      setHeaders:{
        Authorization: 'Bearer '+ token
      }
    })
    return next(reqClone)

  }else
    return next(req);
};
