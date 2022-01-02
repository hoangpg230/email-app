import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customeMessage',
})
export class CustomeMessagePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    let newStr = '';
    if (value)
      for (var i = 0; i < value.length; i++) {
        if (value[i] == '\n') {
          newStr += '\n\n';
        } else {
          newStr += value[i];
        }
      }
    return newStr;
  }
}
