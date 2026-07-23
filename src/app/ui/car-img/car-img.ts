import { NgOptimizedImage } from '@angular/common';
import { Component, inject,computed, input } from '@angular/core';
import { carStore } from '../../store/car.signal.store';

@Component({
  selector: 'app-car-img',
  imports: [NgOptimizedImage],
  templateUrl: './car-img.html',
  styleUrl: './car-img.css',
})
export class CarImg {
  store = inject(carStore);
  imageSrc = input<string>(); 
  resolveImg = computed(() => {
  return this.imageSrc() || this.store.imgUrl()
  });
}