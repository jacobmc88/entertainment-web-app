import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { AuthGuard } from 'src/app/utilities/auth-guard';
import { Interceptor } from 'src/app/utilities/interceptor';

import { AppComponent } from './app.component';
import { BookmarkedMoviesComponent } from './components/bookmarked-movies/bookmarked-movies.component';
import { BookmarkedTvSeriesComponent } from './components/bookmarked-tv-series/bookmarked-tv-series.component';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoHeaderComponent } from './components/logo-header/logo-header.component';
import { MoviesComponent } from './components/movies/movies.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { RecForYouComponent } from './components/rec-for-you/rec-for-you.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { ShowCardComponent } from './components/show-card/show-card.component';
import { SignupComponent } from './components/signup/signup.component';
import { TrendingCardComponent } from './components/trending-card/trending-card.component';
import { TrendingComponent } from './components/trending/trending.component';
import { TvSeriesComponent } from './components/tv-series/tv-series.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    FetchDataComponent,
    SearchBarComponent,
    SearchResultsComponent,
    MoviesComponent,
    TvSeriesComponent,
    BookmarkedMoviesComponent,
    BookmarkedTvSeriesComponent,
    ShowCardComponent,
    TrendingComponent,
    RecForYouComponent,
    TrendingCardComponent,
    BookmarksComponent,
    LoginComponent,
    SignupComponent,
    LogoHeaderComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    IvyCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full', canActivate: [AuthGuard] },
      { path: 'movies', component: MoviesComponent, canActivate: [AuthGuard] },
      { path: 'tv-series', component: TvSeriesComponent ,canActivate: [AuthGuard] },
      { path: 'bookmarks', component: BookmarksComponent,canActivate: [AuthGuard] },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
    ])
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
