import {Component, Input} from '@angular/core';
import {AppImage} from '../../core/data/models/app-image';

@Component({
    selector: 'app-thumbnail',
    templateUrl: './thumbnail.component.html',
    styleUrls: ['./thumbnail.component.less']
})
export class ThumbnailComponent {

    @Input() image: AppImage;

    constructor() {}

    get imageUrl(): string {

        if (this.image) {

            return this.image.url || this.image.dataUrl || '';
        }

        return '';
    }
}
