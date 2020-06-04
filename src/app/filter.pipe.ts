import { Pipe, PipeTransform } from '@angular/core';
import { Bus } from './user/models/bus.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  newItem: Bus[]= [];
  transform(items: Bus[], bus: string, type: string): Bus[] {
    
    console.log(bus+ "  "+type);
    
    
    if(bus !== ''){
      items = items.filter(item => item.name === bus);
    } 
    if(type !== ''){
      items = items.filter(item => item.coach_type === type);
    }
    return items;
  }

}
