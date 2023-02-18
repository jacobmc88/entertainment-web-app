import { Component, OnInit } from '@angular/core';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-rec-for-you',
  templateUrl: './rec-for-you.component.html',
  styleUrls: ['./rec-for-you.component.css']
})
export class RecForYouComponent implements OnInit {
    public recShows : any;

    constructor(
        private showService: ShowService
    ) { 
        this.recShows = this.showService.shows;
    }

    ngOnInit(): void {
    
    }

}
