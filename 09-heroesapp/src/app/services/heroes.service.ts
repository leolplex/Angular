import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Heroe } from '../interfaces/heroe.interface';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  fireHeroesURL = 'https://heroesapp-25c11.firebaseio.com/heroes.json';
  fireHeroeURL = 'https://heroesapp-25c11.firebaseio.com/heroes/';

  constructor(private http: Http) { }

  nuevoHeroe(heroe: Heroe) {
    const body = JSON.stringify(heroe);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.fireHeroesURL, body, { headers: headers })
      .pipe(map(res => {
        return res;
      }));
  }

  actualizarHeroe(heroe: Heroe, key$: string) {
    const body = JSON.stringify(heroe);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const url = `${this.fireHeroeURL}${key$}.json`;
    return this.http.put(url, body, { headers: headers })
      .pipe(map(res => {
        return res;
      }));
  }

  getHeroes(key$: string) {
    const url = `${this.fireHeroeURL}${key$}.json`;
    return this.http.get(url).pipe(map(res => {
      return res;
    }));
  }
}

