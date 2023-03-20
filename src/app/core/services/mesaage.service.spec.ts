import { TestBed } from '@angular/core/testing';

import { MesaageService } from './messaage.service';

describe('MesaageService', () => {
  let service: MesaageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MesaageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
