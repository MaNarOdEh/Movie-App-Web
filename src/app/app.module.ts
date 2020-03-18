import { TrailerListComponent } from './trailer/trailer-list/trailer-list.component';
import { TrailerModule } from './trailer/trailer.module';
import { FilmDetailsService } from './films/shared/services/film-details.service';
import { LoginComponent } from './login/login/login.component';
import { FooterComponent } from './footer/footer/footer.component';
import { HeaderComponent } from './header/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatIconModule} from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { SignupComponent } from './signup/signup/signup.component';
import { FilmCardComponent } from './films/film-card/film-card.component';
import { MovieListComponent } from './body/movie-list-most-popular/movie-list-most-popular.component';
import { MovieListTopRatingComponent } from './body/movie-list-top-rating/movie-list-top-rating.component';
import { MovieDetailsComponent } from './body/movie-details/movie-details.component';
import { MostRatingfilmsService } from './films/shared/services/most-ratingfilms.service';
import { MostPopularityfilmsService } from './films/shared/services/most-popularityfilms.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    FilmCardComponent,
    MovieListComponent,
    MovieListTopRatingComponent,
    MovieDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatGridListModule,
    HttpClientModule,
    TrailerModule
  ],
  providers: [
    MostPopularityfilmsService,
    MostRatingfilmsService,
    FilmDetailsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
