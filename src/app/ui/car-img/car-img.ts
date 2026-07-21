import { NgOptimizedImage } from '@angular/common';
import { Color } from '../../interfaces';
import { Component, inject,computed, input } from '@angular/core';
import { Router } from '@angular/router';
import { ModelService } from '../../feature_model_selector/services/model.service';
import { CarService } from '../../shared/services/car.service';
import { NonEmptyString } from '../../shared/utils/types.index';
import { isNonEmpty } from '../../shared/utils/helpers';

@Component({
  selector: 'app-car-img',
  imports: [NgOptimizedImage],
  templateUrl: './car-img.html',
  styleUrl: './car-img.css',
})
export class CarImg {
  router = inject(Router);
  modelService = inject(ModelService);
  carService = inject(CarService)
  imageSrc = input<string>(); 
 resolveImg = computed(() => {
  const color = this.modelService.selectedColor()?.code;
  const model = this.modelService.selectedModel();
  return this.imageSrc() || 
  (isNonEmpty(model?.code) && isNonEmpty(color) ? this.carService.getCarImage(model.code, color) : null);
});
}