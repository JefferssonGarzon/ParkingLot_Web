import { TestBed } from '@angular/core/testing';

import { NoReturnLoginGuard } from './no-return-login.guard';

describe('NoReturnLoginGuard', () => {
  let guard: NoReturnLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NoReturnLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
