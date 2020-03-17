import { MovieDbInfo } from './models/movie-db-info';
import 'rxjs/Rx';
import {Observable} from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MostRatingfilmsService {

  movieDbInfo:MovieDbInfo;

  constructor(private http:HttpClient) { 
     this.movieDbInfo=MovieDbInfo.getMovieDbInfo();
  }
  getTopRatedMovies(): Observable<any> {
    return this.http.get(`${this.movieDbInfo.getBASEURL()}movie/top_rated?api_key=${this.movieDbInfo.getAPIKEY()}`)
  }

}
