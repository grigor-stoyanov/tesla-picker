import { CarModel, CarOptions, Color, Config } from "../../interfaces"


export type SelectedCarState = {
    car: CarModel|null,
    color: Color|null,
    config?: Config|null,
    towHitch?: boolean|null,
    yoke?: boolean|null
}

export interface CarState {
    models: CarModel[],
    options: Record<string, CarOptions>,
    selectedCar: SelectedCarState    
}


export const initialSelectedState:SelectedCarState = {
    car: null,
    color: null,
    config: null,
    towHitch:null,
    yoke:null
}

export const initialCarState: CarState = {
    models: [],
    options: {},
    selectedCar: initialSelectedState
}
