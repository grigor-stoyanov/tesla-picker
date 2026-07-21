import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ModelService } from '../../feature_model_selector/services/model.service';
import { OptionService } from '../../feature_config_selector/services/option.service';

export const stepGuardGuard: CanActivateFn = (route, state) => {
  const modelService = inject(ModelService);
  const optionService = inject(OptionService);
  const router = inject(Router);
  if(!modelService.selectedModel() || !modelService.selectedColor()){
    return router.createUrlTree(['/select', 'models']);
  }
  if(!optionService.selectedConfig && route.data['step']===3){
    return router.createUrlTree(['/select','options',modelService.selectedModel()])
  }
  return true
};
