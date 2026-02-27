import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activeColor',
  standalone: true,
})
export class ActiveColorPipe implements PipeTransform {

  transform(isActive: boolean | null | undefined): string {
    return isActive ? 'text-green' : 'text-red';
  }

}
