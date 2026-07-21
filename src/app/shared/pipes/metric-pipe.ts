import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'metricPipe',
})
export class MetricPipe implements PipeTransform {
  
  transform(value: unknown, country:string, unit:'speed' | 'distance'): string {
    if(typeof value !== 'number'){
      return `${value}`
    }
    const unitMap: Record<string, Record<string,string>> = {
      USA: {speed:'Mph', distance:'mi'},
      UK: {speed:'Mph', distance:'mi'},  
      EU: {speed:'Kmph', distance:'mi'},
      DE: {speed:'Kmph', distance:'km'},
    };
    const units = unitMap[country];
    return units ? `${value} ${units[unit]}` : `${value}`;
  }
}
