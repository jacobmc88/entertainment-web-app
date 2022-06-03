import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ShowService } from 'src/app/services/show.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    title = 'app';
    isDataLoaded = false;
    isLoginOrSignup: boolean = true;

    constructor(
        private router: Router,
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

    ngOnInit(): void{
        this.router.events.subscribe(val => {
            this.isLoginOrSignup = ((this.router.url !== '/login' && this.router.url !== '/signup') ? false : true);            
            
            //needing to do this instead of ngClass because the body tag is outside of Angular scope
            //since the body tag is in the index.html file. If it is not included there, it will be
            //automatically included by browser since it is trying to fix "bad" HTML.
            if(this.isLoginOrSignup){
                document.getElementsByTagName("body")[0].style.backgroundColor = "#10141E";

            }else{
                document.getElementsByTagName("body")[0].style.backgroundColor = "#161D2F";
            }

        });
    }

}
