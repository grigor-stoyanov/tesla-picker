import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { carStore } from '../../store/car.signal.store';

@Component({
  selector: 'app-steps',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './steps.html',
  styleUrl: './steps.css',
})
export class Steps {
  store = inject(carStore)
  selectedModel = this.store.selectedCar.car;
  selectedColor = this.store.selectedCar.color;
}
