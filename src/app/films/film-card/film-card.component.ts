import { Movie } from './../shared/models/movie';
import { Component, OnInit, Input } from '@angular/core';
import { ObjectUnsubscribedErrorCtor } from 'rxjs/internal/util/ObjectUnsubscribedError';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css']
})
export class FilmCardComponent implements OnInit {
  @Input()movie:Movie;
  constructor() { }
  ngOnInit(): void {
  }
  naviagteToDetails(movie:Movie){

  }

}
