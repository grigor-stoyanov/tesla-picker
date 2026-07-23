import { computed } from "@angular/core"
import { StateSignals } from "@ngrx/signals"
import { CarState } from "../state/car.state"

export const carSelectors = (store: StateSignals<CarState>) => {
    const towHitchPackage = computed(() => {
            const { yoke, towHitch } = store.selectedCar()
            if (yoke && towHitch){
                return {'Accessories Special': 1000}
            }else if(yoke){
                return {'Yoke included':1500}
            }else if (towHitch){
                return {'TowHitch included':1500}
            }else{
                return {'No accessories': 0}
            }
        });
    return {
        hasConfig: computed(()=>{
            return !!store.selectedCar().config
        }),
        availableColors: computed(() => {
            {
                return store.models().find(m => m.code === store.selectedCar().car?.code)?.colors
            }
        }),
        towHitchPackage,
        calculateSelectedPrice: computed(() => {
            const { towHitch, color, config, yoke } = store.selectedCar();
            let special = 0
            if (yoke && towHitch) {
                special = 1000
            } else if (yoke || towHitch) {
                special = 1500
            }
            return (color?.price ?? 0) + (config?.price ?? 0) + Object.values(towHitchPackage())[0]
        })
    }
}