import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  peliculasEnCartelera = {};
  peliculasPopulares = {};
  peliculasParaNinosPopulares = {};

  constructor(public _ps: PeliculasService) {
    this._ps.getInTheatres().subscribe(data => {
      console.log(data);
      this.peliculasEnCartelera = data['_body'].results;
    });

    this._ps.getPopulares().subscribe(data => {
      this.peliculasPopulares = data['_body'].results;
    });

    this._ps.getMostPopularKids().subscribe(data => {
      this.peliculasParaNinosPopulares = data['_body'].results;
    });
  }

  ngOnInit() {
  }

}
