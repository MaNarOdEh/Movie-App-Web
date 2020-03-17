import { MostRatingfilmsService } from './../../films/shared/most-ratingfilms.service';
import { Observable } from 'rxjs';
import { MostPopularityfilmsService } from './../../films/shared/most-popularityfilms.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
 
  title:string;
  movieList:Observable<any>;
  constructor(private myrouter:Router,private movieService:MostPopularityfilmsService,private movieService2:MostRatingfilmsService){
    this.title="Most Popularity Movie"
  }
  ngOnInit(): void {
    this.movieService.getPopular(10).subscribe(
      res => {
         this.movieList = res.results;
         console.log(this.movieList);
    });
  }
  naviagteToDetails(movie){
    console.log(movie);
  }
  


}
