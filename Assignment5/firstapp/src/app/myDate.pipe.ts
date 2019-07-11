import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'calcAge'
})

export class MyDatePipe implements PipeTransform {
    transform(value: Date, uDate: Date ): any {
        // value = moment().format();
        const nValue = moment(value);
        const nuDate = moment(uDate);


        return nValue.from(nuDate);
    }
}
