import { Component, OnInit } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Lista, ListaItem } from '../../models';
import { NavParams } from 'ionic-angular';

@Component({
    selector: 'page-agregar',
    templateUrl: 'agregar.component.html'
})
export class AgregarPage implements OnInit {
    lista: Lista;
    nombreItem: string = '';

    constructor(public _deseos: DeseosService,
        private _navParams: NavParams) {
        const titulo = this._navParams.get('titulo');
        this.lista = new Lista(titulo);
        this._deseos.agregarLista(this.lista);
    }

    agregarItem() {
        if (this.nombreItem.length === 0) {
            return;
        }
        const nuevoItem = new ListaItem(this.nombreItem);
        this.lista.items.push(nuevoItem);
        this.nombreItem = '';
    }

    actualizarTarea(item: ListaItem) {
        item.completado = !item.completado;
    }

    borrarItem(index) {
        this.lista.items.splice(index, 1);
    }

    ngOnInit(): void { }

}
