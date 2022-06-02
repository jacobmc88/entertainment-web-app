import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
    title = 'app';
    isDataLoaded = false;

    constructor(
        private apiService: ApiService,
        public showService: ShowService
    ){
        this.apiService.getData().subscribe((result: any) => {
            this.showService.shows = result;
            // this.apiService.formatData(result);
            this.showService.setAllData();
            this.isDataLoaded = true;
        });
    }

}
