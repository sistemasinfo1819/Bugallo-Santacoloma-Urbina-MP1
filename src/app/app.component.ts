import { Component } from '@angular/core';
import { ServicioService} from './services/servicio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bugallo-Santacoloma-Urbina-MP1';
  pokemons: Array <object>;

  constructor(private ServicioP : ServicioService) { 
    this.pokemons= this.ServicioP.pokemons;
  }
  
}

