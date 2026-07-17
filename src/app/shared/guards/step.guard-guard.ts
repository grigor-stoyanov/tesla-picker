import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ModelService } from '../../feature_model_selector/services/model.service';

export const stepGuardGuard: CanActivateFn = (route, state) => {
  const modelService = inject(ModelService);
  const router = inject(Router);
  if(modelService.selectedModel() && modelService.selectedColor()){
    return true
  }
  return router.navigate(['/select', 'models']);
};
