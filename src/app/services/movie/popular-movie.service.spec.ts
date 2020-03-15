import { TestBed } from '@angular/core/testing';

import { PopularMovieService } from './popular-movie.service';

describe('PopularMovieService', () => {
  let service: PopularMovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopularMovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
