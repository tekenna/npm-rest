import { TestBed } from '@angular/core/testing';

import { BtnLibService } from './btn-lib.service';

describe('BtnLibService', () => {
  let service: BtnLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BtnLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
