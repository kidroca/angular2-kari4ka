import {Component } from '@angular/core';
import {Router} from '@angular/router';
import {AppUserService} from '../../core/data/app-user.service';
import {AppUser} from '../../core/data/models/user';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less']
})
export class HeaderComponent {

    constructor(private router: Router, private userService: AppUserService) {}

    get username() {
        return this.userService.currentUser && this.userService.currentUser.getUsername();
    }

    get isAuthenticated() {
        return this.userService.isAuthenticated;
    }

    logout() {
        this.userService
            .logOut()
            .then(() => this.router.navigate(['/']));
    }
}
