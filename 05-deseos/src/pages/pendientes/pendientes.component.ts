import { Component, OnInit } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';

@Component({
    selector: 'page-pendientes',
    templateUrl: 'pendientes.component.html'
})
export class PendientesPage implements OnInit {
    constructor( public _deseos: DeseosService  ) { }

    ngOnInit(): void { }
}
