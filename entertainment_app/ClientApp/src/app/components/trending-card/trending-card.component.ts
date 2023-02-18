import { Component, Input, OnInit } from '@angular/core';
import { Show } from 'src/app/models/show';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-trending-card',
  templateUrl: './trending-card.component.html',
  styleUrls: ['./trending-card.component.css']
})
export class TrendingCardComponent implements OnInit {

    public showList: any;
    public isBookmarked: boolean;
    @Input() public show: Show = {} as any;
    constructor(
        public showService: ShowService
    ) {
        this.showList = this.showService.shows; 
        this.isBookmarked = false;
    }

    

    ngOnInit(): void {
        this.isBookmarked = this.show.isBookmarked;
    }

    public test(){
        console.log("trending-card component");
        //console.log("Hello from the test! Id: " + this.showIndex);
    }

}
