import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarOptions } from '../../interfaces';
import { API_BASE_URL } from '../../app.config';
@Injectable({
  providedIn: 'root'
})
export class CarService {
  private http = inject(HttpClient);
  private baseUrl = inject(API_BASE_URL);
  // readonly options = toSignal(this.getCarOptions());

  getCarImage(model:string,color:string):string{
    return `${this.baseUrl}${model}/${color}.jpg`;
  }

  getCarOptions(model: string): Observable<CarOptions> {
    return this.http.get<CarOptions>(`options/${model}`);
  }
}

