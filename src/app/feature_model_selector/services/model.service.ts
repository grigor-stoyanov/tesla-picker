import { HttpClient } from '@angular/common/http';
import { inject, Service, signal } from '@angular/core';
import { API_BASE_URL } from '../../app.config';
import { Observable } from 'rxjs';
import { CarModel, Color } from '../../interfaces';
import { toSignal } from '@angular/core/rxjs-interop';


@Service()
export class ModelService {
    private http = inject(HttpClient);
    public selectedModel = signal('');
    public selectedColor = signal<Color | undefined>(undefined);
    
    readonly models = toSignal(this.getModels());
    getModels():Observable<CarModel[]>{
        return this.http.get<CarModel[]>('models')
    }
}
