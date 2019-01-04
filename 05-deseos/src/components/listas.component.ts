import { Component, Input } from '@angular/core';
import { DeseosService } from '../services/deseos.service';
import { AgregarPage } from '../pages/agregar/agregar.component';
import { Lista } from '../models';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'app-listas',
    templateUrl: 'listas.component.html'
})
export class ListasComponent {

    @Input() terminada: boolean = false;
    
    constructor(public _deseos: DeseosService,
        private _navCtrl: NavController) { }

    listaSeleccionada(lista: Lista) {
        this._navCtrl.push(AgregarPage, {
            titulo: lista.titulo,
            lista: lista
        });
    }

    borrarLista(lista: Lista) {
        this._deseos.borrarLista(lista);
    }

}
