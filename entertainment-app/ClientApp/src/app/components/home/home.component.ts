import { Component } from '@angular/core';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
    constructor(
        private showService: ShowService
    ){
        console.log("HomeComponent:");
        console.log(this.showService.shows);
        console.log(this.showService.movies);
        console.log(this.showService.tvSeries);
    }
}
