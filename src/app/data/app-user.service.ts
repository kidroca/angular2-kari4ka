/**
 * Created by kidroca on 30.12.2016 г..
 */
import {Injectable} from '@angular/core';
import {Authentication} from './authentication';

const ParseUser = require('parse').User;

@Injectable()
export class AppUserService implements Authentication {
    authenticated(): boolean {
        return ParseUser.current().authenticated();
    }

    logIn<T>(username: string, password: string): Promise<T> {
        return ParseUser.logIn(username, password);
    }

    singUp<T>(username: string, password: string): Promise<T> {

        let user = new ParseUser();
        user.setUsername(username);
        user.setPassword(password);

        return user.signUp();
    }

    logout<T>(): Promise<T> {
        return ParseUser.logOut();
    }
}
