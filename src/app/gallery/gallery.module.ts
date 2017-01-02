import {NgModule} from '@angular/core';
import {GalleryRoutingModule} from './gallery-routing.module';
import {ImagesComponent} from './images/images.component';
import {AddImageComponent} from './add-image/add-image.component';
import {GalleryComponent} from './gallery.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { FileDropDirective } from './add-image/file-drop.directive';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        GalleryRoutingModule
    ],
    declarations: [
        GalleryComponent,
        ImagesComponent,
        AddImageComponent,
        ThumbnailComponent,
        FileDropDirective
    ]
})
export class GalleryModule {}
