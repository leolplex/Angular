import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { Heroe } from 'src/app/interfaces/heroe.interface';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: any;

  constructor(private _heroesService: HeroesService) {
    this._heroesService.getHeroes().subscribe((data: any) => {
      // console.log(JSON.parse(data._body));
      this.heroes = JSON.parse(data._body);
    });
  }

  ngOnInit() {
  }

}
