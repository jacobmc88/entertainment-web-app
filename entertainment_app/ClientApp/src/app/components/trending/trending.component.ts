import { Component, OnInit } from '@angular/core';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
    public trendingShows : any;

    constructor(
        private showService: ShowService
    ) { 
        this.trendingShows = this.showService.trendingShows;
    }

    ngOnInit(): void {
    }

}
