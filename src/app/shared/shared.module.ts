/**
 * Created by kidroca on 31.12.2016 г..
 */
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { FormInputComponent } from './form-input/form-input.component';
import {ErrorDefinitionService} from './form-input/error-definition.service';

@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    exports: [
        FormsModule,
        CommonModule,
        FormInputComponent
    ],
    declarations: [FormInputComponent],
    providers: [ErrorDefinitionService],
})
export class SharedModule { }

