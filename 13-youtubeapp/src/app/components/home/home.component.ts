import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  videos: any[] = [];
  videoSeleccionado: any;

  constructor(private _YouTubeService: YoutubeService) {
    this._YouTubeService.getVideos().subscribe(videos => {
      this.videos = videos;
    });
  }

  ngOnInit() {}

  verVideo(video: any) {
    this.videoSeleccionado = video;
    $('#exampleModal').modal();
  }
  cerrarModal() {
    this.videoSeleccionado = null;
    $('#exampleModal').modal('hide');
  }

  cargarMas() {
    this._YouTubeService
      .getVideos()
      .subscribe(videos => this.videos.push.apply(this.videos, videos));
  }
}
