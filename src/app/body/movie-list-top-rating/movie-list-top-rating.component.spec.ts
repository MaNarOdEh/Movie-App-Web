import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListTopRatingComponent } from './movie-list-top-rating.component';

describe('MovieListTopRatingComponent', () => {
  let component: MovieListTopRatingComponent;
  let fixture: ComponentFixture<MovieListTopRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieListTopRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListTopRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
