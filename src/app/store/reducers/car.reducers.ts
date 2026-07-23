import { DeepSignal, patchState, SignalStoreFeature, getState, WritableStateSource } from "@ngrx/signals";
import { CarState, initialCarState, SelectedCarState } from "../state/car.state";
import { inject } from "@angular/core";
import { ModelService } from "../../feature_model_selector/services/model.service";
import { OptionService } from "../../feature_config_selector/services/option.service";
import { config, firstValueFrom } from "rxjs";
import { isNonEmpty } from "../../shared/utils/helpers";
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
        clearColor(){
            const state = getState(store);
            patchState(store,{selectedCar:{...state.selectedCar,color:null}})
        },
        selectOption(model:string,id:number){
            const state = getState(store);
            const selectedConfig = state.options[model]?.configs
                        .find(c=>c.id==id)
            console.log(selectedConfig)
            if(!selectedConfig) return;
            patchState(store,{selectedCar:{
                ...state.selectedCar,
                config:selectedConfig
            }})
        },
        clearOption(){
            const state = getState(store); 
            patchState(store,{selectedCar:{
                ...state.selectedCar,
                config:null
            }})
        },
        selectAccessory(type:string,value:boolean){
            const state = getState(store);
            patchState(store,{selectedCar:{
                ...state.selectedCar,
                [type]:value
            }})
        },
        async loadModels():Promise<void>{
            const models = await firstValueFrom(modelService.getModels());
            patchState(store, {models})
        },
        async loadOptions():Promise<void>{
            const state = getState(store)
            const model = state.selectedCar.car?.code;
            if(!model) return;
            const options = await firstValueFrom(optionService.getCarOptions(model));
            patchState(store, (current)=> ({options:{...current.options,[model]:options}}))
        },
        clearStore(){
            patchState(store,initialCarState)
        }
    }
}