import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import {DataModule} from './data/data.module';
import {AppUserService} from './data/app-user.service';
import {AuthGuardService} from '../authentication/auth-guard.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        DataModule
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
