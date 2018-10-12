import { Component } from '@angular/core';
import {ServicioService} from '../../services/servicio.service';
import {Router} from "@angular/router";
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  title = 'Bugallo-Santacoloma-Urbina-MP1';
  pokemons: Array <object>;

  constructor(private ServicioP : ServicioService, public router: Router) { 
    this.pokemons= this.ServicioP.pokemons;
  }
  
  irDetalle( pokemons: object, i: number){
    this.ServicioP.damePokemon(i);
    this.router.navigate(['/detalles']);
  }

}
