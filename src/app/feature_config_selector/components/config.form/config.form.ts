import { AfterViewInit, Component, computed, inject, input, output, viewChild } from '@angular/core';
import { CarOptions, Config } from '../../../interfaces';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-config',
  imports: [FormsModule],
  templateUrl: './config.form.html',
  styleUrl: './config.form.css',
})
export class ConfigForm {
  route = inject(ActivatedRoute);
  carConfig = input.required<CarOptions | undefined>({ alias: 'carOptions' })
  selectedConfigId: number | string = "";
  selectedConfig = output<Config>();
  form = viewChild<NgForm>('f');
  prefilConfig = computed(()=>this.route.snapshot.data['selectedResolver']?.config ?? null);


  onSelectConfig(id: number) {
    const config = this.carConfig()?.configs.find(c => c.id === +id);
    if (config) {
      this.selectedConfig.emit(config);
    }
  }
}
