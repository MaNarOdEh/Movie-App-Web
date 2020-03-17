import { TestBed } from '@angular/core/testing';

import { MostPopularityfilmsService } from './most-popularityfilms.service';

describe('MostPopularityfilmsService', () => {
  let service: MostPopularityfilmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MostPopularityfilmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
