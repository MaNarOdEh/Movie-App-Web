import { AppModule } from './app.module';
import { TrailerModule } from './trailer/trailer.module';
import { MovieDetailsComponent } from './body/movie-details/movie-details.component';
import { MovieListTopRatingComponent } from './body/movie-list-top-rating/movie-list-top-rating.component';
import { SignupComponent } from './signup/signup/signup.component';
import { LoginComponent } from './login/login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './body/movie-list-most-popular/movie-list-most-popular.component';
import { TrailerRoutingModule } from './trailer/trailer-routing.module';


const routes: Routes = [
  {path: 'login',          component:  LoginComponent},
  {path: 'signup',         component:  SignupComponent},
  {path: 'mostRating',     component:  MovieListTopRatingComponent},
  {path: 'mostPopularity', component:  MovieListComponent},
  {path: 'details/:id',    component:  MovieDetailsComponent},
  {path: 'trailer',    loadChildren:() => TrailerModule},
  {path:'**',              redirectTo: 'mostPopularity'},
  {path:'',                component: MovieListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
