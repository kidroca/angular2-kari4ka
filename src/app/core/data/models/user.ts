/**
 * Created by kidroca on 2.1.2017 г..
 */
import { User, Object as ParseObject } from 'parse';

export class AppUser extends User {

    constructor() {
        super();
    }
}

ParseObject.registerSubclass('AppUser', AppUser);
