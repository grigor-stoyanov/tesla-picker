import { Component, signal } from '@angular/core';
import { Steps } from "../../../ui/steps/steps";
import { Modelview } from "../../components/modelview/modelview";
import { CarImg } from "../../../ui/car-img/car-img";

@Component({
  selector: 'app-model-page-layout',
  imports: [ Steps, Modelview, CarImg],
  templateUrl: './model-page-layout.html',
  styleUrl: './model-page-layout.css',
})
export class ModelPageLayout {
  imgSrc = signal('');
  onImageChange(image:string){
    this.imgSrc.set(image);
  }
}
