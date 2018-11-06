import { Component, OnInit } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models/lista.model';
import { NavController } from 'ionic-angular';
import { AgregarPage } from '../agregar/agregar.component';

@Component({
    selector: 'page-pendientes',
    templateUrl: 'pendientes.component.html'
})
export class PendientesPage implements OnInit {
    constructor( public _deseos: DeseosService,
                 private _navCtrl: NavController  ) { }

    ngOnInit(): void { }

    listaSeleccionada( lista: Lista){
        console.log(lista);
    }

    agregarLista() {
        this._navCtrl.push(AgregarPage);
    }
}
