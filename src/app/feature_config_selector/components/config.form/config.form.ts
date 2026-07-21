import { AfterViewInit, Component, computed, inject, input, OnDestroy, output, viewChild } from '@angular/core';
import { CarOptions, Config } from '../../../interfaces';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { pipe, Subscription } from 'rxjs';
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
  selectedConfig = output< { config?: Config; yoke?: boolean; tow?: boolean }>();
  form = viewChild<NgForm>('f');
  formSubscription:Subscription|undefined = undefined;
  prefilConfig = computed(()=>this.route.snapshot.data['selectedResolver']?.config ?? null);
  prefilYoke = computed(()=>this.route.snapshot.data['selectedResolver']?.yoke ?? null);
  prefilTow= computed(()=>this.route.snapshot.data['selectedResolver']?.tow ?? null);

  onSelectConfig(id: number) {
    const config = this.carConfig()?.configs.find(c => c.id === +id);
    this.selectedConfig.emit({config});
  }

  onAccessoryChange(){
    const {yoke, tow} = this.form()?.value ?? {};
    this.selectedConfig.emit({
      ...(typeof tow === 'boolean' && {tow}),
      ...(typeof yoke === 'boolean' && {yoke})
    })
  }
}
