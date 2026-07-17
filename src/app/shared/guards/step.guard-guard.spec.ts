import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { stepGuardGuard } from './step.guard-guard';

describe('stepGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => stepGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
