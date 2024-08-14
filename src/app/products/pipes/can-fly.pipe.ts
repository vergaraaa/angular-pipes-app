import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly',
})
export class CanFlyPipe implements PipeTransform {
  transform(value: boolean): 'flies' | "can't fly" {
    return value ? 'flies' : "can't fly";
  }
}
