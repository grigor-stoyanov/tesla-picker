import { ResolveFn } from '@angular/router';
import { SelectedConfig } from '../../interfaces';
import { inject } from '@angular/core';
import { ModelService } from '../../feature_model_selector/services/model.service';
import { OptionService } from '../../feature_config_selector/services/option.service';

export const selectedResolver: ResolveFn<Partial<SelectedConfig>> = (route, state) => {
  const modelService = inject(ModelService);
  const optionService = inject(OptionService)
  return {
    color:modelService.selectedColor(),
    car:modelService.selectedModel(),
    config: optionService.selectedConfig(),
  ...(optionService.towHitch() !== undefined && { towHitch: optionService.towHitch() }),
  ...(optionService.yoke() !== undefined && { yoke: optionService.yoke() }),
  };
};
