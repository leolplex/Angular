import { Injectable } from '@angular/core';
import { Lista } from '../models';

@Injectable()
export class DeseosService {

    listas: Lista[] = [];

    constructor() {
        this.cargarStorage();
        // const lista1 = new Lista('Recolectar piedras del infinto');
        // const lista2 = new Lista('Héroes a vencer');
        // this.listas.push(lista1, lista2);
        // console.log(this.listas);
    }

    agregarLista(lista: Lista) {
        this.listas.push(lista);
        this.guardarStorage();
    }

    guardarStorage() {
        localStorage.setItem('data', JSON.stringify(this.listas));
    }

    cargarStorage() {
        if (localStorage.getItem('data')) {
            this.listas = JSON.parse(localStorage.getItem('data'));
        } else {
            this.listas = [];
        }
    }
}