import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ShowService {
    public shows: any[];
    public trendMovies: any;
    public trendTvSeries: any;
    public movies: any;
    public tvSeries: any;
    public bookmarkedMovies: any;
    public bookmarkedTvSeries: any;

    constructor(
        private apiService: ApiService
    ) {
        this.shows = [];
        this.trendMovies = {};
        this.trendTvSeries = {};
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
                    this.trendMovies[i] = show;
                }

                if(show.isBookmarked){
                    this.bookmarkedMovies[i] = show;
                }

            }else{
                //then this is a tv-series
                this.tvSeries[i] = show;
                if(show.isTrending){
                    this.trendTvSeries[i] = show;
                }

                if(show.isBookmarked){
                    this.bookmarkedTvSeries[i] = show;
                }
            }
        }
    }

    public updateBookmark(type: string, key: string){
        if("Movie" === type){
            this.bookmarkedMovies[key].isBookmarked = !(this.bookmarkedMovies[key].isBookmarked); 
        }else{
            //then is tv-series
            this.bookmarkedTvSeries[key].isBookmarked = !(this.bookmarkedTvSeries[key].isBookmarked); 
        }
        this.shows[parseInt(type)].isBookmarked = !(this.shows[parseInt(type)].isBookmarked);

        //TODO - send to server.
    }
}
