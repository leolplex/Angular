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
        console.log(this._navParams.get('lista'));
        if (this._navParams.get('lista')) {
            this.lista = this._navParams.get('lista');
        } else {            
            this.lista = new Lista(titulo);
            this._deseos.agregarLista(this.lista);
        }
    }

    agregarItem() {
        if (this.nombreItem.length === 0) {
            return;
        }
        const nuevoItem = new ListaItem(this.nombreItem);
        this.lista.items.push(nuevoItem);
        this._deseos.guardarStorage();
        this.nombreItem = '';
    }

    actualizarTarea(item: ListaItem) {
        item.completado = !item.completado;
        const pendientes = this.lista.items.filter(itemData => {
            return !itemData.completado;
        }).length;

        if (pendientes === 0) {
            this.lista.terminada = true;
            this.lista.termiandaEn = new Date();
        } else {
            this.lista.terminada = false;
            this.lista.termiandaEn = null;
        }

        this._deseos.guardarStorage();
    }

    borrarItem(index) {
        this.lista.items.splice(index, 1);
        this._deseos.guardarStorage();
    }

    ngOnInit(): void { }

}
