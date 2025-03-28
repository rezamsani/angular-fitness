import { Pipe, PipeTransform } from '@angular/core';
import { Timestamp } from 'firebase/firestore';
import  moment from 'jalali-moment';

@Pipe({
  name: 'persianDate'
})
export class PersianDatePipe implements PipeTransform {

  transform(value: any): string {
    if (!value) return '-';

    // اگر value از نوع Timestamp باشد
    if (value instanceof Timestamp) {
      value = value.toDate();
    }

    // اگر value از نوع Date نباشد، مقدار پیش‌فرض را برگردانید
    if (!(value instanceof Date) || isNaN(value.getTime())) {
      console.error('Invalid date:', value);
      return '-';
    }

    // تبدیل تاریخ میلادی به شمسی
    return moment(value).locale('fa').format('jYYYY/jMM/jDD');
  }
}
