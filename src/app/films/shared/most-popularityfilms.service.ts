import { MovieDbInfo } from './models/movie-db-info';
import 'rxjs/Rx';
import {Observable} from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MostPopularityfilmsService {
   movieDbInfo:MovieDbInfo;
  constructor(private http:HttpClient) { 
    this.movieDbInfo=MovieDbInfo.getMovieDbInfo();
  }
  getPopular(filmNumber:number): Observable<any>{
   return this.http.get(`${this.movieDbInfo.getBASEURL()}movie/popular?api_key=${this.movieDbInfo.getAPIKEY()}&page=${filmNumber}&language=${this.movieDbInfo.getLANUAGE()}&region=${this.movieDbInfo.getREGION()}`)
  }

}
