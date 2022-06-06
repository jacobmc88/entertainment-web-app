import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    public title = 'app';
    public isDataLoaded = false;
    public isLoginOrSignup: boolean = true;
    public topSpace: any;
    public navSearchContainer: any;
    public isDesktop: boolean = false;

    constructor(
        private router: Router,
        private apiService: ApiService,
        public showService: ShowService
    ){
        
        this.showService.getData().subscribe((result: any) => {
            this.isDataLoaded = true;
        });
    }
    @HostListener('window:resize', ['$event'])
    onResize() {
        this.setPlaceholderDims();
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

    ngDoCheck(): void{
        this.topSpace = document.getElementById("top-space");
        // this.navSearchContainer = ( this.isDesktop ? document.getElementById("side-bar-container") : document.getElementById("nav-search-container"));
        this.navSearchContainer =  document.getElementById("nav-search-container");
        this.setPlaceholderDims();
    }

    public setPlaceholderDims(){
        this.topSpace.style.width = this.navSearchContainer.offsetWidth + "px";
        this.topSpace.style.height = this.navSearchContainer.offsetHeight + "px";
    }

}
