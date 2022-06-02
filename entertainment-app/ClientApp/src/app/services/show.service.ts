import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ShowService {
    public shows: any[];
    public trendingMovies: any;
    public trendingTvSeries: any;
    public trendingShows: any;
    public movies: any;
    public tvSeries: any;
    public bookmarkedMovies: any;
    public bookmarkedTvSeries: any;
    
    public isSearching = true;

    constructor(
        private apiService: ApiService
    ) {
        this.shows = [];
        this.trendingMovies = {};
        this.trendingTvSeries = {};
        this.trendingShows = {};
        this.movies = {};        
        this.tvSeries = {};
        this.bookmarkedMovies = {};
        this.bookmarkedTvSeries = {};
    }

    public setAllData(){
        for(let i = 0; i < this.shows.length; i++){
            let show = this.shows[i];

            if("Movie" === show.category){
                this.movies[i] = show;
                if(show.isTrending){
                    this.trendingMovies[i] = show;
                    this.trendingShows[i] = show;
                }

                if(show.isBookmarked){
                    this.bookmarkedMovies[i] = show;                    
                }

            }else{
                //then this is a tv-series
                this.tvSeries[i] = show;
                if(show.isTrending){
                    this.trendingTvSeries[i] = show;
                    this.trendingShows[i] = show;
                }

                if(show.isBookmarked){
                    this.bookmarkedTvSeries[i] = show;
                }
            }
        }
    }

    public updateBookmark(type: string, key: string){
        if("Movie" === type){
            this.movies[key].isBookmarked = !(this.movies[key].isBookmarked);
            if(key in this.trendingMovies){
                this.trendingMovies[key].isBookmarked = !(this.trendingMovies[key].isBookmarked);
                this.trendingShows[key].isBookmarked = !(this.trendingShows[key].isBookmarked);
            }
            if(key in this.bookmarkedMovies){
                //then remove from this
                delete this.bookmarkedMovies[key];
            }else{
                //otherwise add this
                this.bookmarkedMovies[key] = this.movies[key];                
            }            
        }else{
            //then is tv-series            
            this.tvSeries[key].isBookmarked = !(this.tvSeries[key].isBookmarked);
            if(key in this.trendingTvSeries){
                this.trendingTvSeries[key].isBookmarked = !(this.trendingTvSeries[key].isBookmarked);
                this.trendingShows[key].isBookmarked = !(this.trendingShows[key].isBookmarked);
            }
            if(key in this.bookmarkedTvSeries){
                //then remove from this
                delete this.bookmarkedTvSeries[key];
            }else{
                //otherwise add this
                this.bookmarkedTvSeries[key] = this.movies[key];                
            }
        }

        this.shows[parseInt(key)].isBookmarked = !(this.shows[parseInt(key)].isBookmarked);

        //TODO - send to server.
    }
}
