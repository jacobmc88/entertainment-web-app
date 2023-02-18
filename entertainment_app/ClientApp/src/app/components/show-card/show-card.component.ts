import { Component, Input, OnInit } from '@angular/core';
import { Show } from 'src/app/models/show';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-show-card',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.css']
})
export class ShowCardComponent implements OnInit {

    public showList: any;
    public isBookmarked: boolean;

    constructor(
        public showService: ShowService
    ) { 
        this.isMovieList = false;
        this.isTvSeriesList = false;
        this.isBookmarkMovieList = false;
        this.isBookmarkTvSeriesList = false;
        
        this.showList = this.showService.shows;
        this.isBookmarked = false;
    }

    @Input() show: Show = {} as any;
    @Input() isMovieList: boolean;
    @Input() isTvSeriesList: boolean;

    @Input() isBookmarkMovieList: boolean;
    @Input() isBookmarkTvSeriesList: boolean;

    ngOnInit(): void {        
        this.isBookmarked = this.show.isBookmarked;
    }

    public switchBookmarkMode(show: Show): void {
        console.log('switchBookMarkMode()');
        this.showService.updateBookmark(show);
    }

    public test(){
        console.log("show-card component");
    }

}
