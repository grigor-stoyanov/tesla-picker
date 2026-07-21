import { Component,input } from '@angular/core';
import { NextButtonDirective } from '../../../ui/next-button/next-button.directive';
import { CarModel, Config } from '../../../interfaces';
import { OutsideDirective } from '../../../shared/directives/outside';
import { DecimalPipe } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-config-view',
  imports: [NextButtonDirective,DecimalPipe,OutsideDirective],
  templateUrl: './config.view.html',
  styleUrl: './config.view.css',
})
export class ConfigView {
  form = input<NgForm>();
  selectedModel = input.required<CarModel['code']>();
  selectedConfig = input<Config | undefined>();
}

