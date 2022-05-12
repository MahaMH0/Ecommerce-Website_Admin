import { TestBed } from '@angular/core/testing';

import { UserAuthenticatingService } from './user-authenticating.service';

describe('UserAuthenticatingService', () => {
  let service: UserAuthenticatingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserAuthenticatingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
