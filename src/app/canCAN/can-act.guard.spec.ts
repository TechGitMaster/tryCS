import { TestBed } from '@angular/core/testing';

import { CanActGuard } from './can-act.guard';

describe('CanActGuard', () => {
  let guard: CanActGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanActGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
