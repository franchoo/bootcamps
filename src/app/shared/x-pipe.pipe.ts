import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'xPipe'
})
export class XPipePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return 'x-' + value + '-x';
  }

}
