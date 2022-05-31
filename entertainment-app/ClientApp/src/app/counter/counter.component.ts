import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent implements OnInit {
    public currentCount = 0;

    constructor(
		private apiService: ApiService
	){}

    ngOnInit(): void {

    }

    public incrementCounter() {
        this.currentCount++;
    }
}
