import { computed } from "@angular/core"
import { StateSignals } from "@ngrx/signals"
import { CarState } from "../state/car.state"

export const priceCalculator = (store:StateSignals<CarState>)=>({
    calculateSelectedPrice: computed(()=>{
        const {towHitch, color, config, yoke} = store.selectedCar();
        let special = 0
        if(yoke && towHitch){
            special = 1000
        }else if(yoke || towHitch){
            special = 1500
        }
        return (color?.price ?? 0) + (config?.price ?? 0) + special
    })
})