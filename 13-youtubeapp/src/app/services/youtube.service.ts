import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
// wIIMUj-f5gX1PEfd8tycNY2G2rKh2kmFDySazIA
export class YoutubeService {
  private youtubeUrl = 'https://www.googleapis.com/youtube/v3';
  private apikey = 'Your youtube key';
  private nextPageToken = '';

  constructor(public http: HttpClient) {}

  // gFFaesEnGTEkSJ51jYTPauUU

  getVideos() {
    const Url = `${this.youtubeUrl}/playlistItems`;
    const params = new HttpParams({
      fromObject: {
        part: 'snippet',
        maxResults: '10',
        playlistId: 'yourplaylistId',
        key: this.apikey,
        pageToken: this.nextPageToken
      }
    });

    return this.http.get(Url, { params: params }).pipe(
      map(res => {
        this.nextPageToken = res['nextPageToken'];
        const videos: any[] = [];
        for (const video of res['items']) {
          const snippet = video.snippet;
          videos.push(snippet);
        }
        return videos;
      })
    );
  }
}
