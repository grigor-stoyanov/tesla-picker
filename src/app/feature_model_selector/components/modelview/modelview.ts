import { Component,inject, output, signal, viewChild } from '@angular/core';
import { CarModel } from '../../../interfaces';
import { Modelform } from '../modelform/modelform';
import { NextButtonDirective } from '../../../ui/next-button/next-button.directive';
import { carStore } from '../../../store/car.signal.store';


@Component({
  selector: 'app-modelview',
  imports: [Modelform,NextButtonDirective],
  templateUrl: './modelview.html',
  styleUrl: './modelview.css',
})
export class Modelview {
  store = inject(carStore);
  selectedModel = this.store.selectedCar.car;
  formRef = viewChild(Modelform);
}
