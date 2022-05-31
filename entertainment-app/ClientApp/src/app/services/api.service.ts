import { HttpClient } from '@angular/common/http';
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
   
}
