import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { CarService } from '../../shared/services/car.service';
import { ModelService } from '../../feature_model_selector/services/model.service';

@Component({
  selector: 'app-steps',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './steps.html',
  styleUrl: './steps.css',
})
export class Steps {
  modelService = inject(ModelService)
  selectedModel = this.modelService.selectedModel;
  selectedColor = this.modelService.selectedColor;
}
