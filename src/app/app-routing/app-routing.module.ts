import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HomeComponent} from '../home/home.component';
import {AuthGuardService} from '../authentication/auth-guard.service';

const routeConfig: Routes = [{

    path: 'home',
    component: HomeComponent,
    data: {title: 'Home'}
}, {

    path: 'gallery',
    loadChildren: 'app/gallery/gallery.module#GalleryModule',
    canLoad: [AuthGuardService]
}, {

    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
}, {

    path: '**',
    component: PageNotFoundComponent,
    data: {title: 'Not Found'}
}];

@NgModule({
    imports: [RouterModule.forRoot(routeConfig)],
    exports: [RouterModule]

})
export class AppRoutingModule {
}
