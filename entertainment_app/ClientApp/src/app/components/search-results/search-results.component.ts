import { Component, OnInit } from '@angular/core';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {    
    
    constructor(
        public showService: ShowService
    ) { }

    ngOnInit(): void {
        
    }

}
