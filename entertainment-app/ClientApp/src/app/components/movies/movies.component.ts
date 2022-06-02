import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
    public movies = {};

    constructor(
        public router: Router,
        private showService: ShowService
    ) {
        this.movies = (this.router.url === '/movies' ? this.showService.movies : this.showService.bookmarkedMovies);
        console.log("Movies component movies:");
        console.log(this.movies);
     }

    ngOnInit(): void {

    }

}
