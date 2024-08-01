import { Pipe, PipeTransform } from '@angular/core';
import { Card } from '../models/card';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(items:Card[], searchCard:string): Card[] {
    if (!items) return [];
    if (!searchCard) return items;

    searchCard = searchCard.toLowerCase();

    return items.filter( it => {
      return it.name.toLowerCase().includes(searchCard) 
      || it.price.toString().includes(searchCard);
    });
  }

}
