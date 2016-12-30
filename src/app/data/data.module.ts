import {NgModule, ModuleWithProviders} from '@angular/core';

import {AppUserService} from './app-user.service';
import {DataModuleConfig} from './data-module-config';
import {CommonModule} from '@angular/common';
import dataConfig from '../../secret/parse-config';

const Parse = require('parse');

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: []
})
export class DataModule {

    /**
     * @deprecated
     * Added a deprecation mark because this does not work correctly
     * in angular CLI
     */
    static forRoot(config: DataModuleConfig): ModuleWithProviders {

        Parse.serverURL = config.apiUrl;
        Parse.initialize(config.applicationId, config.jsKey);

        return {
            ngModule: DataModule,
            providers: [AppUserService]
        };
    }
}

DataModule.forRoot(dataConfig);
