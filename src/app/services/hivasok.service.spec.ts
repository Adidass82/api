import { TestBed } from '@angular/core/testing';

import { HivasokService } from './hivasok.service';

describe('HivasokService', () => {
  let service: HivasokService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HivasokService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
