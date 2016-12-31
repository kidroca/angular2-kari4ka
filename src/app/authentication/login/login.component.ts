import {Component, OnInit} from '@angular/core';
import {AppUserService} from '../../core/data/app-user.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {AuthGuardService} from '../auth-guard.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

    private redirectUrl: string;

    message: string;
    username: string;
    password: string;

    constructor(
        private router: Router,
        private userService: AppUserService,
        private authGuard: AuthGuardService) {

        this.message = 'Logged ' + (this.userService.authenticated() ? 'in' : 'out');
        this.redirectUrl = this.authGuard.redirectUrl || '/home';
    }

    ngOnInit() {}

    onSubmit(loginForm: NgForm) {

        if (loginForm.invalid) {
            return;
        }

        this.userService.setUsername(this.username);
        this.userService.setPassword(this.password);

        this.userService.logIn()
            .then(res => {
                console.log(res);
                return this.router.navigate([this.redirectUrl]);
            });
    }
}
