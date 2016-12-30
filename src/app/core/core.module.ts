import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import {DataModule} from '../data/data.module';
import {AppUserService} from '../data/app-user.service';
import dataConfig from '../../secret/parse-config';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        DataModule
        // DataModule.forRoot(dataConfig)
    ],
    declarations: [],
    providers: [
        AppUserService
    ],
    exports: [
        CommonModule,
        FormsModule,
        HttpModule
    ]
})
export class CoreModule {}
