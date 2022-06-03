import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ShowService {
    public shows: any[];
    public showsObj: any;
    public trendingMovies: any;
    public trendingTvSeries: any;
    public trendingShows: any;
    public movies: any;
    public tvSeries: any;
    public bookmarkedMovies: any;
    public bookmarkedTvSeries: any;
    
    public isSearching = false;
    public searchStr: string;
    public searchResults: any;
    public searchResCount: number;

    constructor(
        private apiService: ApiService
    ) {
        this.shows = [];        
        this.showsObj = {};
        
        this.trendingMovies = {};
        this.trendingTvSeries = {};
        this.trendingShows = {};

        this.movies = {};        
        this.tvSeries = {};

        this.bookmarkedMovies = {};
        this.bookmarkedTvSeries = {};

        this.searchStr = "";
        this.searchResults = {};
        this.searchResCount = 0;
    }

    public setAllData(){
        this.showsObj = Object.assign({}, this.shows);

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
        this.showsObj[key].isBookmarked = !(this.showsObj[key].isBookmarked); 
        
        this.apiService.updateBookmarks(JSON.stringify(this.shows)).subscribe((res:any) =>{
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
}
