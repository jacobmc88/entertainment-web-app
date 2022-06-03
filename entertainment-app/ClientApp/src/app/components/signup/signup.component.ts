import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    public signupForm: FormGroup;
    public takenMsg: string = "";
    public loading = false;
    public submitted = false;
    public returnUrl: string;
    public data: any;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private apiService: ApiService,
        private authenticationService: AuthenticationService,
    ) { 
        this.signupForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
            repeatPassword: ['', Validators.required]
        });

        this.returnUrl = "";
    }

    ngOnInit(): void {
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.signupForm.controls; }

    onSubmit() {
        this.submitted = true;
        this.authenticationService.userNameTaken = false;
        this.authenticationService.errorMsg = "";
        // stop here if form is invalid
        if (this.signupForm.invalid) {
            return;
        }
        
        if(this.f.password.value !== this.f.repeatPassword.value){
            this.f.repeatPassword.setErrors({'match':false});
            this.f.password.setErrors({'match':false});
            return;
        }

        this.loading = true;
        this.authenticationService.signup(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {                            
                    if(!data){                        
                        this.loading = false;
                        this.signupForm.reset();
                    }else{
                        this.router.navigate([this.returnUrl]);
                    }
                    
                },
                error => {
                    this.loading = false;
                    if(this.authenticationService.userNameTaken){
                        this.f.username.setErrors({'usernameTaken':true});
                        this.takenMsg = this.authenticationService.errorMsg;
                    }
                });
    }
}
