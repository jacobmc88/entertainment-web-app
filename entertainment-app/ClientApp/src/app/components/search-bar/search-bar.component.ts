import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

    public searchPlaceholder = "";
    public searchStr = "";

    constructor() { }

    ngOnInit(): void {
    
    }

    public keyDownTest(event:any){
        console.log("search-bar-component keyDownTest():");
        console.log(event);        
        if("Backspace" === event.key){
            this.searchStr = this.searchStr.substr(0, this.searchStr.length-1);
        }else{
            if("Enter" !== event.key){
                this.searchStr += event.key;
            }            
        }
        console.log(this.searchStr);
        console.log("--------------");

    }
}
