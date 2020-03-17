import { MovieDbInfo } from './../models/movie-db-info';
import 'rxjs/Rx';
import {Observable} from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class FilmDetailsService {
  movieDbInfo:MovieDbInfo;

  constructor(private http:HttpClient) { 
    this.movieDbInfo=MovieDbInfo.getMovieDbInfo();
  }
  getMovieDetails(movieId:String):Observable<any>{
    return this.http.get(`${this.movieDbInfo.getBASEURL()}movie/${movieId}?api_key=${this.movieDbInfo.getAPIKEY()}`)
  }
}
