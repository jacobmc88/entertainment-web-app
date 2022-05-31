import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
    constructor(
        private apiService: ApiService
    ){
        console.log("HomeComponent:");
        console.log(this.apiService.data);
    }
}
