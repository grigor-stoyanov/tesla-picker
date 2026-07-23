import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SelectedConfig } from '../../../interfaces';
import { CurrencyPipe, KeyValuePipe } from '@angular/common';
import { MetricPipe } from '../../../shared/pipes/metric-pipe';
import { NextButtonDirective } from '../../../ui/next-button/next-button.directive';
import { carStore } from '../../../store/car.signal.store';

@Component({
  selector: 'app-confirm-view',
  imports: [MetricPipe,CurrencyPipe,KeyValuePipe,NextButtonDirective],
  templateUrl: './confirm.view.html',
  styleUrl: './confirm.view.css',
})
export class ConfirmView {
  store = inject(carStore);
  totalCost = this.store.calculateSelectedPrice();
  selectedCar = this.store.selectedCar();
  package = this.store.towHitchPackage();
  confirmSelection(){
    confirm('Are you sure you want to proceed with that?')
  }
}
