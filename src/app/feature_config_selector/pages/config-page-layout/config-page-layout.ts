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
import { carStore } from '../../../store/car.signal.store';

@Component({
  selector: 'app-config-page-layout',
  imports: [ConfigForm, OutsideDirective, ConfigView, CarImg, Steps],
  templateUrl: './config-page-layout.html',
  styleUrl: './config-page-layout.css',
})
export class ConfigPageLayout {
  store = inject(carStore);
  route = inject(ActivatedRoute);
  configFormRef = viewChild(ConfigForm);
  constructor(){
    this.store.loadOptions()
  }
  
}
