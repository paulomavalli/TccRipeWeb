import { TestBed } from '@angular/core/testing';

import { RipeService } from './ripe.service';

describe('RipeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RipeService = TestBed.get(RipeService);
    expect(service).toBeTruthy();
  });
});
