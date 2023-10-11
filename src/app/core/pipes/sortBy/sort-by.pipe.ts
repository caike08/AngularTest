import { Pipe, PipeTransform } from '@angular/core';

import { User } from 'src/app/models/user';

export const enum SortByType {
  ASC = 'asc',
  DESC = 'desc'
}

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(value: User[], order: SortByType = SortByType.ASC): User[] {
    switch(order) {
      case SortByType.ASC:
        return value.sort((a, b) => a.name.localeCompare(b.name));
      case SortByType.DESC:
        return value.sort((a, b) => b.name.localeCompare(a.name));
      default:
        return value;
    }
  }

}
