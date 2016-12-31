/**
 * Created by kidroca on 30.12.2016 г..
 */
import {Injectable} from '@angular/core';
import { User } from 'parse';

@Injectable()
export class AppUserService extends User {

    constructor() {
        super();
    }
}
