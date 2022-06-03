import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class Interceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService, private router : Router ) {}

    /**
     * Intercepts incoming and outgoing HTTP requests and responses.
     * 
     * @param request 
     * 
     * @param next 
     * 
     * @returns void on success, returns Error on failure.
     */
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status >= 400 && err.status < 500) {
                // auto logout if 401 response returned from api
                this.authenticationService.logout().subscribe( res => {
                console.log("interceptor: navigating to /login");
                this.router.navigate( ['/login'] );
                } );
            }

            return throwError( 'error' );
        }))
    }
}
