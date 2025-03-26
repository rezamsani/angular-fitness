import { Pipe, PipeTransform } from '@angular/core';
import moment from "jalali-moment";
@Pipe({
  name: 'persianDate'
})
export class PersianDatePipe implements PipeTransform {

  transform(value: Date): string {
    return value ? moment(value).format('jYYYY/jMM/jDD') : '-';
  }

}
