import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {AppUserService} from '../core/data/app-user.service';

@Injectable()
export class AuthGuardService implements CanActivate {

    public redirectUrl: string;

    constructor(private router: Router, private userService: AppUserService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        if (this.userService.authenticated()) {
            return true;
        }

        this.redirectUrl = state.url;

        this.router.navigate(['./login']);

        return false;
    }
}
