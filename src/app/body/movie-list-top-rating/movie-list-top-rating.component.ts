import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MostRatingfilmsService } from 'src/app/films/shared/services/most-ratingfilms.service';

@Component({
  selector: 'app-movie-list-top-rating',
  templateUrl: './movie-list-top-rating.component.html',
  styleUrls: ['./movie-list-top-rating.component.css']
})
export class MovieListTopRatingComponent implements OnInit {

  title:string;
  movieList:Observable<any>;
  constructor(private myrouter:Router,private movieService:MostRatingfilmsService){
    this.title="Most Rating Movie"
  }
  ngOnInit(): void {
    this.movieService.getTopRatedMovies().subscribe(
      res=>{
          this.movieList = res.results;
      });
  }
  naviagteToDetails(movie){
    console.log(movie);
    this.myrouter.navigate(['/details',movie.id]);

  }

}
