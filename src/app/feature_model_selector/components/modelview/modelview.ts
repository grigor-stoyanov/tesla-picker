import { Component,inject, output, signal, viewChild } from '@angular/core';
import { CarModel } from '../../../interfaces';
import { Modelform } from '../modelform/modelform';
import { NextButtonDirective } from '../../../ui/next-button/next-button.directive';

import { ModelService } from '../../services/model.service';

@Component({
  selector: 'app-modelview',
  imports: [Modelform,NextButtonDirective],
  templateUrl: './modelview.html',
  styleUrl: './modelview.css',
})
export class Modelview {
  private modelService = inject(ModelService);
  imageSource = output<string>();
  imgSrc=signal('');
  selectedModel = this.modelService.selectedModel;
  formRef = viewChild(Modelform);
  readonly currentCar = signal<CarModel | undefined>(undefined);
  onModelSelected(imgUrl:string){
    this.imgSrc.set(imgUrl);
    this.imageSource.emit(imgUrl)
  }
}
