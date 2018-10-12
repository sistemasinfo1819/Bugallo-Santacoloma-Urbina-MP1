import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import {InicioComponent} from './components/inicio/inicio.component';
import{APP_ROUTING} from './app.routes';

@NgModule({
  
  declarations: [
    AppComponent,
    DetallesComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule, APP_ROUTING,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
