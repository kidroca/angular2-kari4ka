import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GalleryRoutingModule} from './gallery-routing.module';
import {ImagesComponent} from './images/images.component';
import {AddImageComponent} from './add-image/add-image.component';
import {GalleryComponent} from './gallery.component';

@NgModule({
    imports: [
        CommonModule,
        GalleryRoutingModule
    ],
    declarations: [
        GalleryComponent,
        ImagesComponent,
        AddImageComponent
    ]
})
export class GalleryModule {}
