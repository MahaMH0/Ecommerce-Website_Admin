import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardFormat'
})
export class CreditCardFormatPipe implements PipeTransform {

  transform(creditnumber:string): string {
    var result="";
      result=`${creditnumber.substring(0,4)}-${creditnumber.substring(4,8)}-
      ${creditnumber.substring(8,12)}`;
    return result;
  }

}
