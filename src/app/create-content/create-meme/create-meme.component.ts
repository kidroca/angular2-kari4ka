import {Component, OnInit, ViewChild} from '@angular/core';
import {Meme} from '../models/meme';
import {NgForm} from '@angular/forms';
import {Submittable} from '../../shared/abstractions/submittable';
import {AppImageService} from '../../core/data/app-image.service';
import {AppImage} from '../../core/data/models/app-image';
import {NgbAccordion} from '@ng-bootstrap/ng-bootstrap/accordion/accordion';

@Component({
    selector: 'app-create-meme',
    templateUrl: './create-meme.component.html',
    styleUrls: ['./create-meme.component.less'],
    providers: [Meme]
})
export class CreateMemeComponent extends Submittable implements OnInit {

    private images: AppImage[] = [];
    @ViewChild(NgbAccordion) accordion: NgbAccordion;

    selectedImage: AppImage;

    constructor(public meme: Meme, private imageService: AppImageService) {
        super();
    }

    get previewSource(): string {

        if (this.selectedImage) {
            return this.selectedImage.url;
        }

        return '';
    }

    onValidForm(memeForm?: NgForm): Promise<boolean> {

        console.log('Implement meme submission');
        return Promise.resolve(true);
    }

    ngOnInit() {
        this.getImagePage(1);
        this.accordion.closeOtherPanels = true;
    }

    getImagePage(page: number) {

        this.imageService
            .getImages('general', page)
            .then(images => {
                this.images = this.images.concat(images);
                this.accordion.toggle('images');
            });
    }

    onImageSelect(image: AppImage) {

        this.selectedImage = image;
        this.accordion.toggle('edit');
        this.meme.image = image;
    }
}
