import { effect, inject, signal } from "@angular/core";
import { signalStoreFeature, withHooks,type, withProps } from "@ngrx/signals";
import { CarState } from "../state/car.state";
import { CarService } from "../../shared/services/car.service";
import { isNonEmpty } from "../../shared/utils/helpers";


export function withImageReolver(){
    const imgUrl = signal<string|null>(null);
    return signalStoreFeature(
        {
            state: type<CarState>()
        },
        withProps(
            ()=>({imgUrl,
            carService:inject(CarService),})
        ),
        withHooks({
            onInit(store){
                effect(
                    ()=>{
                        const model = store.selectedCar().car
                        const color = store.selectedCar().color
                        if(isNonEmpty(model?.code) && isNonEmpty(color?.code)){
                            imgUrl.set(store.carService.getCarImage(model.code,color.code))
                        }
                    }
                )
            }
        }),
    )
}