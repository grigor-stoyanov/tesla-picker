import { inject, Service, Signal, signal } from '@angular/core';
import { CarOptions,Config } from '../../interfaces';
import { from, map, Observable, switchMap, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

@Service()
export class OptionService {
  private http = inject(HttpClient);

  getCarOptions(model: string): Observable<CarOptions> {
     return this.http.get<CarOptions>(`options/${model}`);
  }
}
