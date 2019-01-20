import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators, FormArray } from '@angular/forms';
import { User } from '../interfaces/user';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent implements OnInit {

  forma: FormGroup;
  usuario: User = {
    nombrecompleto: {
      nombre: 'Daniel',
      apellido: 'Romero'
    },
    correo: 'daniel@gmail.com',
    pasatiempos: ['Correr', 'Dormir', 'Comer']
  };

  constructor() {
    console.log(this.usuario);
    this.forma = new FormGroup({
      'nombrecompleto': new FormGroup({
        'nombre': new FormControl('', [Validators.required, Validators.minLength(3)]),
        'apellido': new FormControl('', [Validators.required, this.noAlbarracin])
      }),
      'correo': new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      'pasatiempos': new FormArray([
        new FormControl('Correr', Validators.required)
      ])
    });
    // this.forma.setValue(this.usuario);
  }

  ngOnInit() {
  }

  agregarPasatiempo() {
    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl('', Validators.required)
    );
  }

  noAlbarracin(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'albarracin') {
      return { noalbarracin: true };
    }
    return null;
  }

  guardarCambios() {
    console.log(this.forma.value);
    console.log(this.forma);
    // this.forma.reset({
    //   nombrecompleto: {
    //     nombre: '',
    //     apellido: ''
    //   },
    //   correo: ''
    // });
  }

}
