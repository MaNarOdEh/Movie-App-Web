import { TrailerService } from './../shared/trailer.service';
import { Component, OnInit } from '@angular/core';
import { Trailer } from '../shared/models/trailer';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trailer-list',
  templateUrl: './trailer-list.component.html',
  styleUrls: ['./trailer-list.component.css']
})
export class TrailerListComponent implements OnInit {

  movieId:string;
  movieTrailer:Array<any>;
  
  constructor(private route:ActivatedRoute,private trailerServices:TrailerService) {
    this.movieId = this.route.snapshot.paramMap.get('id');

   }

  ngOnInit(): void {
    this.trailerServices.getMovieTrailer(this.movieId).subscribe(res=>{
       this.movieTrailer = res.results;
       console.log(res);
       console.log(res.results);
       console.log(this.movieTrailer,"Movie Traillers")
    });
  }

}
