import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { carStore } from '../../store/car.signal.store';
import { getState } from '@ngrx/signals';
export const selectedResolver: ResolveFn<{message:string} | null> = (route, state) => {
  const store = inject(carStore);
  switch(route.data['step']){
    case 3:
      return null;
    case 2:
      return {message: "Left Confirm Screen"}
    case 1:
      store.clearColor();
      store.clearOption();
      return {message:"Config Selection reset"}
    default:
      store.clearStore()
      return {message: "Store is reset"}
  }
};
