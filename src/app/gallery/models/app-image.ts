/**
 * Created by kidroca on 1.1.2017 г..
 */
import { Injectable } from '@angular/core';
import { File as ParseFile, Object as ParseObject, User } from 'parse';
import {AppUserService} from '../../core/data/app-user.service';
import {AppUser} from '../../core/data/models/user';

const DefaultCategory = 'general';

@Injectable()
export class AppImage extends ParseObject {

    private asDataUrl: string;
    private fileReader: FileReader;

    constructor(private userService: AppUserService) {
        super('AppImage');
        this.category = DefaultCategory;
        this.set('createdBy', this.userService.currentUser);
    }

    private get file(): ParseFile | File {
        return this.get('file');
    }

    get createdBy(): AppUser {
        return this.get('createdBy');
    }

    get url(): string {
        let file = this.file as ParseFile;
        return file && file.url();
    }

    get dataUrl(): string {
        return this.asDataUrl;
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

        this.readDataUrl(file);

        let parseFile = new ParseFile(file.name, file);

        this.set('file', parseFile);
    }

    resetFile() {
        this.set('file', undefined);
        this.asDataUrl = '';

        if (this.fileReader) {
            this.fileReader.abort();
            this.fileReader.removeEventListener('load');
            this.fileReader = null;
        }
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

    private readDataUrl(file: File) {

        if (!this.fileReader) {
            this.fileReader = new FileReader();
        }

        this.fileReader.addEventListener(
            'load', () => {
                this.asDataUrl = this.fileReader.result;
                this.fileReader.removeEventListener('load');
                this.fileReader = null;
            }, false);

        this.fileReader.readAsDataURL(file);
    }
}
