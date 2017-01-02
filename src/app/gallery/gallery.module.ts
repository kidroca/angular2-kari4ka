import {NgModule} from '@angular/core';
import {GalleryRoutingModule} from './gallery-routing.module';
import {ImagesComponent} from './images/images.component';
import {AddImageComponent} from './add-image/add-image.component';
import {GalleryComponent} from './gallery.component';
import { PreviewComponent } from './preview-image/preview-image.component';
import { FileDropDirective } from './add-image/file-drop.directive';
import {SharedModule} from '../shared/shared.module';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';

@NgModule({
    imports: [
        SharedModule,
        GalleryRoutingModule
    ],
    declarations: [
        GalleryComponent,
        ImagesComponent,
        AddImageComponent,
        PreviewComponent,
        FileDropDirective,
        ThumbnailComponent
    ]
})
export class GalleryModule {}
