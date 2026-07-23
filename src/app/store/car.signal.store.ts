import {signalStore, withMethods, withState, withComputed, SignalStoreFeature, EmptyFeatureResult} from '@ngrx/signals';
import { initialCarState } from './state/car.state';
import { carReducers } from './reducers/car.reducers';
import { carSelectors } from './selectors/car.computed';
import { withImageReolver } from './effects/car.effects';


export const carStore = signalStore(
    {providedIn:'root'},
    withState(initialCarState),
    withImageReolver(),
    withMethods(carReducers),
    withComputed(carSelectors),
);