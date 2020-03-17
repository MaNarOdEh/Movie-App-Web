import { MovieListTopRatingComponent } from './body/movie-list-top-rating/movie-list-top-rating.component';
import { SignupComponent } from './signup/signup/signup.component';
import { LoginComponent } from './login/login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './body/movie-list-most-popular/movie-list-most-popular.component';


const routes: Routes = [
  {path: 'login',  component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'mostRating', component:MovieListTopRatingComponent},
  {path: 'mostPopularity', component:MovieListComponent},
  {path:'**',redirectTo:'mostPopularity'},
  {path:'',component:MovieListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
