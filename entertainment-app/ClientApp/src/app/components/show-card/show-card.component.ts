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

    constructor(
        private showService: ShowService
    ) { 
        this.isMovieList = false;
        this.isTvSeriesList = false;
        this.isBookmarkMovieList = false;
        this.isBookmarkTvSeriesList = false;
        
        this.showList = this.showService.shows;
    }

  @Input() trendingIndex: any;
  @Input() isMovieList: boolean;
  @Input() isTvSeriesList: boolean;
  
  @Input() isBookmarkMovieList: boolean;
  @Input() isBookmarkTvSeriesList: boolean;

  ngOnInit(): void {
      console.log("show-card:");
      console.log(this.trendingIndex);
      console.log("INFO:");
      console.log(this.showService.trendingShows[this.trendingIndex]);
      console.log("Show list:");
      console.log(this.showList[this.trendingIndex]);
      this.show = this.showList[this.trendingIndex];
  }

  public test(){
      console.log("Hello from the test! Id: " + this.trendingIndex);
  }

}
