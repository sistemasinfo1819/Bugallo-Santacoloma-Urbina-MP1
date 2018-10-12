import {Routes, RouterModule, Router} from '@angular/router';
import {NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import{DetallesComponent} from './components/detalles/detalles.component';
import{InicioComponent} from './components/inicio/inicio.component';

const ROUTES: Routes=[
    {path: 'inicio',component:InicioComponent},
    {path: 'detalles',component:DetallesComponent},
    {path:'**', redirectTo:'inicio', pathMatch:'full'},
];

export const APP_ROUTING=RouterModule.forRoot(ROUTES);