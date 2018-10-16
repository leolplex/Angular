import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contasena'
})
export class ContasenaPipe implements PipeTransform {

  transform(value: string, mostrar: boolean): string {
    if (mostrar) {
      return value;
    } else {
      return '********';
    }
  }

}
