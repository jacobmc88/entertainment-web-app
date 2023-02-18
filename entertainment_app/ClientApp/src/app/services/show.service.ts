import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Show } from '../models/show';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ShowService {
    public shows: Show[] = [];
    public showsObj: any;
    public trendingMovies: Show[] = [];
    public trendingTvSeries: Show[] = [];
    public trendingShows: Show[] = [];
    public movies: Show[] = [];
    public tvSeries: Show[] = [];
    public bookmarkedMovies: Show[] = [];
    public bookmarkedTvSeries: Show[] = [];
    
    public isSearching = false;
    public searchStr: string;
    public searchResults: any;
    public searchResCount: number;

    constructor(
        private apiService: ApiService,
        private http: HttpClient
    ) {     
        this.showsObj = {};
        this.searchStr = "";
        this.searchResults = {};
        this.searchResCount = 0;
    }

    public updateBookmark(show: Show){

        // Update on server first
        this.apiService.updateBookmarks(show).subscribe((res:any) =>{

            // Update locally
            if (show.category === 'Movie') {
                console.log('a');
                const movie = this.movies.find(s => s === show);
                console.log('b');
                const trendingMovie = this.trendingMovies.find(s => s === show);
                const trendingShow = this.trendingShows.find(s => s === show);
                const bookmarkedMovie = this.bookmarkedMovies.find(s => s === show);
                
                movie.isBookmarked = !movie?.isBookmarked;
                trendingMovie.isBookmarked = !trendingMovie?.isBookmarked;
                trendingShow.isBookmarked = !trendingMovie?.isBookmarked;
                if (bookmarkedMovie) { 
                    this.bookmarkedMovies.push(movie)
                } else {
                    this.bookmarkedMovies = this.bookmarkedMovies.filter(m => m !== movie)
                }
                movie.isBookmarked = !movie?.isBookmarked;
            }
            else {
    
                const existingTvSeries = this.tvSeries.find(s => s === show);
                const trendingMovie = this.trendingTvSeries.find(s => s === show);
                const trendingTvSeries = this.trendingShows.find(s => s === show);
                const bookmarkedMovie = this.bookmarkedTvSeries.find(s => s === show);
                
                existingTvSeries.isBookmarked = !existingTvSeries?.isBookmarked;
                trendingMovie.isBookmarked = !trendingMovie?.isBookmarked;
                trendingTvSeries.isBookmarked = !trendingMovie?.isBookmarked;
                if (bookmarkedMovie) { 
                    this.bookmarkedTvSeries.push(existingTvSeries)
                } else { 
                    this.bookmarkedTvSeries = this.bookmarkedTvSeries.filter(m => m !== existingTvSeries) 
                }
                existingTvSeries.isBookmarked = !existingTvSeries?.isBookmarked;
            }
    
            const existingShow = this.shows.find(s => s === show);
            if (existingShow){ 
                existingShow.isBookmarked = !existingShow.isBookmarked;
            }

            console.log(res);
        });
    }

    public search(curRoute: string){
        let searchObj = {};        
        switch(curRoute){
            case "/bookmarks":                
                searchObj = Object.assign(this.bookmarkedMovies, this.bookmarkedTvSeries);                
                break;
            
            case "/movies":                
                searchObj = this.movies;
                break;
            
            case "/tv-series":                
                searchObj = this.tvSeries;
                break;
            
            default:
                //assuming home route                
                searchObj = this.showsObj;
                break;            
        }
        this.searchHelper(searchObj);
    }

    public searchHelper(searchObj: any){
        this.searchResults = {};
        this.searchResCount = 0;
        for(const key in searchObj){
            if( (searchObj[key].title).toLowerCase().includes(this.searchStr.toLowerCase())){
                //then we have a match
                this.searchResults[key] = searchObj[key];
                this.searchResCount++;
            }
        }
    }


    public getData(): Observable<Show[]>{
        return this.http.get<Show[]>("server/shows")
        .pipe(tap(showsFromServer => this.shows = showsFromServer));
    }

    public populate(): void{
        this.shows.forEach((show: Show) => {
            if('TV Series' === show.category){
                this.tvSeries.push(show);
                if(show.isTrending){
                    this.trendingTvSeries.push(show);
                    this.trendingShows.push(show);
                }

                if(show.isBookmarked){
                    this.bookmarkedTvSeries.push(show);
                }

            }else{
                //then this must be a movie
                this.movies.push(show);
                if(show.isTrending){
                    this.trendingMovies.push(show);
                    this.trendingShows.push(show);
                }

                if(show.isBookmarked){
                    this.bookmarkedMovies.push(show);
                }
            }

        });
    }
}
