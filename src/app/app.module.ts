import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { PageNotFoundComponent } from './app-routing/page-not-found/page-not-found.component';
import { TitleComponent } from './layout/title/title.component';
import { HomeComponent } from './layout/home/home.component';
import {AuthenticationModule} from './authentication/authentication.module';
import { HeaderComponent } from './layout/header/header.component';

@NgModule({
    imports: [
        BrowserModule,
        CoreModule,
        AuthenticationModule,
        AppRoutingModule,
    ],
    declarations: [
        AppComponent,
        PageNotFoundComponent,
        TitleComponent,
        HomeComponent,
        HeaderComponent
    ],

    bootstrap: [AppComponent]
})
export class AppModule {}
