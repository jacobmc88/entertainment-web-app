import { Component, Input, OnInit } from '@angular/core';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-show-card',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.css']
})
export class ShowCardComponent implements OnInit {

    public showList: any;
    public show: any;
    public isBookmarked: boolean;

    constructor(
        private showService: ShowService
    ) { 
        this.isMovieList = false;
        this.isTvSeriesList = false;
        this.isBookmarkMovieList = false;
        this.isBookmarkTvSeriesList = false;
        
        this.showList = this.showService.shows;
        this.isBookmarked = false;
    }

    @Input() showIndex: any;
    @Input() isMovieList: boolean;
    @Input() isTvSeriesList: boolean;

    @Input() isBookmarkMovieList: boolean;
    @Input() isBookmarkTvSeriesList: boolean;

    ngOnInit(): void {        
        this.show = this.showList[this.showIndex];
        this.isBookmarked = this.show.isBookmarked;
    }

    public test(){
        console.log("show-card component");
        console.log("Hello from the test! Id: " + this.showIndex);
    }

}
