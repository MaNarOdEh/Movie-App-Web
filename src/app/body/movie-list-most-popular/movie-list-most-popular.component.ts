import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MostPopularityfilmsService } from 'src/app/films/shared/services/most-popularityfilms.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list-most-popular.component.html',
  styleUrls: ['./movie-list-most-popular.component.css']
})
export class MovieListComponent implements OnInit {
 
  title:string;
  movieList:Observable<any>;
  constructor(private myrouter:Router,private movieService:MostPopularityfilmsService){
    this.title="Most Popularity Movie"
  }
  ngOnInit(): void {
    this.movieService.getPopular(10).subscribe(
      res => {
         console.log(res);
         this.movieList = res.results;
    });
  }
  naviagteToDetails(movie){
    console.log(movie);
  }

}
