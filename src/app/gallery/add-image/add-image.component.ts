import {Component, OnInit} from '@angular/core';
import {AppImage} from '../../core/data/models/app-image';
import {AppImageService} from '../../core/data/app-image.service';

@Component({
    selector: 'app-add-image',
    templateUrl: './add-image.component.html',
    styleUrls: ['./add-image.component.less']
})
export class AddImageComponent implements OnInit {

    supportedFileExtensions: string[] = ['jpeg', 'jpg', 'png'];
    isLoading: boolean = false;
    appImage: AppImage;

    constructor(private imageService: AppImageService) {
        this.appImage = this.imageService.newImage();
    }

    public onFileDrop(files: File[]): void {

        let file = files[0];
        if (file) {
            this.appImage.setFile(files[0]);
            this.appImage.title = files[0].name;
            this.imageService.setDataUrl(this.appImage, file);
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
            // Todo: redirect
            this.isLoading = false;
            return x;
        }, err => {
            console.log(err);
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
