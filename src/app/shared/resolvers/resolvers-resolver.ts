import { ResolveFn } from '@angular/router';

export const resolversResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};
