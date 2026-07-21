import { AfterViewInit, Component, inject,signal,Signal, viewChild } from '@angular/core';
import { CarService } from '../../../shared/services/car.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { CarModel, CarOptions,Config } from '../../../interfaces';
import { ConfigForm } from '../../components/config.form/config.form';
import { ConfigView } from '../../components/config.view/config.view';
import { OutsideDirective } from '../../../shared/directives/outside';
import { CarImg } from "../../../ui/car-img/car-img";
import { Steps } from "../../../ui/steps/steps";
import { OptionService } from '../../services/option.service';

@Component({
  selector: 'app-config-page-layout',
  imports: [ConfigForm, OutsideDirective, ConfigView, CarImg, Steps],
  templateUrl: './config-page-layout.html',
  styleUrl: './config-page-layout.css',
})
export class ConfigPageLayout {
  configService = inject(OptionService);
  route = inject(ActivatedRoute);
  carOptions: Signal<CarOptions|undefined>;
  modelCode:CarModel['code']|undefined = undefined;
  configFormRef = viewChild(ConfigForm);
  currentConfig = signal<Config|undefined>(undefined);
  constructor(){
  this.carOptions = toSignal(
    this.route.params.pipe(
      tap(params=>this.modelCode = params['modelcode'] as CarModel['code']),
      switchMap((params) => this.configService.getCarOptions(params['modelcode']))
    ));
    }

  onSelectedConfig(config:{ config?: Config; yoke?: boolean; tow?: boolean }){
    if ('config' in config) {
      this.configService.selectedConfig.set(config.config);
      this.currentConfig.set(config.config);
    }

    if ('tow' in config) this.configService.towHitch.set(config.tow);
    if ('yoke' in config) this.configService.yoke.set(config.yoke);
  }
  
}
