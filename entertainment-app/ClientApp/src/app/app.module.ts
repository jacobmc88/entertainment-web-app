import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { IvyCarouselModule } from 'angular-responsive-carousel';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HomeComponent } from './components/home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { MoviesComponent } from './components/movies/movies.component';
import { TvSeriesComponent } from './components/tv-series/tv-series.component';
import { BookmarkedMoviesComponent } from './components/bookmarked-movies/bookmarked-movies.component';
import { BookmarkedTvSeriesComponent } from './components/bookmarked-tv-series/bookmarked-tv-series.component';
import { ShowCardComponent } from './components/show-card/show-card.component';
import { TrendingComponent } from './components/trending/trending.component';
import { RecForYouComponent } from './components/rec-for-you/rec-for-you.component';
import { TrendingCardComponent } from './components/trending-card/trending-card.component';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
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
    BookmarksComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    IvyCarouselModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'movies', component: MoviesComponent },
      { path: 'tv-series', component: TvSeriesComponent },
      { path: 'bookmarks', component: BookmarksComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
