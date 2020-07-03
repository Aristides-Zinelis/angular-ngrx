import { TestBed } from '@angular/core/testing';

import { HydroService } from './hydro.service';

describe('HydroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HydroService = TestBed.get(HydroService);
    expect(service).toBeTruthy();
  });
});
