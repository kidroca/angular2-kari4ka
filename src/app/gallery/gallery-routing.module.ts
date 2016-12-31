/**
 * Created by kidroca on 31.12.2016 г..
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GalleryComponent} from './gallery.component';
import {ImagesComponent} from './images/images.component';
import {AddImageComponent} from './add-image/add-image.component';
import {AuthGuardService} from '../authentication/auth-guard.service';

const routeConfig: Routes = [
    {
        path: 'gallery',
        component: GalleryComponent,
        canActivate: [AuthGuardService],
        data: {title: 'Gallery'},
        children: [
            {
                path: '',
                children: [
                    {path: 'images', component: ImagesComponent},
                    {path: 'add-image', component: AddImageComponent},
                    {path: '', redirectTo: './images', pathMatch: 'full'}
                ]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routeConfig)],
    exports: [RouterModule]
})
export class GalleryRoutingModule {}
