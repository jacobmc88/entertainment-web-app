import { Component, Input, OnInit } from '@angular/core';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-trending-card',
  templateUrl: './trending-card.component.html',
  styleUrls: ['./trending-card.component.css']
})
export class TrendingCardComponent implements OnInit {

    public showList: any;
    public show: any;
    public isBookmarked: boolean;

    constructor(
        private showService: ShowService
    ) {
        this.showList = this.showService.shows; 
        this.isBookmarked = false;
    }

    @Input() showIndex: any;

    ngOnInit(): void {
        this.show = this.showList[this.showIndex];
        this.isBookmarked = this.show.isBookmarked;
    }

    public test(){
        console.log("trending-card component");
        console.log("Hello from the test! Id: " + this.showIndex);
    }

}
