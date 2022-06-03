import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser : Observable<User>;
    public userNameTaken: boolean = false;   
    public errorMsg: string = "";

    constructor(
        private http: HttpClient
    ) { 
        const curUserJsonRaw = localStorage.getItem('currentUser');
        const curUserJsonParsed = (curUserJsonRaw !== null ? JSON.parse(curUserJsonRaw) : null);
        this.currentUserSubject = new BehaviorSubject<User>(curUserJsonParsed);
        this.currentUser = this.currentUserSubject.asObservable();
    }

    /**
     * Get the current User that is logged in.
     * 
     * @returns User
     */
     public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    /**
     * Attempts to perform a login based on the username and password provided.
     * 
     * @param username 
     * 
     * @param password 
     * 
     * @returns User
     */
     login(username: string, password: string) : Observable<User> {
        return this.http.post<User>('server/users/login', { username : username, password : password })
            .pipe(map(user => {                
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    signup(username: string, password: string) : Observable<User> {
        console.log("auth service signup");
        return this.http.post<User>('server/users/signup', { username : username, password : password })
            .pipe(map(user => {                
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                // localStorage.setItem('currentUser', JSON.stringify(user));
                // this.currentUserSubject.next(user);
                console.log(user);
                return user;
            }));
    }

    logout() {        
       // remove user from local storage and set current user to null
       return this.http.post<any>('server/users/logout', {})
       .pipe(map( response => {     
           console.log("auth service logout()");           
           localStorage.removeItem('currentUser');
           let empty = new User({id: '-1', email:''});
           this.currentUserSubject.next(empty);
       }));
    }

    logout_hlp() {        
        // remove user from local storage and set current user to null
        return this.http.post<any>('server/users/logout', {}).subscribe( (result: Response) => {                        
            localStorage.removeItem('currentUser');
            let empty = new User({id: '-1', email:''});
            this.currentUserSubject.next(empty);
        });
    }

}
