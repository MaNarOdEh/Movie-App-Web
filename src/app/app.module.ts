import { MostPopularityfilmsService } from './films/shared/most-popularityfilms.service';
import { MostRatingfilmsService } from './films/shared/most-ratingfilms.service';
import { FilmDetailsService } from './films/shared/film-details.service';
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    FilmCardComponent,
    MovieListComponent,
    MovieListTopRatingComponent
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
  ],
  providers: [
    MostPopularityfilmsService,
    MostRatingfilmsService,
    FilmDetailsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
