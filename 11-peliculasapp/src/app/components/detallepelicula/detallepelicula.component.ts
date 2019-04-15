import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detallepelicula',
  templateUrl: './detallepelicula.component.html',
  styleUrls: ['./detallepelicula.component.css']
})
export class DetallepeliculaComponent implements OnInit {

  detallePelicula: any;
  loading = true;

  constructor(private _router: ActivatedRoute, public _ps: PeliculasService) {
    this._router.params.subscribe(params => {
      this._ps.buscarpeliculaPorId(params['id']).subscribe(data => {
        this.detallePelicula = data['_body'];
        this.loading = false;
      });
    });
  }

  ngOnInit() {
  }

}
