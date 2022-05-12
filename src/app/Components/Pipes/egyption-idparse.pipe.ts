import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'egyptionIDParse'
})
export class EgyptionIDParsePipe implements PipeTransform {

  transform(NationalID:string,parse:string): string {
   var result="";

    if(parse==='YY')
    {
       result=NationalID[1]+NationalID[2];
    }
    else if(parse=='MM')
    {
      result=NationalID[3]+NationalID[4];
    }
    else if(parse=='DD')
    {
      result=NationalID[5]+NationalID[6];
    }
    else
    {
      result=`${NationalID[5]}${NationalID[6]}-${NationalID[3]}${NationalID[4]}-
      ${NationalID[1]}${NationalID[2]}`
    }
    return result;
  }

}
