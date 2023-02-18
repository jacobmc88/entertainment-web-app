import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';

@Injectable({ 
   providedIn: 'root'
})

export class AuthGuard {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {}

    /**
     * Used in the routing module in order to guard certain routes based on certain criteria defined in this method. In
     * this case, the criteria is simply if the User is logged in.
     * 
     * @param route 
     * 
     * @param state 
     * 
     * @returns 
     */
     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser && "-1" != currentUser.id) {
            // authorized so return true
            return true;
        } else {

            this.router.navigate(['/login']);
            return false;
        }
    }
    
}
