import {Component, OnInit} from '@angular/core';
import {AppImage} from '../models/app-image';
import {Submittable} from '../../shared/abstractions/submittable';


@Component({
    selector: 'app-add-image',
    templateUrl: './add-image.component.html',
    styleUrls: ['./add-image.component.less'],
    providers: [AppImage]
})
export class AddImageComponent implements OnInit {

    supportedFileExtensions: string[] = ['jpeg', 'jpg', 'png'];

    isLoading: boolean = false;

    constructor(public appImage: AppImage) {}

    public onFileDrop(files: File[]): void {

        let file = files[0];
        if (file) {
            this.appImage.setFile(files[0]);
            this.appImage.title = files[0].name;
        }
        else {
            this.appImage.resetFile();
        }
    }

    public upload(): Promise<AppImage> {

        if (!this.isFileSelected()) {
            return Promise.reject<AppImage>(new Error('No file selected'));
        }

        this.isLoading = true;

        return this.appImage.push().then(x => {
            console.log(x);
            this.isLoading = false;
            return x;
        }, err => {
            console.log(err);
            this.isLoading = false;
        });
    }

    public trimSpaces() {
        if (this.appImage.title.endsWith('  ')) {
            this.appImage.title = this.appImage.title.replace(/\s+$/, ' ');
        }
    }

    public isFileSelected(): boolean {
        return !!(this.appImage.url || this.appImage.dataUrl);
    }

    ngOnInit() {}
}
