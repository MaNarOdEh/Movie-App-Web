import 'rxjs/Rx';
import {Observable} from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MostPopularityfilmsService {
  BASEURL : string;
  APIKEY  : string;
  REGION  : string;
  lANGUAGE: string;
  constructor(private http:HttpClient) { 
    this.BASEURL  = "https://api.themoviedb.org/3/";
    this.APIKEY   = "bdf04a42330733fdfeb4cbc860ab26d0";
    this.REGION   = "US";
    this.lANGUAGE = "en-US";
  }
  getPopular(filmNumber:number): Observable<any>{
    return this.http.get(`${this.BASEURL}movie/popular?api_key=${this.APIKEY}&page=${filmNumber}&language=${this.lANGUAGE}&region=${this.REGION}`)
  }
}
