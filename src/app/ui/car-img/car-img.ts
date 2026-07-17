import { JsonPipe, NgOptimizedImage } from '@angular/common';
import { Component, inject,computed, input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-img',
  imports: [NgOptimizedImage],
  templateUrl: './car-img.html',
  styleUrl: './car-img.css',
})
export class CarImg {
  router = inject(Router);
  imageSrc = input<string>();
  resolveImg = computed(()=>this.imageSrc() || history.state?.['imgSrc']);
  a = 5;
}
