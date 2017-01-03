import {Injectable} from '@angular/core';
import {Object as ParseObject} from 'parse';
import {AppImage} from '../../core/data/models/app-image';

@Injectable()
export class Meme extends ParseObject {

    constructor() {
        super('Meme');
    }

    get title() {
        return this.get('title');
    }

    set title(value: string) {
        this.set('title', value);
    }

    get footer() {
        return this.get('footer');
    }

    set footer(value: string) {
        this.set('footer', value);
    }

    get image() {
        return this.get('image');
    }

    set image(value: AppImage) {
        this.set('image', value);
    }
}

ParseObject.registerSubclass('Meme', Meme);
