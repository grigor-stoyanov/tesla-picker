import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ModelService } from '../../feature_model_selector/services/model.service';
import { OptionService } from '../../feature_config_selector/services/option.service';
import { carStore } from '../../store/car.signal.store';

export const stepGuardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const store = inject(carStore);
  if(!store.selectedCar.car() || !store.selectedCar.color()){
    return router.createUrlTree(['/select', 'models']);
  }
  if(!store.selectedCar().config && route.data['step']===3){
    return router.createUrlTree(['/select','options',store.selectedCar.car()?.code])
  }
  return true
};
