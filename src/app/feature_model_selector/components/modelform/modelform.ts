import { AfterViewInit, Component, computed, inject, OnDestroy, output, signal, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ModelService } from '../../services/model.service';
import { CarService } from '../../../shared/services/car.service';


@Component({
  selector: 'app-modelform',
  imports: [FormsModule],
  templateUrl: './modelform.html',
  styleUrl: './modelform.css',
})
export class Modelform implements AfterViewInit,OnDestroy {
  modelService = inject(ModelService);
  carService = inject(CarService);
  models = this.modelService.models;
  selectedModel = signal('');
  colors = computed(() =>
    this.models()?.find(m => m.code === this.selectedModel())?.colors ?? []
  );
  form = viewChild<NgForm>('f');
  imageOutput = output<string>();
  formSubscriber:Subscription|undefined;
  ngAfterViewInit(): void {
    this.formSubscriber = this.form()?.valueChanges?.subscribe(
      {
        next:(value)=>{
          if(value['model']){
            this.selectedModel.set(value['model']);
            this.modelService.selectedColor.set(value['color']);
            this.modelService.selectedModel.set(this.selectedModel())
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
    const imageSrc = this.carService.getCarImage(model,color)
    this.imageOutput.emit(imageSrc);
  }
}
