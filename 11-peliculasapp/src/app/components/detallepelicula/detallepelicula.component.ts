import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detallepelicula',
  templateUrl: './detallepelicula.component.html',
  styleUrls: ['./detallepelicula.component.css']
})
export class DetallepeliculaComponent implements OnInit {

  detallePelicula;

  constructor(private _router: ActivatedRoute, public _ps: PeliculasService) {
    this._router.params.subscribe(params => {
      console.log(params['id']);
      this._ps.buscarpeliculaPorId(params['id']).subscribe(data => {
        this.detallePelicula = data['_body'];
        console.log(data['_body']);
      });
    });
  }

  ngOnInit() {
  }

}
