import { Component, computed, inject, input, output, signal, viewChild } from '@angular/core';
import { CarOptions, Config } from '../../../interfaces';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { carStore } from '../../../store/car.signal.store';
@Component({
  selector: 'app-config',
  imports: [FormsModule],
  templateUrl: './config.form.html',
  styleUrl: './config.form.css',
})
export class ConfigForm {
  route = inject(ActivatedRoute);
  store = inject(carStore);
  form = viewChild<NgForm>('f')
  selectedCar = this.store.selectedCar
  model = this.selectedCar?.car;
  code = computed(()=>{
    return this.model()?.code
  }
  )
  options = computed(()=>{
    const code = this.code()
    if(!code) return null;
    return this.store.options()[code] ?? null;
  })

  constructor(){
    this.store.selectAccessory(
      'towHitch',
      this.options()?.towHitch ?? false,
    )
    this.store.selectAccessory(
      'yoke',
      this.options()?.yoke ?? false
    )
  }

  onSelectConfig(id: number) {
    const code = this.code();
    if(!code) return;
    this.store.selectOption(code,id);
  }

  onAccessoryChange(type:string,value:boolean){
    this.store.selectAccessory(type,value);
  }
}
