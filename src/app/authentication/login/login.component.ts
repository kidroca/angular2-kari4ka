import {Component, OnInit} from '@angular/core';
import {AppUserService} from '../../core/data/app-user.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {AuthGuardService} from '../auth-guard.service';
import {Submittable} from '../../shared/abstractions/submittable';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less']
})
export class LoginComponent extends Submittable implements OnInit {

    private redirectUrl: string;

    username: string;
    password: string;

    constructor(
        private router: Router,
        private userService: AppUserService,
        private authGuard: AuthGuardService) {

        super();

        this.redirectUrl = this.authGuard.redirectUrl || '/home';
    }

    ngOnInit() {}

    onValidForm(loginForm?: NgForm): Promise<boolean> {

        this.userService.setUsername(this.username);
        this.userService.setPassword(this.password);

        return Promise.resolve<boolean>(this.userService.logIn())
            .then(res => {
                console.log(res);
                return this.router.navigate([this.redirectUrl]);
            });
    }
}
