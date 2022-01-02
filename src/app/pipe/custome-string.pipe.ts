import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customeString',
})
export class CustomeStringPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    if (value.length <= 44) return value;
    return value.substring(0, 41) + '...';
  }
}
