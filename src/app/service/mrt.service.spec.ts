import { TestBed } from '@angular/core/testing';

import { MRTService } from './mrt.service';

describe('MRTService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MRTService = TestBed.get(MRTService);
    expect(service).toBeTruthy();
  });
});
