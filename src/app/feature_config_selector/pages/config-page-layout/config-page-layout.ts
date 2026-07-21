import { AfterViewInit, Component, inject,signal,Signal, viewChild } from '@angular/core';
import { CarService } from '../../../shared/services/car.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { CarOptions,Config } from '../../../interfaces';
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
  configFormRef = viewChild(ConfigForm);
  currentConfig = signal<Config|undefined>(undefined);
  constructor(){
  this.carOptions = toSignal(
    this.route.params.pipe(
      switchMap(params => this.configService.getCarOptions(params['modelcode']))
    ));
    }

  onSelectedConfig(config:Config){
    this.configService.selectedConfig=config
    this.currentConfig.set(config);
  }
  
}
