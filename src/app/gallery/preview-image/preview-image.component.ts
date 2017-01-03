import {Component, Input} from '@angular/core';
import {AppImage} from '../../core/data/models/app-image';

@Component({
    selector: 'app-preview-image',
    templateUrl: './preview-image.component.html',
    styleUrls: ['./preview-image.component.less']
})
export class PreviewComponent {

    @Input() image: AppImage;

    constructor() {}

    get imageUrl(): string {

        if (this.image) {

            return this.image.url || this.image.dataUrl || '';
        }

        return '';
    }
}
