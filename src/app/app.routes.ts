import { Routes } from '@angular/router';
import { Login } from './components/auth/login/login';
import { Registro } from './components/auth/registro/registro';
import { Forgot } from './components/auth/forgot/forgot';
import { Notfound } from './components/pages/notfound/notfound';
import { Layout } from './components/layout/layout';
import { Dash } from './components/pages/dash/dash';
import { Kardex } from './components/pages/kardex/kardex';
import { Materias } from './components/pages/materias/materias';
import { Profesores } from './components/pages/profesores/profesores';

//Arreglo de rutas, cada ruta es un objeto con dos propiedades: path y component
export const routes: Routes = [
    {
        path:'layout',
        component:Layout,
        children:[
            {
                path:'dash',
                component:Dash
            },
            {
                path:'kardex',
                component:Kardex
            },
            {
                path:'materias',
                component:Materias
            },
            {
                path:'profesores',
                component:Profesores
            }
        ]

    },
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
