import { AfterViewInit, Component, computed, inject, model, OnDestroy, output, signal, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { carStore } from '../../../store/car.signal.store';
import { SelectedCarState } from '../../../store/state/car.state';
import { AsyncPipe } from '@angular/common';
import { CarModel, Color } from '../../../interfaces';


@Component({
  selector: 'app-modelform',
  imports: [FormsModule,AsyncPipe],
  templateUrl: './modelform.html',
  styleUrl: './modelform.css',
})
export class Modelform implements AfterViewInit,OnDestroy {
  route = inject(ActivatedRoute)
  form = viewChild<NgForm>('f');
  readonly store = inject(carStore);
  model = this.store.selectedCar.car;
  color = this.store.selectedCar.color;
  imageOutput = output<string>();
  formSubscriber:Subscription|undefined;
  
  compareModels(a:CarModel|null,b:CarModel|null){
    return a?.code === b?.code;
  }
  
  ngAfterViewInit(): void {
    this.store.loadModels();
    this.formSubscriber = this.form()?.valueChanges?.subscribe(
      {
        next:(value)=>{
          if(value['model']){
            this.store.selectCar('car' as keyof SelectedCarState,value['model'])
          }
          if(value['color']){
            this.store.selectCar('color' as keyof SelectedCarState,value['color'])
          }
        }
      }
    )
  }
  ngOnDestroy(): void {
    this.formSubscriber?.unsubscribe()
  }
}
