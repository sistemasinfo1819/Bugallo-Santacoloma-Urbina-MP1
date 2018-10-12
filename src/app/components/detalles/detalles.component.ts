import { Component} from '@angular/core';
import {ServicioService} from '../../services/servicio.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent {
  title = 'Bugallo-Santacoloma-Urbina-MP1';
  pokemons: Array <object>;
  pokemon: object;

  constructor(private ServicioP : ServicioService, public router: Router) { 
    this.pokemons= this.ServicioP.pokemons;
    this.pokemon=this.ServicioP.pokemonSeleccionado;
  }

  irInicio(){
    this.router.navigate(['/inicio']);
  }

  getImg(nombre:string){
    return this.ServicioP.imgEvolucion(nombre);
  }
  


}
