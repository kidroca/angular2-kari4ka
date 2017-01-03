import {Component, OnInit, Input} from '@angular/core';
import {AppImage} from '../../core/data/models/app-image';

@Component({
    selector: 'app-thumbnail',
    templateUrl: './thumbnail.component.html',
    styleUrls: ['./thumbnail.component.less']
})
export class ThumbnailComponent {

    @Input() image: AppImage;

    constructor() {}
}
