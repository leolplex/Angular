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
  loading = false;

  constructor(public _ps: PeliculasService) { }

  ngOnInit() {
  }

  buscarPelicula() {
    this.loading = true;
    this._ps.buscarPelicula(this.textoUsuario).subscribe(data => {
      this.peliculasResultado = data['_body'].results;
      this.loading = false;
    });
  }

}
