import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
    constructor(
        public router: Router,
        private authenticationService: AuthenticationService
      ){}


    ngOnInit() : void{
    }

    logout() {        
        this.authenticationService.logout().subscribe( res => {            
            this.router.navigate(['/login']);
        } );
    }
}
