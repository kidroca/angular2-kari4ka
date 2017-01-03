import {Component, OnInit} from '@angular/core';
import {AppImage} from '../../core/data/models/app-image';
import {AppImageService} from '../../core/data/app-image.service';

@Component({
    selector: 'app-images',
    templateUrl: './images.component.html',
    styleUrls: ['./images.component.less']
})
export class ImagesComponent implements OnInit {

    private images: AppImage[] = [];
    private selectedCategory: string;

    constructor(private imageService: AppImageService) {}

    ngOnInit() {
        this.getImagePage(1);
    }

    getImagePage(page: number) {

        this.imageService
            .getImages(this.selectedCategory, page)
            .then(images => {
                this.images = this.images.concat(images).concat(images).concat(images).concat(images);
            });
    }
}
