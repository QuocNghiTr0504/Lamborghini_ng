import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { userImplementsGuard } from './user--implements.guard';

describe('userImplementsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => userImplementsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
