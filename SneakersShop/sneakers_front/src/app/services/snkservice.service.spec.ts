import { TestBed } from '@angular/core/testing';

import { SnkserviceService } from './snkservice.service';

describe('SnkserviceService', () => {
  let service: SnkserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnkserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
