import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlimage'
})
export class UrlimagePipe implements PipeTransform {
  urlImg = 'http://image.tmdb.org/t/p/w500';

  transform(value: string): string {
    if (value === null) {
      return '/assets/default/default.jpg';
    }
    return this.urlImg + value;
  }

}
