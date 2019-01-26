import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Heroe } from 'src/app/interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe: Heroe = {
    nombre: '',
    bio: '',
    casa: 'Marvel'
  };
  nuevo = false;
  id: string;

  constructor(private _heroeService: HeroesService, private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(parametros => {
      this.id = parametros['id'];
      if (this.id !== 'nuevo') {
        this._heroeService.getHeroes(this.id).subscribe((heroe: any) => {
          this.heroe = JSON.parse(heroe._body);

        });

      }
    });
  }

  ngOnInit() {
  }

  guardar() {
    console.log(this.heroe);
    if (this.id === 'nuevo') {
      // Insertando
      this._heroeService.nuevoHeroe(this.heroe).subscribe((data: any) => {
        this.router.navigate(['/heroe', JSON.parse(data._body).name]);

      },
        error => console.error(error));
    } else {
      // Actualizando
      this._heroeService.actualizarHeroe(this.heroe, this.id).subscribe((data: any) => {
      },
        error => console.error(error));
    }
  }


  agregarNuevo(forma: NgForm) {
    this.router.navigate(['/heroe', 'nuevo']);
    forma.reset({
      casa: 'Marvel'
    });
  }

}
