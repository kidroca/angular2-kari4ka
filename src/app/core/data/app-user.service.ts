/**
 * Created by kidroca on 30.12.2016 г..
 */
import {Injectable} from '@angular/core';
import { User } from 'parse';
import {AppUser} from './models/user';

@Injectable()
export class AppUserService {

    constructor() {}

    get currentUser(): AppUser {

        return User.current() as AppUser;
    }

    get isAuthenticated(): boolean {

        return this.currentUser && this.currentUser.authenticated();
    }

    newUser(): AppUser {

        return new AppUser();
    }

    logOut(): Promise<any> {
        return Promise.resolve(User.logOut());
    }
}
