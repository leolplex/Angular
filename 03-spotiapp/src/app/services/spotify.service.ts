import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Service listo');
  }

  getQuery(query: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD2_Da-ZWJf1ogHknVv5yhet2Yo7QHgQq9i-89GldLw6dGXLryKLYi57yKpb-YDbGZhnRSKFAGa7rNpqs8'
    });
    const url = `https://api.spotify.com/v1/${query}`;
    return this.http.get(url, { headers });
  }

  getNewReleases() {

    return this.getQuery('browse/new-releases?limit=20')
      .pipe(map(data => data['albums'].items));
  }

  getArtista(termino: string) {

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map(data => data['artists'].items));
  }
}
