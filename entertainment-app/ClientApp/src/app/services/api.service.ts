import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    public data: any;

    constructor(
        private http : HttpClient
    ) {
        this.data = []; 
    }

    public getData(){
        return this.http.get<any>("server/shows");
    }

}
