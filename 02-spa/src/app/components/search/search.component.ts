import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  heroes: Heroe[] = [];
  word: string;
  constructor(private _activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService,
    private _router: Router) {
  }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.word = params['word'];
      this.heroes = this._heroesService.buscarHeroes(params['word']);
    });
  }
  verHeroe ( idx: number ) {
    this._router.navigate( ['/heroe', idx] );
  }
}
