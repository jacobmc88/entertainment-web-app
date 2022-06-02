import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

    public searchPlaceholder = "";
    public searchStr = "";
    public searchResults: any;
    public inputField: any;

    constructor(
        private router: Router,
        private showService: ShowService
    ) { 
        this.searchResults = {};
    }

    ngOnInit(): void {
        this.inputField = document.getElementById("inputField");
    }

    public keyDownTest(event:any){
        console.log("search-bar-component keyDownTest():");
        console.log(event);     
        
        this.searchStr = this.inputField.value;
        if(0 === this.searchStr.length){
            console.log("empty search string");
            this.showService.isSearching = false;            
        
        }else{
            this.showService.isSearching = true;
            console.log("SEARCHING");
            this.search(); 
        }

        console.log(this.searchStr);
        console.log("--------------");

    }

    public search(){
        let searchObj = {};
        switch(this.router.url){
            case "/bookmarks":                
                searchObj = Object.assign(this.showService.bookmarkedMovies, this.showService.bookmarkedTvSeries);                
                break;
            
            case "/movies":                
                searchObj = this.showService.movies;
                break;
            
            case "/tv-series":                
                searchObj = this.showService.tvSeries;
                break;
            
            default:
                //assuming home route                
                searchObj = this.showService.showsObj;
                break;            
        }
        this.searchHelper(searchObj);

    }

    public searchHelper(searchObj: any){
        this.searchResults = {};
        for(const key in searchObj){
            if( (searchObj[key].title).toLowerCase().includes(this.searchStr.toLowerCase())){
                //then we have a match
                this.searchResults[key] = searchObj[key];
            }

        }
        console.log("search-bar search():");
        console.log(this.searchResults);
    }
}
