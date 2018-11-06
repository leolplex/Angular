import { Component, OnInit } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models';

@Component({
    selector: 'page-terminados',
    templateUrl: 'terminados.component.html'
})
export class TerminadosPage implements OnInit {
    constructor( public _deseos: DeseosService) { }

    ngOnInit(): void { }

    listaSeleccionada( lista: Lista){
        console.log(lista);
    }
}
