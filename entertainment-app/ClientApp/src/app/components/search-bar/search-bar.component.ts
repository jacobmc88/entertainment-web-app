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
    public inputField: any;
    public routePlaceMapping: any;

    constructor(
        private router: Router,
        private showService: ShowService
    ) { 
        this.routePlaceMapping = {
            "/bookmarks": "Search for bookmarked shows",
            "/movies": "Search for movies",
            "/tv-series": "Search for TV series",
            "/": "Search for movies or TV series"
        };
        this.router.events.subscribe(val => {
            this.searchPlaceholder = this.routePlaceMapping[this.router.url];
        });
    }

    ngOnInit(): void {
        this.inputField = document.getElementById("inputField");
    }

    public keyDownTest(){        
        this.showService.searchStr = this.inputField.value;
        if(0 === this.showService.searchStr.length){
            this.showService.isSearching = false;            
        
        }else{
            this.showService.isSearching = true;
            this.showService.search(this.router.url); 
        }
    }

    
}
