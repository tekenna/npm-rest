import { TestBed } from '@angular/core/testing';

import { BtnLib2Service } from './btn-lib-2.service';

describe('BtnLib2Service', () => {
  let service: BtnLib2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BtnLib2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
