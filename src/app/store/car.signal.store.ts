import {signalStore, withMethods, withState, withComputed} from '@ngrx/signals';
import { initialCarState } from './state/car.state';
import { carReducers } from './reducers/car.reducers';
import { priceCalculator } from './selectors/car.computed';
import { withImageReolver } from './effects/car.effects';

export const SelectedCarStore = signalStore(
    {providedIn:'root'},
    withState(initialCarState),
    withImageReolver(),
    withMethods(carReducers),
    withComputed(priceCalculator),
);