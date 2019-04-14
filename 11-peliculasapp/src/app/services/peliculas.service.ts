import { Injectable } from '@angular/core';
import { Jsonp, Http } from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  // 3db797d00402f3613867572afde661b7
  private apikey = '';
  private urlMoviedb = 'https://api.themoviedb.org/3';
  private starDate = new Date().setMonth(new Date().getMonth() - 1);
  private endDate = Date.now();


  constructor(private _jsonp: Jsonp) {

  }

  getPopulares() {
    const url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    return this._jsonp.get(url).pipe(map(res => res));
  }


  getInTheatres() {
    // tslint:disable-next-line:max-line-length
    const url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${this.starDate}&primary_release_date.lte=${this.endDate.toString()}&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    return this._jsonp.get(url).pipe(map(res => res));
  }

  getMostPopularKids() {
    // tslint:disable-next-line:max-line-length
    const url = `${this.urlMoviedb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    return this._jsonp.get(url).pipe(map(res => res));
  }

  buscarPelicula(texto: string) {
    // tslint:disable-next-line:max-line-length
    const url = `${this.urlMoviedb}/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    return this._jsonp.get(url).pipe(map(res => res));
  }

  buscarpeliculaPorId(movieID) {
    const url = `${this.urlMoviedb}/movie/${movieID}?api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    return this._jsonp.get(url).pipe(map(res => res));
  }

}
