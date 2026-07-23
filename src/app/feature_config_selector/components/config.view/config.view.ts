import { AfterViewInit, Component,inject,input } from '@angular/core';
import { NextButtonDirective } from '../../../ui/next-button/next-button.directive';
import { CarModel, Config } from '../../../interfaces';
import { OutsideDirective } from '../../../shared/directives/outside';
import { DecimalPipe } from '@angular/common';
import { NgForm } from '@angular/forms';
import { carStore } from '../../../store/car.signal.store';

@Component({
  selector: 'app-config-view',
  imports: [NextButtonDirective,DecimalPipe,OutsideDirective],
  templateUrl: './config.view.html',
  styleUrl: './config.view.css',
})
export class ConfigView {
  store = inject(carStore);
  form = input<NgForm>();
  model = this.store.selectedCar.car;
  selectedConfig = this.store.selectedCar.config;
}

