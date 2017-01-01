/**
 * Created by kidroca on 1.1.2017 г..
 */
import { Injectable } from '@angular/core';
import { File, Object as ParseObject } from 'parse';

const DefaultCategory = 'general';

@Injectable()
export class AppImage extends ParseObject {

    constructor() {
        super('AppImage');
        this.category = DefaultCategory;
    }

    get title(): string {
        return this.get('title');
    }

    set title(value: string) {
        this.set('title', value);
    }

    get category(): string {
        return this.get('category');
    }

    set category(value: string) {
        this.set('category', value.toLowerCase());
    }

    get file(): File {
        return this.get('file');
    }

    set file(value: File) {
        this.set('file', value);
    }

    /**
     * @deprecated
     * Use the {@link AppImage.push} method instead
     */
    save<AppImage>(): Parse.Promise<any> {
        throw new Error('Method not supported - use `push()`');
    }

    /**
     * Saves the image to the cloud
     */
    push(): Promise<AppImage> {

        try {
            this.validateState();
            return Promise.resolve(super.save());
        }
        catch (error) {

            return Promise.reject<AppImage>(error);
        }
    }

    private validateState() {

        if (!this.category || this.category.length < 3) {
            throw new Error('Invalid category');
        }
        else if (!this.file) {
            throw new Error('No file');
        }
        else if (!this.title || this.title.length < 3) {
            throw new Error('Invalid title');
        }
    }
}
