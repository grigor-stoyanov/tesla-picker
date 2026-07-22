import { DeepSignal, patchState, SignalStoreFeature, getState, WritableStateSource } from "@ngrx/signals";
import { CarState, SelectedCarState } from "../state/car.state";
import { inject } from "@angular/core";
import { ModelService } from "../../feature_model_selector/services/model.service";
import { OptionService } from "../../feature_config_selector/services/option.service";
import { firstValueFrom } from "rxjs";
``

export const carReducers = (
    store:WritableStateSource<CarState>,
    modelService = inject(ModelService),
    optionService = inject(OptionService)
    )=>{
    return {
        selectCar<K extends keyof SelectedCarState>(key:K,value:SelectedCarState[K]){
            const state = getState(store);
            patchState(store, {selectedCar:{...state.selectedCar,[key]:value}})
        },
        async loadModels():Promise<void>{
            const models = await firstValueFrom(modelService.getModels());
            patchState(store, {models})
        },
        async loadOptions():Promise<void>{
            const state = getState(store)
            const model = state.selectedCar.car;
            if(!model) return;
            const options = await firstValueFrom(optionService.getCarOptions(model.code));
            patchState(store, {options: {...state.options, [model.code]: options}})
        }
    }
}