import { Injectable } from '@angular/core';
import { Jsonp, Http } from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  // 3db797d00402f3613867572afde661b7
  private apikey = 'yourkey';
  private urlMoviedb = 'https://api.themoviedb.org/3';

  constructor(private _jsonp: Jsonp) {

  }

  getPopulares() {
    const url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    return this._jsonp.get(url).pipe(map(res => res));
  }

  buscarPelicula(texto: string) {
    // tslint:disable-next-line:max-line-length
    const url = `${this.urlMoviedb}/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    return this._jsonp.get(url).pipe(map(res => res));
  }
}
