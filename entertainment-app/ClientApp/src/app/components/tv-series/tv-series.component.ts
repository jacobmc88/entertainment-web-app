import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-tv-series',
  templateUrl: './tv-series.component.html',
  styleUrls: ['./tv-series.component.css']
})
export class TvSeriesComponent implements OnInit {
    public tvSeries = {};

    constructor(
        public router: Router,
        private showService: ShowService
    ) { 
        this.tvSeries = (this.router.url === '/tv-series' ? this.showService.tvSeries : this.showService.bookmarkedTvSeries);
    }

    ngOnInit(): void {
        
    }


}
