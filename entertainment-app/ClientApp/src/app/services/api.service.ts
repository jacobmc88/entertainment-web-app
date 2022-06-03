import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

    constructor(
        private http : HttpClient
    ) { }

    public getData(){
        return this.http.get<any>("server/shows");
    }
    
    public updateBookmarks(data:string){
        const jsonHeader = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
        return this.http.post<any>('server/shows/update-bookmarks', data, {headers:jsonHeader });

    }
}
