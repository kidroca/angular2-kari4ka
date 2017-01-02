/**
 * Created by kidroca on 1.1.2017 г..
 */
import { Injectable } from '@angular/core';
import { File as ParseFile, Object as ParseObject } from 'parse';
import {AppUser} from './user';

@Injectable()
export class AppImage extends ParseObject {

    public static readonly createdBy: string = 'createdBy';
    public static readonly title: string = 'title';
    public static readonly category: string = 'category';

    public dataUrl: string;

    constructor() {
        super('AppImage');
    }

    private get file(): ParseFile {
        return this.get('file');
    }

    get createdBy(): AppUser {
        return this.get('createdBy');
    }

    get url(): string {
        let file = this.file;
        return file && file.url();
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

    setFile(file: File) {
        if (!file || file instanceof File === false) {
            throw new Error('setFile() called without file');
        }

        let parseFile = new ParseFile(file.name, file);

        this.set('file', parseFile);
    }

    resetFile() {
        this.set('file', undefined);
        this.dataUrl = '';
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

ParseObject.registerSubclass('AppImage', AppImage);
