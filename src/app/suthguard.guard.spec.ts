import { TestBed } from '@angular/core/testing';

import { SuthguardGuard } from './suthguard.guard';

describe('SuthguardGuard', () => {
  let guard: SuthguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SuthguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
