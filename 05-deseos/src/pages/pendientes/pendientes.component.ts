import { Component, OnInit } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models/lista.model';
import { NavController, AlertController, List } from 'ionic-angular';
import { AgregarPage } from '../agregar/agregar.component';
import { text } from '@angular/core/src/render3/instructions';

@Component({
    selector: 'page-pendientes',
    templateUrl: 'pendientes.component.html'
})
export class PendientesPage implements OnInit {
    constructor(public _deseos: DeseosService,
        private _navCtrl: NavController,
        private _alertCtrl: AlertController) { }

    ngOnInit(): void { }


    agregarLista() {

        const alerta = this._alertCtrl.create(
            {
                title: 'Nueva lista',
                message: 'Nombre de la nueva lista que desea',
                inputs: [{
                    name: 'titulo',
                    placeholder: 'Nombre de la lista'
                }],
                buttons: [{
                    text: 'Cancelar'
                },
                {
                    text: 'Agregar',
                    handler: data => {
                        if (data.titulo === 0) {
                            return;
                        }
                        this._navCtrl.push(AgregarPage, {
                            titulo: data.titulo
                        });
                        console.log(data);
                    }
                }
                ]
            });
        alerta.present();
    }
}
