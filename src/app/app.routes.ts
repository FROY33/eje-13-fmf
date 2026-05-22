import { Routes } from '@angular/router';
import { Login } from './components/auth/login/login';
import { Registro } from './components/auth/registro/registro';
import { Forgot } from './components/auth/forgot/forgot';
import { Notfound } from './components/pages/notfound/notfound';

//Arreglo de rutas, cada ruta es un objeto con dos propiedades: path y component
export const routes: Routes = [
    {
        //url
        path: 'login',
        component:Login
    },
    {
        path: 'registro',
        component:Registro
    },
    {
        path: 'recuperar',
        component:Forgot
    },
    {
        path: '**', //cualquier ruta que no exista, redirige a login
        component:Notfound
    }

];
