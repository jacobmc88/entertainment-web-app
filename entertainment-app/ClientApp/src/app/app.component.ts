import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
    title = 'app';
    isDataLoaded = false;

    constructor(
        private apiService: ApiService
    ){
        this.apiService.getData().subscribe((result: any) => {
            this.apiService.data = result;
            this.isDataLoaded = true;
        });
    }

}
