import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  peliculasEnCartelera = [];
  peliculasPopulares = [];
  peliculasParaNinosPopulares = [];
  loadingInTheatres = true;
  loadingPopulares = true;
  loadingMostPopularKids = true;

  constructor(public _ps: PeliculasService) {
    this._ps.getInTheatres().subscribe(data => {
      this.peliculasEnCartelera = data['_body'].results;
      this.loadingInTheatres = false;
    });

    this._ps.getPopulares().subscribe(data => {
      this.peliculasPopulares = data['_body'].results;
      this.loadingPopulares = false;
    });

    this._ps.getMostPopularKids().subscribe(data => {
      this.peliculasParaNinosPopulares = data['_body'].results;
      this.loadingMostPopularKids = false;
    });
  }

  ngOnInit() {
  }

}
