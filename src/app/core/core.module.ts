import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import {AppUserService} from './data/app-user.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppImageService} from './data/app-image.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        NgbModule.forRoot()
    ],
    declarations: [],
    providers: [
        AppUserService, AppImageService
    ],
    exports: [
        CommonModule,
        FormsModule,
        HttpModule,
        NgbModule
    ]
})
export class CoreModule {}
