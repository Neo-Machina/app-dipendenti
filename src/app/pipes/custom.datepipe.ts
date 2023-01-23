import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {
  transform(date: Date | string, format: string = 'd MMMM YYYY'): string | null {
    date = new Date(date);
    date.setDate(date.getDate());
    return new DatePipe('it-IT').transform(date, format);
  }
}
