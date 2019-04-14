import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  peliculasResultado = [];
  textoUsuario;

  constructor(public _ps: PeliculasService) { }

  ngOnInit() {
  }

  buscarPelicula() {
    this._ps.buscarPelicula(this.textoUsuario).subscribe(data => {
      this.peliculasResultado = data['_body'].results;
    });
  }

}
