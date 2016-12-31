import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { PageNotFoundComponent } from './app-routing/page-not-found/page-not-found.component';
import { TitleComponent } from './title/title.component';
import {GalleryModule} from './gallery/gallery.module';
import { HomeComponent } from './home/home.component';
import {AuthenticationModule} from './authentication/authentication.module';

@NgModule({
    imports: [
        BrowserModule,
        CoreModule,
        AuthenticationModule,
        GalleryModule,
        AppRoutingModule,
    ],
    declarations: [
        AppComponent,
        PageNotFoundComponent,
        TitleComponent,
        HomeComponent
    ],

    bootstrap: [AppComponent]
})
export class AppModule {}
