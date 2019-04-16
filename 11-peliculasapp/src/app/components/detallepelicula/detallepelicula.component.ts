import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detallepelicula',
  templateUrl: './detallepelicula.component.html',
  styleUrls: ['./detallepelicula.component.css']
})
export class DetallepeliculaComponent implements OnInit {

  detallePelicula: any;
  loading = true;
  openby;
  idPelicula;

  constructor(private _Activatedrouter: ActivatedRoute, public _ps: PeliculasService, private _router: Router) {
    this._Activatedrouter.params.subscribe(params => {
      this.openby = params['pag'];
      this.idPelicula = params['id'];
      this._ps.buscarpeliculaPorId(params['id']).subscribe(data => {
        this.detallePelicula = data['_body'];
        this.loading = false;
      });
    });
  }

  ngOnInit() {
  }

  regresar() {
    if (this.openby === 'busqueda') {
      this._router.navigate(['/' + this.openby, this.idPelicula]);
    } else {
      this._router.navigate(['/' + this.openby]);
    }

  }


}
