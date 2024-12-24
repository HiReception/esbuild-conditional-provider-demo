import { TestBed } from '@angular/core/testing';

import { OptionThreeService } from './option-three.service';

describe('OptionThreeService', () => {
  let service: OptionThreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OptionThreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
