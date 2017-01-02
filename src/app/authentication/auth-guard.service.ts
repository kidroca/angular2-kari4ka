import {Injectable} from '@angular/core';
import {
    CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router,
    CanActivateChild, CanLoad, Route
} from '@angular/router';
import {AppUserService} from '../core/data/app-user.service';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild, CanLoad {

    public redirectUrl: string;

    constructor(private router: Router, private userService: AppUserService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        return this.allowTransition(state.url);
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        return this.canActivate(childRoute, state);
    }

    canLoad(route: Route): boolean {

        return this.allowTransition(`/${route.path}`);
    }

    private allowTransition(url: string): boolean {

        if (this.userService.isAuthenticated) {
            return true;
        }

        this.redirectUrl = url;

        this.router.navigate(['./auth/login']);

        return false;
    }
}
