import { Component, Input } from '@angular/core';
import { DeseosService } from '../services/deseos.service';
import { AgregarPage } from '../pages/agregar/agregar.component';
import { Lista } from '../models';
import { NavController, AlertController, ItemSliding } from 'ionic-angular';

@Component({
    selector: 'app-listas',
    templateUrl: 'listas.component.html'
})
export class ListasComponent {

    @Input() terminada: boolean = false;

    constructor(public _deseos: DeseosService,
        private _navCtrl: NavController,
        private _alertCtrl: AlertController) { }

    listaSeleccionada(lista: Lista) {
        this._navCtrl.push(AgregarPage, {
            titulo: lista.titulo,
            lista: lista
        });
    }

    borrarLista(lista: Lista) {
        this._deseos.borrarLista(lista);
    }

    editarLista(lista: Lista, slidingItem: ItemSliding) {
        slidingItem.close();
        const alerta = this._alertCtrl.create(
            {
                title: 'Editar nombre',
                message: 'Editar el nombre de la lista',
                inputs: [{
                    name: 'titulo',
                    placeholder: 'Nombre de la lista',
                    value: lista.titulo
                }],
                buttons: [{
                    text: 'Cancelar'
                },
                {
                    text: 'Guardar',
                    handler: data => {
                        if (data.titulo === 0) {
                            return;
                        }
                        lista.titulo = data.titulo;
                        this._deseos.guardarStorage();
                    }
                }
                ]
            });
        alerta.present();
    }

}
