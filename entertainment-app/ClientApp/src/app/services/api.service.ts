import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Show } from '../models/show';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

    constructor(
        private http : HttpClient
    ) { }
    
    public updateBookmarks(show: Show): Observable<Show> {
        return this.http.post<Show>('server/shows/update-bookmarks', show);

    }
}
