import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Heroe } from '../interfaces/heroe.interface';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  fireURL = 'https://heroesapp-25c11.firebaseio.com/heroes.json';

  constructor(private http: Http) { }

  nuevoHeroe(heroe: Heroe) {
    const body = JSON.stringify(heroe);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.fireURL, body, { headers: headers })
      .pipe(map(res => {
        console.log(res);
        return res;
      }));
  }
}
