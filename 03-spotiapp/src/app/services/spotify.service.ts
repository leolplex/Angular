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

 getQuery( query: string ) {
   const headers = new HttpHeaders({
     'Authorization': 'Bearer BQAkjgUQLLcFUzYK8AQTijPkWZV-9zdQgVvOKh-KE6e0TtMD6cb141acgIIB876BQuRXSOgQvJ1rc4or3pA'
   });
   const url = `https://api.spotify.com/v1/${ query }`;
   return this.http.get(url, {headers});
 }

  getNewReleases() {

    return  this.getQuery('browse/new-releases?limit=20')
                .pipe(map( data => data['albums'].items));
  }

  getArtista(termino: string) {

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers })
                    .pipe(map( data => data['artists'].items));
  }
}
