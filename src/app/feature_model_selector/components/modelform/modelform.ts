import { AfterViewInit, Component, computed, inject, OnDestroy, output, signal, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { map, Subscription } from 'rxjs';
import { ModelService } from '../../services/model.service';
import { CarService } from '../../../shared/services/car.service';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { CarModel } from '../../../interfaces';


@Component({
  selector: 'app-modelform',
  imports: [FormsModule],
  templateUrl: './modelform.html',
  styleUrl: './modelform.css',
})
export class Modelform implements AfterViewInit,OnDestroy {
  modelService = inject(ModelService);
  carService = inject(CarService);
  route = inject(ActivatedRoute)
  models = this.modelService.models;
  selectedModel = signal('');
  colors = computed(() =>
    this.models()?.find(m => m.code === this.selectedModel())?.colors ?? []
  );
  prefillModel = computed(() => this.route.snapshot.data['selectedResolver']?.car ?? '');
  prefillColor = computed(() => this.route.snapshot.data['selectedResolver']?.color ?? '');
  form = viewChild<NgForm>('f');
  imageOutput = output<string>();
  formSubscriber:Subscription|undefined;
  ngAfterViewInit(): void {
    this.formSubscriber = this.form()?.valueChanges?.subscribe(
      {
        next:(value)=>{
          if(value['model']){
            this.selectedModel.set(value['model'].code);
            this.modelService.selectedColor.set(value['color']);
            this.modelService.selectedModel.set(value['model'])
          }
          if(Object.values(value).every(v=>!!v)){
            this.onFormSubmit(this.form()!);
          }
        }
      }
    )
  }
  ngOnDestroy(): void {
    this.formSubscriber?.unsubscribe()
  }
  onFormSubmit(f:NgForm){
    const {model,color} = f.control.value;
    if(!model || !color){
      return;
    }
    const imageSrc = this.carService.getCarImage(model.code,color.code)
    this.imageOutput.emit(imageSrc);
  }
}
