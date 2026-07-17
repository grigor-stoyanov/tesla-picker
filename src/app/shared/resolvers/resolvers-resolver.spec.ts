import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { resolversResolver } from './resolvers-resolver';

describe('resolversResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() => resolversResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
