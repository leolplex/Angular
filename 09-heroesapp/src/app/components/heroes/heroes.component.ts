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
    this.obtenerHeroes();
  }

  private obtenerHeroes() {
    this._heroesService.getHeroes().subscribe((data: any) => {
      this.heroes = JSON.parse(data._body);
    });
  }

  ngOnInit() {
  }

  borrarHeroe(key$: string) {
    this._heroesService.borrarHeroe(key$).subscribe((data: any) => {
      if (JSON.parse(data._body)) {
        console.error(data);
      } else {
        delete this.heroes[key$];
      }
    });
  }


}
