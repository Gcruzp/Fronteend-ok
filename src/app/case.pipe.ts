import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'case'
})
export class CasePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
