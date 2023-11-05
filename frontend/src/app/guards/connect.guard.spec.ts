import { TestBed } from '@angular/core/testing';

import { ConnectGuard } from './connect.guard';

describe('ConnectGuard', () => {
  let guard: ConnectGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ConnectGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
