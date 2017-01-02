import {Component, OnInit} from '@angular/core';
import {AppImage} from '../../core/data/models/app-image';
import {AppImageService} from '../../core/data/app-image.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-add-image',
    templateUrl: './add-image.component.html',
    styleUrls: ['./add-image.component.less']
})
export class AddImageComponent {

    supportedFileExtensions: string[] = ['jpeg', 'jpg', 'png'];
    isLoading: boolean = false;
    appImage: AppImage;

    constructor(private router: Router, private imageService: AppImageService) {
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

    public upload() {

        if (!this.isFileSelected()) {
            return;
        }

        this.isLoading = true;

        return this.appImage.push().then(x => {
            this.isLoading = false;
            this.router.navigate(['/gallery']);
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
}
