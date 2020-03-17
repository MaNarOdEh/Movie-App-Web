import { TestBed } from '@angular/core/testing';

import { MostRatingfilmsService } from './most-ratingfilms.service';

describe('MostRatingfilmsService', () => {
  let service: MostRatingfilmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MostRatingfilmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
