import { inject, Service, Signal, signal } from '@angular/core';
import { CarOptions,Config } from '../../interfaces';
import { from, map, Observable, switchMap, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

@Service()
export class OptionService {
  private http = inject(HttpClient);
  private route = inject(ActivatedRoute);
  readonly config: Signal<Config[] | undefined> = 
    toSignal(this.route.params.pipe(
      switchMap(params => this.getCarOptions(params['modelCode'])),
      map(options => options.configs)      
      )
    );
    selectedConfig= signal<Config|undefined>(undefined);
    readonly towHitch = signal<boolean|undefined>(undefined);
    readonly yoke = signal<boolean|undefined>(undefined);


  getCarOptions(model: string): Observable<CarOptions> {
     return this.http.get<CarOptions>(`options/${model}`).pipe(
      tap(options => {
        this.towHitch.set(options.towHitch),
        this.yoke.set(options.yoke)
      })
     );
  }
}
