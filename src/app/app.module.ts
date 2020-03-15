import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FilmCardComponent } from './components/film-card/film-card.component';
import { FilmListComponent } from './components/film-list/film-list.component';
import { MovieCardComponent } from './components/movies/movie-card/movie-card.component';
import { MovieListComponent } from './components/movies/movie-list/movie-list.component';
import { LoginComponent } from './components/login/login/login.component';
import { LoginFormComponent } from './components/login/login-form/login-form.component';
import { SignupFormComponent } from './components/signup/signup-form/signup-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FilmCardComponent,
    FilmListComponent,
    MovieCardComponent,
    MovieListComponent,
    LoginComponent,
    LoginFormComponent,
    SignupFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
