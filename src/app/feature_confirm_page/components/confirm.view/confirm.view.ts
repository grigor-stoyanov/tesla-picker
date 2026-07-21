import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SelectedConfig } from '../../../interfaces';
import { CurrencyPipe } from '@angular/common';
import { MetricPipe } from '../../../shared/pipes/metric-pipe';
import { NextButtonDirective } from '../../../ui/next-button/next-button.directive';

@Component({
  selector: 'app-confirm-view',
  imports: [MetricPipe,CurrencyPipe,NextButtonDirective],
  templateUrl: './confirm.view.html',
  styleUrl: './confirm.view.css',
})
export class ConfirmView {
  route = inject(ActivatedRoute);
  resolverData = this.route.snapshot.data['selectedResolver'] as Partial<SelectedConfig>;
  car = computed(()=>this.resolverData.car);
  color = computed(()=>this.resolverData.color);
  config = computed(()=>this.resolverData.config);
  hasTow = computed(() => !!this.resolverData.towHitch);
  hasYoke = computed(() => !!this.resolverData.yoke);
  towHitchPackage = computed(()=>{
    if (this.hasTow() && this.hasYoke()) return 1000;
    if (this.hasTow() || this.hasYoke()) return 1500;
    return null;
  })
  totalPrice = computed(()=>{
    const base = this.config()?.price ?? 0;
    const paingJob = this.color()?.price ?? 0;
    const towHitchPackage = this.towHitchPackage() ?? 0;
    return base + paingJob + towHitchPackage;
  })

  confirmSelection(){
    confirm('Are you sure you want to proceed with that?')
  }
}
