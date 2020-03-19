import 'rxjs/Rx';
import {Observable} from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieReviewService {

  private BASEURL : string;
  private APIKEY  : string;
  private REGION  : string;
  private lANGUAGE: string;
  constructor(private http:HttpClient) { 
    this.BASEURL  = "https://api.themoviedb.org/3/";
    this.APIKEY   = "bdf04a42330733fdfeb4cbc860ab26d0";
    this.REGION   = "US";
    this.lANGUAGE = "en-US";
  }

  getMovieReviews(id: string): Observable<any> {
    return this.http.get(`${this.BASEURL}movie/${id}
    /reviews?api_key=${this.APIKEY}`)
  }

}
